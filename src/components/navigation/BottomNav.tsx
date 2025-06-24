
import React from 'react';
import { Home, Dumbbell, Shirt, Scan, Brain } from 'lucide-react';

interface BottomNavProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const BottomNav: React.FC<BottomNavProps> = ({ activeTab, onTabChange }) => {
  const tabs = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'fitness', label: 'Fitness', icon: Dumbbell },
    { id: 'fashion', label: 'Fashion', icon: Shirt },
    { id: 'body', label: 'Body', icon: Scan },
    { id: 'presence', label: 'Presence', icon: Brain },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200">
      <div className="flex justify-around items-center py-2 px-2">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          
          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`flex flex-col items-center space-y-1 blueprint-transition ${
                isActive 
                  ? 'blueprint-btn-nav-active' 
                  : 'blueprint-btn-nav-inactive'
              }`}
            >
              <Icon className="w-5 h-5" />
              <span className="blueprint-caption font-medium">{tab.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default BottomNav;
