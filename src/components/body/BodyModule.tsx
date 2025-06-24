
import React, { useState } from 'react';
import { Eye, Droplets, Scissors, User, Camera } from 'lucide-react';
import { ProgressMeter } from '@/components/ui/progress-meter';

interface BodyModuleProps {
  userGender: 'male' | 'female';
}

const BodyModule: React.FC<BodyModuleProps> = ({ userGender }) => {
  const [activeTab, setActiveTab] = useState('face');

  const tabs = [
    { id: 'face', label: 'Face', icon: Eye },
    { id: 'skin', label: 'Skin', icon: Droplets },
    { id: 'hair', label: 'Hair', icon: Scissors },
    ...(userGender === 'male' ? [{ id: 'beard', label: 'Beard', icon: User }] : []),
  ];

  const analysisData = {
    face: {
      score: 84,
      metrics: [
        { name: 'Symmetry', value: 88 },
        { name: 'Jawline', value: 82 },
        { name: 'Cheekbones', value: 86 },
      ]
    },
    skin: {
      score: 76,
      metrics: [
        { name: 'Clarity', value: 78 },
        { name: 'Hydration', value: 82 },
        { name: 'Texture', value: 68 },
      ]
    },
    hair: {
      score: 91,
      metrics: [
        { name: 'Health', value: 93 },
        { name: 'Style', value: 89 },
        { name: 'Volume', value: 91 },
      ]
    },
    beard: {
      score: 79,
      metrics: [
        { name: 'Grooming', value: 85 },
        { name: 'Shape', value: 76 },
        { name: 'Density', value: 77 },
      ]
    }
  };

  const currentData = analysisData[activeTab as keyof typeof analysisData];

  return (
    <div className="blueprint-module pb-24">
      {/* Header */}
      <div className="text-center mb-8 mt-16">
        <h1 className="blueprint-h1 mb-2">Body Analysis</h1>
        <p className="blueprint-body-sm text-gray-600">Comprehensive physical assessment</p>
      </div>

      {/* Tab Navigation */}
      <div className="blueprint-card-standard mb-6">
        <div className="flex space-x-2 mb-6">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 blueprint-flex-center gap-2 py-3 px-4 rounded-xl blueprint-transition ${
                  activeTab === tab.id
                    ? 'blueprint-btn-nav-active'
                    : 'blueprint-btn-nav-inactive'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span className="blueprint-caption font-medium">{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Current Tab Score */}
        <div className="text-center mb-6">
          <h3 className="blueprint-h4 mb-4 capitalize">{activeTab} Score</h3>
          <div className="flex justify-center">
            <ProgressMeter 
              value={currentData.score} 
              size={100} 
              color="#000000"
              showValue={true}
            />
          </div>
        </div>

        {/* Detailed Metrics */}
        <div className="space-y-4">
          {currentData.metrics.map((metric, index) => (
            <div key={index}>
              <div className="blueprint-flex-between mb-2">
                <span className="blueprint-body font-medium">{metric.name}</span>
                <span className="blueprint-caption">{metric.value}%</span>
              </div>
              <div className="blueprint-progress-bg">
                <div 
                  className="blueprint-progress-fill" 
                  style={{ width: `${metric.value}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Photo Upload */}
      <div className="blueprint-card-upload mb-6">
        <Camera className="w-12 h-12 mx-auto mb-4 text-gray-400" />
        <h3 className="blueprint-h4 mb-2">Update Analysis</h3>
        <p className="blueprint-body-sm text-gray-600 mb-4">
          Upload a new photo for updated {activeTab} analysis
        </p>
        <button className="blueprint-btn-primary">
          Take Photo
        </button>
      </div>

      {/* Recommendations */}
      <div className="blueprint-card-standard">
        <h3 className="blueprint-h4 mb-4">Recommendations</h3>
        <div className="space-y-3">
          <div className="p-4 bg-gray-50 rounded-xl">
            <h4 className="blueprint-body font-medium mb-2">Daily Routine</h4>
            <p className="blueprint-body-sm text-gray-600">
              Follow a consistent skincare routine with gentle cleansing and moisturizing.
            </p>
          </div>
          <div className="p-4 bg-gray-50 rounded-xl">
            <h4 className="blueprint-body font-medium mb-2">Professional Care</h4>
            <p className="blueprint-body-sm text-gray-600">
              Consider monthly professional treatments for optimal results.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BodyModule;
