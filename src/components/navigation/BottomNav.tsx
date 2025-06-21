
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
    <div className="fixed bottom-0 left-0 right-0 glass-nav backdrop-blur-2xl border-t border-white/10">
      <div className="flex justify-around items-center py-3 px-2">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          
          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`flex flex-col items-center space-y-1 py-3 px-4 rounded-2xl transition-all duration-300 ${
                isActive 
                  ? 'text-chesel-primary glass-card-strong glow-primary scale-105' 
                  : 'text-blue-300/70 hover:text-chesel-primary glass-button hover:scale-105'
              }`}
            >
              <Icon className={`w-6 h-6 ${isActive ? 'drop-shadow-lg' : ''}`} />
              <span className="text-xs font-medium">{tab.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default BottomNav;
