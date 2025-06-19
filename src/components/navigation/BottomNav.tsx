
import React from 'react';
import { Home, Dumbbell, Shirt, User, Zap } from 'lucide-react';

interface BottomNavProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const BottomNav: React.FC<BottomNavProps> = ({ activeTab, onTabChange }) => {
  const tabs = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'fitness', label: 'Fitness', icon: Dumbbell },
    { id: 'fashion', label: 'Fashion', icon: Shirt },
    { id: 'body', label: 'Body', icon: User },
    { id: 'presence', label: 'Presence', icon: Zap },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-slate-800/95 backdrop-blur-sm border-t border-slate-700">
      <div className="flex justify-around items-center py-2">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          
          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`flex flex-col items-center space-y-1 py-2 px-4 rounded-lg transition-all duration-300 ${
                isActive 
                  ? 'text-blue-400 shadow-lg shadow-blue-500/20 bg-blue-500/10' 
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-700/50'
              }`}
            >
              <Icon className={`w-5 h-5 ${isActive ? 'drop-shadow-sm' : ''}`} />
              <span className="text-xs font-medium">{tab.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default BottomNav;
