
import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { User } from 'lucide-react';

interface BodyModuleProps {
  userGender: 'male' | 'female';
}

const BodyModule: React.FC<BodyModuleProps> = ({ userGender }) => {
  const [activeTab, setActiveTab] = useState('face');

  const tabs = [
    { id: 'face', label: 'Face' },
    { id: 'skin', label: 'Skin' },
    { id: 'hair', label: 'Hair' },
    ...(userGender === 'male' ? [{ id: 'beard', label: 'Beard' }] : []),
  ];

  const getScoreLabel = () => {
    switch (activeTab) {
      case 'face': return 'Face Score';
      case 'skin': return 'Skin Score';
      case 'hair': return 'Hair Score';
      case 'beard': return 'Beard Score';
      default: return 'Score';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-6 pb-24">
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-white">The UMAX Upgrade</h1>
          <p className="text-slate-300">Comprehensive aesthetic analysis</p>
        </div>

        <div className="flex justify-center">
          <div className="flex bg-slate-800/50 backdrop-blur-sm rounded-lg p-1 border border-slate-700">
            {tabs.map((tab) => (
              <Button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                variant={activeTab === tab.id ? "default" : "ghost"}
                className={`px-6 py-2 rounded-md transition-all duration-300 ${
                  activeTab === tab.id 
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg' 
                    : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
                }`}
              >
                {tab.label}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <Card className="p-6 bg-slate-800/50 backdrop-blur-sm border-slate-700">
            <div className="text-center space-y-4">
              <h3 className="text-lg font-semibold text-white">{getScoreLabel()}</h3>
              <div className="text-6xl font-bold text-blue-400">82</div>
              <div className="text-sm text-slate-400">Above Average</div>
            </div>
          </Card>
          
          <div className="space-y-4">
            <Card className="p-6 bg-slate-800/50 backdrop-blur-sm border-slate-700">
              <h3 className="font-semibold text-white mb-3">Deep Analysis</h3>
              <div className="space-y-2">
                {activeTab === 'face' && (
                  <>
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-300">Facial Symmetry</span>
                      <span className="text-blue-400">8.2/10</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-300">Golden Ratio</span>
                      <span className="text-blue-400">7.8/10</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-300">Jawline Definition</span>
                      <span className="text-blue-400">8.5/10</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-300">Canthal Tilt</span>
                      <span className="text-blue-400">7.9/10</span>
                    </div>
                  </>
                )}
                {activeTab === 'skin' && (
                  <>
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-300">Clarity</span>
                      <span className="text-green-400">9.1/10</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-300">Texture</span>
                      <span className="text-green-400">8.7/10</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-300">Tone Evenness</span>
                      <span className="text-yellow-400">7.3/10</span>
                    </div>
                  </>
                )}
              </div>
            </Card>
            
            <Card className="p-6 bg-slate-800/50 backdrop-blur-sm border-slate-700">
              <h3 className="font-semibold text-white mb-3">Enhancement Protocol</h3>
              <div className="space-y-2">
                {activeTab === 'face' && (
                  <>
                    <div className="text-slate-300 text-sm">• Consider mewing exercises for jawline enhancement</div>
                    <div className="text-slate-300 text-sm">• Maintain current skincare routine</div>
                    <div className="text-slate-300 text-sm">• Eyebrow grooming for better symmetry</div>
                  </>
                )}
                {activeTab === 'skin' && (
                  <>
                    <div className="text-slate-300 text-sm">• Add vitamin C serum for tone improvement</div>
                    <div className="text-slate-300 text-sm">• Increase hydration for texture enhancement</div>
                    <div className="text-slate-300 text-sm">• Weekly exfoliation recommended</div>
                  </>
                )}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BodyModule;
