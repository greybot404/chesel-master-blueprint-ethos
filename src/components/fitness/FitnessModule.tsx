
import React, { useState } from 'react';
import { Activity, Target, TrendingUp, Calendar } from 'lucide-react';
import { ProgressMeter } from '@/components/ui/progress-meter';

const FitnessModule = () => {
  const [activeMetric, setActiveMetric] = useState('strength');

  const fitnessMetrics = [
    { id: 'strength', name: 'Strength', score: 85, icon: Activity },
    { id: 'cardio', name: 'Cardio', score: 72, icon: TrendingUp },
    { id: 'flexibility', name: 'Flexibility', score: 68, icon: Target },
    { id: 'endurance', name: 'Endurance', score: 79, icon: Calendar },
  ];

  const workoutPlan = [
    { day: 'Monday', focus: 'Upper Body', duration: '45 min', completed: true },
    { day: 'Tuesday', focus: 'Cardio', duration: '30 min', completed: true },
    { day: 'Wednesday', focus: 'Lower Body', duration: '45 min', completed: false },
    { day: 'Thursday', focus: 'Rest', duration: '-', completed: false },
  ];

  return (
    <div className="blueprint-module pb-24">
      {/* Header */}
      <div className="text-center mb-8 mt-16">
        <h1 className="blueprint-h1 mb-2">Fitness</h1>
        <p className="blueprint-body-sm text-gray-600">Track your physical performance</p>
      </div>

      {/* Overall Fitness Score */}
      <div className="blueprint-card-standard text-center mb-6">
        <h2 className="blueprint-h3 mb-4">Overall Fitness Score</h2>
        <div className="flex justify-center mb-4">
          <ProgressMeter 
            value={76} 
            size={120} 
            color="#10B981"
            showValue={true}
          />
        </div>
        <p className="blueprint-body-sm blueprint-success">Keep pushing forward!</p>
      </div>

      {/* Fitness Metrics */}
      <div className="blueprint-card-standard mb-6">
        <h3 className="blueprint-h4 mb-4">Performance Metrics</h3>
        <div className="blueprint-grid grid-cols-2 gap-4">
          {fitnessMetrics.map((metric) => {
            const Icon = metric.icon;
            return (
              <button
                key={metric.id}
                onClick={() => setActiveMetric(metric.id)}
                className={`text-center p-4 rounded-xl blueprint-transition ${
                  activeMetric === metric.id 
                    ? 'bg-black text-white' 
                    : 'bg-gray-100 hover:bg-gray-200'
                }`}
              >
                <Icon className="w-6 h-6 mx-auto mb-2" />
                <ProgressMeter 
                  value={metric.score} 
                  size={60} 
                  color={activeMetric === metric.id ? "#ffffff" : "#000000"}
                  showValue={false}
                />
                <p className="blueprint-caption mt-2 font-medium">{metric.name}</p>
                <p className="blueprint-caption">{metric.score}%</p>
              </button>
            );
          })}
        </div>
      </div>

      {/* Weekly Plan */}
      <div className="blueprint-card-standard">
        <h3 className="blueprint-h4 mb-4">This Week's Plan</h3>
        <div className="space-y-3">
          {workoutPlan.map((workout, index) => (
            <div
              key={index}
              className={`blueprint-flex-between p-4 rounded-xl border ${
                workout.completed 
                  ? 'bg-green-50 border-green-200' 
                  : 'bg-gray-50 border-gray-200'
              }`}
            >
              <div>
                <p className="blueprint-body font-medium">{workout.day}</p>
                <p className="blueprint-body-sm text-gray-600">{workout.focus}</p>
              </div>
              <div className="text-right">
                <p className="blueprint-caption">{workout.duration}</p>
                <div className={`w-3 h-3 rounded-full mt-1 ml-auto ${
                  workout.completed ? 'bg-green-500' : 'bg-gray-300'
                }`}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FitnessModule;
