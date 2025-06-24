
import React, { useState } from 'react';
import { MessageSquare, Video, Mic, Users } from 'lucide-react';
import { ProgressMeter } from '@/components/ui/progress-meter';

const PresenceModule = () => {
  const [activeSkill, setActiveSkill] = useState('communication');

  const presenceMetrics = [
    { id: 'communication', name: 'Communication', score: 87, icon: MessageSquare },
    { id: 'confidence', name: 'Confidence', score: 79, icon: Video },
    { id: 'voice', name: 'Voice Quality', score: 82, icon: Mic },
    { id: 'leadership', name: 'Leadership', score: 74, icon: Users },
  ];

  const exercises = [
    {
      title: 'Public Speaking Practice',
      description: 'Record yourself speaking for 2 minutes on a topic',
      duration: '10 min',
      difficulty: 'Intermediate'
    },
    {
      title: 'Voice Modulation',
      description: 'Practice varying your tone and pace',
      duration: '15 min',
      difficulty: 'Beginner'
    },
    {
      title: 'Body Language Assessment',
      description: 'Video analysis of your non-verbal communication',
      duration: '5 min',
      difficulty: 'Advanced'
    },
  ];

  return (
    <div className="blueprint-module pb-24">
      {/* Header */}
      <div className="text-center mb-8 mt-16">
        <h1 className="blueprint-h1 mb-2">Presence</h1>
        <p className="blueprint-body-sm text-gray-600">Master your communication and leadership</p>
      </div>

      {/* Overall Presence Score */}
      <div className="blueprint-card-standard text-center mb-6">
        <h2 className="blueprint-h3 mb-4">Presence Score</h2>
        <div className="flex justify-center mb-4">
          <ProgressMeter 
            value={80} 
            size={120} 
            color="#10B981"
            showValue={true}
          />
        </div>
        <p className="blueprint-body-sm blueprint-success">Strong executive presence!</p>
      </div>

      {/* Presence Skills */}
      <div className="blueprint-card-standard mb-6">
        <h3 className="blueprint-h4 mb-4">Core Skills</h3>
        <div className="blueprint-grid grid-cols-2 gap-4">
          {presenceMetrics.map((metric) => {
            const Icon = metric.icon;
            return (
              <button
                key={metric.id}
                onClick={() => setActiveSkill(metric.id)}
                className={`text-center p-4 rounded-xl blueprint-transition ${
                  activeSkill === metric.id 
                    ? 'bg-black text-white' 
                    : 'bg-gray-100 hover:bg-gray-200'
                }`}
              >
                <Icon className="w-6 h-6 mx-auto mb-2" />
                <ProgressMeter 
                  value={metric.score} 
                  size={60} 
                  color={activeSkill === metric.id ? "#ffffff" : "#000000"}
                  showValue={false}
                />
                <p className="blueprint-caption mt-2 font-medium">{metric.name}</p>
                <p className="blueprint-caption">{metric.score}%</p>
              </button>
            );
          })}
        </div>
      </div>

      {/* Practice Exercises */}
      <div className="blueprint-card-standard mb-6">
        <h3 className="blueprint-h4 mb-4">Today's Exercises</h3>
        <div className="space-y-4">
          {exercises.map((exercise, index) => (
            <div key={index} className="p-4 border border-gray-200 rounded-xl">
              <div className="blueprint-flex-between mb-3">
                <h4 className="blueprint-body font-medium">{exercise.title}</h4>
                <span className={`blueprint-caption px-2 py-1 rounded ${
                  exercise.difficulty === 'Beginner' ? 'bg-green-100 text-green-800' :
                  exercise.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-red-100 text-red-800'
                }`}>
                  {exercise.difficulty}
                </span>
              </div>
              <p className="blueprint-body-sm text-gray-600 mb-3">
                {exercise.description}
              </p>
              <div className="blueprint-flex-between">
                <span className="blueprint-caption text-gray-500">{exercise.duration}</span>
                <button className="blueprint-btn-secondary py-2 px-4">
                  Start Exercise
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Progress Tracking */}
      <div className="blueprint-card-standard">
        <h3 className="blueprint-h4 mb-4">Weekly Progress</h3>
        <div className="space-y-4">
          <div>
            <div className="blueprint-flex-between mb-2">
              <span className="blueprint-body font-medium">Exercises Completed</span>
              <span className="blueprint-caption">12/15</span>
            </div>
            <div className="blueprint-progress-bg">
              <div className="blueprint-progress-fill" style={{ width: '80%' }}></div>
            </div>
          </div>
          <div>
            <div className="blueprint-flex-between mb-2">
              <span className="blueprint-body font-medium">Speaking Time</span>
              <span className="blueprint-caption">45/60 min</span>
            </div>
            <div className="blueprint-progress-bg">
              <div className="blueprint-progress-fill" style={{ width: '75%' }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PresenceModule;
