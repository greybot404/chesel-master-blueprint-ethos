
import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Camera, Search, Shirt, Upload } from 'lucide-react';

const FashionModule: React.FC = () => {
  const [currentMode, setCurrentMode] = useState<'selection' | 'review' | 'results'>('selection');
  const [occasion, setOccasion] = useState('');

  const renderModeSelection = () => (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-white mb-2">Fashion Intelligence</h2>
        <p className="text-slate-300">Choose your analysis mode</p>
      </div>
      
      <div className="grid gap-4">
        <Card 
          className="p-6 cursor-pointer transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 border-slate-700 bg-slate-800/50 backdrop-blur-sm group hover:scale-102"
          onClick={() => setCurrentMode('review')}
        >
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center group-hover:shadow-lg group-hover:shadow-blue-500/30 transition-all duration-300">
              <Camera className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white">Outfit Review</h3>
              <p className="text-slate-400 text-sm">Get a critical score on your current outfit</p>
            </div>
          </div>
        </Card>

        <Card className="p-6 cursor-pointer transition-all duration-300 hover:shadow-lg hover:shadow-green-500/20 border-slate-700 bg-slate-800/50 backdrop-blur-sm group hover:scale-102">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-400 rounded-lg flex items-center justify-center group-hover:shadow-lg group-hover:shadow-green-500/30 transition-all duration-300">
              <Search className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white">Outfit Finder</h3>
              <p className="text-slate-400 text-sm">Identify items in a photo</p>
            </div>
          </div>
        </Card>

        <Card className="p-6 cursor-pointer transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 border-slate-700 bg-slate-800/50 backdrop-blur-sm group hover:scale-102">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-400 rounded-lg flex items-center justify-center group-hover:shadow-lg group-hover:shadow-purple-500/30 transition-all duration-300">
              <Shirt className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white">Personal Stylist</h3>
              <p className="text-slate-400 text-sm">Get an outfit suggestion for an occasion</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );

  const renderOutfitReview = () => (
    <div className="space-y-6">
      <Card className="p-8 bg-slate-800/50 backdrop-blur-sm border-slate-700 text-center space-y-6">
        <div className="w-16 h-16 mx-auto bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full flex items-center justify-center">
          <Upload className="w-8 h-8 text-white" />
        </div>
        <h2 className="text-2xl font-bold text-white">Upload Your Outfit</h2>
        <Button className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white px-8 py-3">
          Choose Photo
        </Button>
      </Card>

      <Card className="p-6 bg-slate-800/50 backdrop-blur-sm border-slate-700 space-y-4">
        <h3 className="text-lg font-semibold text-white">Specify Occasion</h3>
        <Input
          placeholder="e.g., Board Meeting, Casual Weekend, etc."
          value={occasion}
          onChange={(e) => setOccasion(e.target.value)}
          className="bg-slate-700 border-slate-600 text-white placeholder-slate-400"
        />
        <Button
          onClick={() => setCurrentMode('results')}
          disabled={occasion.length < 5}
          className="w-full bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Analyze Outfit
        </Button>
      </Card>
    </div>
  );

  const renderResults = () => (
    <div className="grid md:grid-cols-2 gap-6">
      <Card className="p-6 bg-slate-800/50 backdrop-blur-sm border-slate-700">
        <div className="aspect-square bg-slate-700 rounded-lg flex items-center justify-center">
          <span className="text-slate-400">Your Outfit Photo</span>
        </div>
      </Card>
      
      <div className="space-y-4">
        <Card className="p-6 bg-slate-800/50 backdrop-blur-sm border-slate-700">
          <h3 className="font-semibold text-white mb-3">Review Score</h3>
          <div className="text-4xl font-bold text-blue-400">74</div>
          <p className="text-slate-400 text-sm mt-2">Professional appropriate</p>
        </Card>
        
        <Card className="p-6 bg-slate-800/50 backdrop-blur-sm border-slate-700">
          <h3 className="font-semibold text-white mb-3">Stylist's Critique</h3>
          <p className="text-slate-300 text-sm">
            Strong foundation with the navy suit. The fit appears excellent through the shoulders. 
            The tie choice complements well, though the pattern could be more refined for the occasion.
          </p>
        </Card>
        
        <Card className="p-6 bg-slate-800/50 backdrop-blur-sm border-slate-700">
          <h3 className="font-semibold text-white mb-3">Enhancement Protocol</h3>
          <div className="space-y-2">
            <div className="text-slate-300 text-sm">
              <strong>Suggestion:</strong> Swap the leather belt for a woven one to add texture.
            </div>
            <div className="text-slate-300 text-sm">
              <strong>Upgrade:</strong> Consider a silk pocket square for elevated sophistication.
            </div>
          </div>
        </Card>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-6 pb-24">
      <div className="max-w-4xl mx-auto space-y-6">
        {currentMode === 'selection' && renderModeSelection()}
        {currentMode === 'review' && renderOutfitReview()}
        {currentMode === 'results' && renderResults()}
      </div>
    </div>
  );
};

export default FashionModule;
