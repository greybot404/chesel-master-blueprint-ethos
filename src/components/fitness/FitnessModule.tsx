
import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Upload, Target, Dumbbell } from 'lucide-react';

const FitnessModule: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<'upload' | 'goal' | 'results'>('upload');

  const renderUploadStep = () => (
    <div className="space-y-6">
      <Card className="p-8 bg-slate-800/50 backdrop-blur-sm border-slate-700 text-center space-y-6">
        <div className="w-16 h-16 mx-auto bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full flex items-center justify-center">
          <Upload className="w-8 h-8 text-white" />
        </div>
        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-white">Fitness Analysis</h2>
          <p className="text-slate-300">
            To begin, upload a clear, full-body physique photograph. Ensure lighting is consistent.
          </p>
        </div>
        <Button 
          onClick={() => setCurrentStep('goal')}
          className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white px-8 py-3"
        >
          Upload Physique
        </Button>
      </Card>
    </div>
  );

  const renderGoalStep = () => (
    <div className="space-y-6">
      <Card className="p-8 bg-slate-800/50 backdrop-blur-sm border-slate-700 space-y-6">
        <div className="flex items-center space-x-3">
          <Target className="w-6 h-6 text-blue-400" />
          <h2 className="text-2xl font-bold text-white">Define Goal Vector</h2>
        </div>
        
        <div className="space-y-4">
          <div className="p-4 border border-slate-600 rounded-lg space-y-3">
            <p className="text-slate-200">Upload a reference photo of your goal physique.</p>
            <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600">
              Upload Goal Image
            </Button>
          </div>
          
          <div className="text-center text-slate-400 font-medium">OR</div>
          
          <div className="p-4 border border-slate-600 rounded-lg space-y-3">
            <p className="text-slate-200">Select a primary objective.</p>
            <div className="grid grid-cols-1 gap-2">
              <Button 
                onClick={() => setCurrentStep('results')}
                variant="outline" 
                className="border-slate-600 text-slate-200 hover:bg-slate-700"
              >
                Build Muscle
              </Button>
              <Button 
                onClick={() => setCurrentStep('results')}
                variant="outline" 
                className="border-slate-600 text-slate-200 hover:bg-slate-700"
              >
                Lose Fat
              </Button>
              <Button 
                onClick={() => setCurrentStep('results')}
                variant="outline" 
                className="border-slate-600 text-slate-200 hover:bg-slate-700"
              >
                Improve Definition
              </Button>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );

  const renderResultsStep = () => (
    <div className="grid md:grid-cols-2 gap-6">
      <Card className="p-6 bg-slate-800/50 backdrop-blur-sm border-slate-700">
        <div className="text-center space-y-4">
          <h3 className="text-lg font-semibold text-white">Physique Score</h3>
          <div className="text-6xl font-bold text-blue-400">58</div>
          <div className="text-sm text-slate-400">Overall Assessment</div>
        </div>
      </Card>
      
      <div className="space-y-4">
        <Card className="p-6 bg-slate-800/50 backdrop-blur-sm border-slate-700">
          <h3 className="font-semibold text-white mb-3">Critique</h3>
          <p className="text-slate-300 text-sm">
            Your upper body shows strong development, but a slight asymmetry is noted in the lats. 
            Leanness is adequate but could be improved by 2-3% to reveal greater abdominal definition...
          </p>
        </Card>
        
        <Card className="p-6 bg-slate-800/50 backdrop-blur-sm border-slate-700">
          <h3 className="font-semibold text-white mb-3">Action Plan: Workout Protocol</h3>
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Dumbbell className="w-4 h-4 text-blue-400" />
              <span className="text-slate-300 text-sm">Increase lat focus exercises</span>
            </div>
            <div className="flex items-center space-x-2">
              <Dumbbell className="w-4 h-4 text-blue-400" />
              <span className="text-slate-300 text-sm">Add cardio for fat loss</span>
            </div>
          </div>
        </Card>
        
        <Card className="p-6 bg-slate-800/50 backdrop-blur-sm border-slate-700">
          <h3 className="font-semibold text-white mb-3">Action Plan: Supplement Stack</h3>
          <div className="space-y-2">
            <div className="text-slate-300 text-sm">• Creatine Monohydrate (5g daily)</div>
            <div className="text-slate-300 text-sm">• L-Carnitine (2g pre-workout)</div>
          </div>
        </Card>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-6 pb-24">
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-white">Fitness Intelligence</h1>
        </div>
        
        {currentStep === 'upload' && renderUploadStep()}
        {currentStep === 'goal' && renderGoalStep()}
        {currentStep === 'results' && renderResultsStep()}
      </div>
    </div>
  );
};

export default FitnessModule;
