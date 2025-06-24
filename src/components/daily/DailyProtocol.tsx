
import React from 'react';
import { Scan, Camera, Plus } from 'lucide-react';
import { ProgressMeter } from '@/components/ui/progress-meter';

const DailyProtocol = () => {
  const modules = [
    { name: 'Fitness', score: 76, color: '#000000' },
    { name: 'Fashion', score: 82, color: '#000000' },
    { name: 'Body', score: 68, color: '#000000' },
    { name: 'Presence', score: 91, color: '#10B981' }, // Green accent for high score
  ];

  const quickActions = [
    { 
      name: 'Food Scanner', 
      icon: Scan, 
      primary: true
    },
    { 
      name: 'Photo Upload', 
      icon: Camera, 
      primary: false
    },
    { 
      name: 'Quick Log', 
      icon: Plus, 
      primary: false
    },
  ];

  return (
    <div className="blueprint-module pb-24">
      {/* Header */}
      <div className="text-center mb-8 mt-16">
        <h1 className="blueprint-h1 mb-2">Welcome to Chesel</h1>
        <p className="blueprint-body-sm">Your daily wellness companion</p>
      </div>

      {/* Overall Score */}
      <div className="blueprint-card-standard text-center mb-6">
        <h2 className="blueprint-h3 mb-4">Today's Overall Score</h2>
        <div className="flex justify-center mb-4">
          <ProgressMeter 
            value={79} 
            size={120} 
            color="#10B981"
            backgroundColor="#ffffff"
            showValue={true}
          />
        </div>
        <p className="blueprint-body-sm blueprint-success">Great progress today!</p>
      </div>

      {/* Module Scores */}
      <div className="blueprint-card-standard mb-6">
        <h3 className="blueprint-h4 mb-4">Module Breakdown</h3>
        <div className="blueprint-grid grid-cols-2">
          {modules.map((module) => (
            <div key={module.name} className="text-center">
              <ProgressMeter 
                value={module.score} 
                size={80} 
                color={module.color}
                backgroundColor="#ffffff"
                showValue={true}
              />
              <p className="blueprint-caption mt-2 font-medium">{module.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="blueprint-card-standard mb-6">
        <h3 className="blueprint-h4 mb-4">Quick Actions</h3>
        <div className="space-y-3">
          {quickActions.map((action, index) => {
            const Icon = action.icon;
            return (
              <button
                key={action.name}
                className={`w-full blueprint-flex-center gap-4 p-4 rounded-xl blueprint-hover-scale ${
                  action.primary 
                    ? 'blueprint-btn-primary' 
                    : 'blueprint-btn-secondary'
                }`}
              >
                <div className={`p-2 rounded-lg border ${
                  action.primary 
                    ? 'bg-white/20 border-white/30' 
                    : 'bg-gray-200 border-gray-300'
                }`}>
                  <Icon className="w-5 h-5" />
                </div>
                <span className="font-medium">{action.name}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Daily Progress */}
      <div className="blueprint-card-standard">
        <h3 className="blueprint-h4 mb-4">Daily Progress</h3>
        <div className="space-y-4">
          <div>
            <div className="blueprint-flex-between mb-2">
              <span className="blueprint-body font-medium">Water Intake</span>
              <span className="blueprint-caption">6/8 glasses</span>
            </div>
            <div className="blueprint-progress-bg">
              <div className="blueprint-progress-fill" style={{ width: '75%' }}></div>
            </div>
          </div>
          <div>
            <div className="blueprint-flex-between mb-2">
              <span className="blueprint-body font-medium">Steps</span>
              <span className="blueprint-caption">7,532/10,000</span>
            </div>
            <div className="blueprint-progress-bg">
              <div className="blueprint-progress-fill" style={{ width: '75%' }}></div>
            </div>
          </div>
          <div>
            <div className="blueprint-flex-between mb-2">
              <span className="blueprint-body font-medium">Sleep</span>
              <span className="blueprint-caption blueprint-success">7.5/8 hours</span>
            </div>
            <div className="blueprint-progress-bg">
              <div className="blueprint-success-bg rounded-full h-full transition-all duration-300" style={{ width: '94%' }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DailyProtocol;
