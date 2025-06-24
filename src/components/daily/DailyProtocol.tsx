
import React from 'react';
import { Scan, Camera, Plus } from 'lucide-react';
import { ProgressMeter } from '@/components/ui/progress-meter';

const DailyProtocol = () => {
  const modules = [
    { name: 'Fitness', score: 76, color: '#000000' },
    { name: 'Fashion', score: 82, color: '#374151' },
    { name: 'Body', score: 68, color: '#6B7280' },
    { name: 'Presence', score: 91, color: '#10B981' },
  ];

  const quickActions = [
    { name: 'Food Scanner', icon: Scan, color: 'bg-black', textColor: 'text-white' },
    { name: 'Photo Upload', icon: Camera, color: 'bg-gray-100', textColor: 'text-gray-700' },
    { name: 'Quick Log', icon: Plus, color: 'bg-gray-100', textColor: 'text-gray-700' },
  ];

  return (
    <div className="flat-module pb-24">
      {/* Header */}
      <div className="text-center mb-8 mt-16">
        <h1 className="flat-h1 mb-2">Welcome to Chesel</h1>
        <p className="flat-body">Your daily wellness companion</p>
      </div>

      {/* Overall Score */}
      <div className="flat-card p-8 text-center mb-6">
        <h2 className="flat-h3 mb-4">Today's Overall Score</h2>
        <div className="flex justify-center mb-4">
          <ProgressMeter 
            value={79} 
            size={120} 
            color="#000000"
            backgroundColor="rgba(229, 231, 235, 1)"
            showValue={true}
          />
        </div>
        <p className="flat-body">Great progress today!</p>
      </div>

      {/* Module Scores */}
      <div className="flat-card p-6 mb-6">
        <h3 className="flat-h4 mb-4">Module Breakdown</h3>
        <div className="grid grid-cols-2 gap-4">
          {modules.map((module) => (
            <div key={module.name} className="text-center">
              <ProgressMeter 
                value={module.score} 
                size={80} 
                color={module.color}
                backgroundColor="rgba(229, 231, 235, 1)"
                showValue={true}
              />
              <p className="flat-caption mt-2 font-medium">{module.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="flat-card p-6 mb-6">
        <h3 className="flat-h4 mb-4">Quick Actions</h3>
        <div className="space-y-3">
          {quickActions.map((action, index) => {
            const Icon = action.icon;
            return (
              <button
                key={action.name}
                className={`w-full flex items-center gap-4 p-4 rounded-xl ${action.color} ${action.textColor} hover:scale-105 transition-all duration-200`}
              >
                <div className="p-2 bg-white/20 rounded-lg">
                  <Icon className="w-5 h-5" />
                </div>
                <span className="font-medium">{action.name}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Daily Progress */}
      <div className="flat-card p-6">
        <h3 className="flat-h4 mb-4">Daily Progress</h3>
        <div className="space-y-4">
          <div>
            <div className="flat-flex-between mb-2">
              <span className="flat-body font-medium">Water Intake</span>
              <span className="flat-caption">6/8 glasses</span>
            </div>
            <div className="flat-progress-bg">
              <div className="flat-progress-fill" style={{ width: '75%' }}></div>
            </div>
          </div>
          <div>
            <div className="flat-flex-between mb-2">
              <span className="flat-body font-medium">Steps</span>
              <span className="flat-caption">7,532/10,000</span>
            </div>
            <div className="flat-progress-bg">
              <div className="flat-progress-fill" style={{ width: '75%' }}></div>
            </div>
          </div>
          <div>
            <div className="flat-flex-between mb-2">
              <span className="flat-body font-medium">Sleep</span>
              <span className="flat-caption">7.5/8 hours</span>
            </div>
            <div className="flat-progress-bg">
              <div className="flat-progress-fill" style={{ width: '94%' }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DailyProtocol;
