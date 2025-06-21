
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ProgressMeter } from '@/components/ui/progress-meter';
import { Calendar, Trophy, Target, TrendingUp } from 'lucide-react';

const DailyProtocol = () => {
  const dailyScores = [
    { category: 'Fitness', score: 85, color: '#3b82f6', icon: '💪' },
    { category: 'Fashion', score: 72, color: '#8b5cf6', icon: '👔' },
    { category: 'Body Care', score: 91, color: '#06b6d4', icon: '🧴' },
    { category: 'Presence', score: 78, color: '#10b981', icon: '⚡' },
  ];

  const todayTasks = [
    { task: 'Morning Workout', completed: true, time: '7:00 AM' },
    { task: 'Skincare Routine', completed: true, time: '8:30 AM' },
    { task: 'Outfit Planning', completed: false, time: '9:00 AM' },
    { task: 'Posture Check', completed: false, time: '2:00 PM' },
    { task: 'Evening Meditation', completed: false, time: '8:00 PM' },
  ];

  return (
    <div className="min-h-screen p-6 pb-24 space-y-6">
      {/* Header Section */}
      <div className="glass-card-strong rounded-3xl p-6 glow-primary">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-3xl font-bold text-chesel-light mb-2">
              Daily Protocol
            </h1>
            <p className="text-blue-300/80 text-lg">
              {new Date().toLocaleDateString('en-US', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </p>
          </div>
          <div className="flex gap-3">
            {/* Food Scanner Button */}
            <button className="glass-button-primary p-4 rounded-2xl hover:scale-110 transition-all duration-300 glow-primary">
              <img 
                src="/images/icons/scanner-qr.svg" 
                alt="Food Scanner" 
                className="h-8 w-8 filter brightness-0 invert"
                title="Scan Food for Calories"
              />
            </button>
            <div className="glass-button p-4 rounded-2xl">
              <Calendar className="h-8 w-8 text-blue-300" />
            </div>
          </div>
        </div>
        
        {/* Overall Score */}
        <div className="text-center">
          <div className="text-5xl font-bold text-chesel-primary mb-2">81</div>
          <div className="text-blue-300/80 text-lg">Overall Score</div>
        </div>
      </div>

      {/* Score Meters Grid */}
      <div className="grid grid-cols-2 gap-4">
        {dailyScores.map((item) => (
          <Card key={item.category} className="glass-card border-white/10 rounded-2xl overflow-hidden">
            <CardHeader className="pb-3">
              <CardTitle className="text-chesel-light text-lg flex items-center gap-2">
                <span className="text-2xl">{item.icon}</span>
                {item.category}
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="flex items-center justify-center">
                <ProgressMeter
                  value={item.score}
                  size={100}
                  strokeWidth={8}
                  color={item.color}
                />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Daily Tasks */}
      <Card className="glass-card-strong border-white/10 rounded-2xl">
        <CardHeader>
          <CardTitle className="text-chesel-light text-xl flex items-center gap-3">
            <Target className="h-6 w-6 text-chesel-primary" />
            Today's Tasks
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {todayTasks.map((task, index) => (
            <div
              key={index}
              className={`flex items-center justify-between p-4 rounded-xl transition-all duration-300 ${
                task.completed 
                  ? 'glass-button-primary text-blue-100' 
                  : 'glass-button text-blue-300 hover:glass-card'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                  task.completed 
                    ? 'bg-chesel-primary border-chesel-primary' 
                    : 'border-blue-400/50'
                }`}>
                  {task.completed && <div className="w-2 h-2 bg-white rounded-full"></div>}
                </div>
                <span className={`font-medium ${task.completed ? 'line-through opacity-75' : ''}`}>
                  {task.task}
                </span>
              </div>
              <span className="text-sm opacity-70">{task.time}</span>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Progress Stats */}
      <div className="grid grid-cols-2 gap-4">
        <Card className="glass-card border-white/10 rounded-2xl">
          <CardContent className="p-6 text-center">
            <Trophy className="h-8 w-8 text-yellow-400 mx-auto mb-3" />
            <div className="text-2xl font-bold text-chesel-light mb-1">12</div>
            <div className="text-blue-300/80 text-sm">Goals Achieved</div>
          </CardContent>
        </Card>
        
        <Card className="glass-card border-white/10 rounded-2xl">
          <CardContent className="p-6 text-center">
            <TrendingUp className="h-8 w-8 text-green-400 mx-auto mb-3" />
            <div className="text-2xl font-bold text-chesel-light mb-1">+5%</div>
            <div className="text-blue-300/80 text-sm">Weekly Growth</div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DailyProtocol;
