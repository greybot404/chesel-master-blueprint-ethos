
import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle, Target, Scan, Camera } from 'lucide-react';
import ProgressMeter from '@/components/ui/progress-meter';

const DailyProtocol: React.FC = () => {
  const [isCompleted, setIsCompleted] = useState(false);
  const currentDate = new Date().toLocaleDateString();

  const handleComplete = () => {
    setIsCompleted(true);
  };

  const handleScanFood = () => {
    console.log('Food scanner activated');
    // TODO: Implement food scanning functionality
  };

  // Sample data for the meters
  const metricsData = [
    { label: 'Calories Left', value: 1850, max: 2200, color: 'blue' as const },
    { label: 'Protein', value: 45, max: 120, color: 'green' as const },
    { label: 'Carbs', value: 180, max: 250, color: 'orange' as const },
    { label: 'Fat', value: 35, max: 80, color: 'purple' as const },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-6 pb-24">
      <div className="max-w-2xl mx-auto space-y-6">
        {/* Header */}
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold text-white">Chesel</h1>
          <p className="text-slate-300">{currentDate}</p>
        </div>

        {/* Food Scanner Card */}
        <Card className="p-6 bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm border border-slate-700/50 shadow-2xl">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">Scan Your Food</h3>
              <p className="text-slate-300 text-sm">Track calories instantly</p>
            </div>
            <Button
              onClick={handleScanFood}
              className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <Scan className="h-6 w-6" />
            </Button>
          </div>
        </Card>

        {/* Nutrition Meters */}
        <Card className="p-6 bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm border border-slate-700/50 shadow-2xl">
          <h3 className="text-xl font-semibold text-white mb-6 text-center">Today's Progress</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {metricsData.map((metric, index) => (
              <ProgressMeter
                key={metric.label}
                value={metric.value}
                max={metric.max}
                label={metric.label}
                color={metric.color}
                size="md"
              />
            ))}
          </div>
        </Card>

        {/* Daily Protocol Tasks */}
        <Card className="p-8 bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm border border-slate-700/50 shadow-2xl">
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <Target className="w-6 h-6 text-blue-400" />
              <h2 className="text-xl font-semibold text-white">Today's Protocol</h2>
            </div>

            <div className="space-y-4">
              <div className="bg-slate-700/30 p-4 rounded-lg border border-slate-600/30">
                <h3 className="font-medium text-blue-400 mb-2">Task 1 (Fitness)</h3>
                <p className="text-slate-200">
                  Your analysis indicates a slight pectoral imbalance. Add one additional set of incline dumbbell press to your next workout.
                </p>
              </div>

              <div className="bg-slate-700/30 p-4 rounded-lg border border-slate-600/30">
                <h3 className="font-medium text-purple-400 mb-2">Task 2 (Presence)</h3>
                <p className="text-slate-200">
                  In your next phone call, consciously lower your vocal pitch by 10%. Project authority.
                </p>
              </div>
            </div>

            <Button
              onClick={handleComplete}
              disabled={isCompleted}
              className={`w-full py-3 transition-all duration-300 ${
                isCompleted 
                  ? 'bg-green-600 hover:bg-green-600 text-white' 
                  : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl'
              }`}
            >
              {isCompleted ? (
                <div className="flex items-center justify-center space-x-2">
                  <CheckCircle className="w-5 h-5" />
                  <span>Completed</span>
                </div>
              ) : (
                'Mark as Complete'
              )}
            </Button>
          </div>
        </Card>

        {/* Overall Score Meter */}
        <Card className="p-6 bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm border border-slate-700/50 shadow-2xl">
          <h3 className="text-xl font-semibold text-white mb-6 text-center">Overall Score</h3>
          <div className="flex justify-center">
            <ProgressMeter
              value={78}
              max={100}
              label="Total Score"
              color="green"
              size="lg"
            />
          </div>
          <div className="mt-6 grid grid-cols-2 gap-4 text-center">
            <div className="bg-slate-700/30 p-3 rounded-lg">
              <div className="text-blue-400 font-semibold">Fitness</div>
              <div className="text-slate-300">85%</div>
            </div>
            <div className="bg-slate-700/30 p-3 rounded-lg">
              <div className="text-purple-400 font-semibold">Fashion</div>
              <div className="text-slate-300">72%</div>
            </div>
            <div className="bg-slate-700/30 p-3 rounded-lg">
              <div className="text-green-400 font-semibold">Body</div>
              <div className="text-slate-300">80%</div>
            </div>
            <div className="bg-slate-700/30 p-3 rounded-lg">
              <div className="text-orange-400 font-semibold">Presence</div>
              <div className="text-slate-300">75%</div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default DailyProtocol;
