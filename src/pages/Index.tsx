
import React, { useState } from 'react';
import GenderSelection from '@/components/onboarding/GenderSelection';
import BottomNav from '@/components/navigation/BottomNav';
import DailyProtocol from '@/components/daily/DailyProtocol';
import FitnessModule from '@/components/fitness/FitnessModule';
import FashionModule from '@/components/fashion/FashionModule';
import BodyModule from '@/components/body/BodyModule';
import PresenceModule from '@/components/presence/PresenceModule';
import { SidebarTrigger } from '@/components/ui/sidebar';

const Index = () => {
  const [userGender, setUserGender] = useState<'male' | 'female' | null>(null);
  const [activeTab, setActiveTab] = useState('home');

  const handleGenderSelect = (gender: 'male' | 'female') => {
    setUserGender(gender);
    console.log('Gender selected:', gender);
  };

  if (!userGender) {
    return <GenderSelection onSelect={handleGenderSelect} />;
  }

  const renderActiveModule = () => {
    switch (activeTab) {
      case 'home':
        return <DailyProtocol />;
      case 'fitness':
        return <FitnessModule />;
      case 'fashion':
        return <FashionModule />;
      case 'body':
        return <BodyModule userGender={userGender} />;
      case 'presence':
        return <PresenceModule />;
      default:
        return <DailyProtocol />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Sidebar Trigger */}
      <div className="absolute top-4 left-4 z-50">
        <SidebarTrigger className="blueprint-btn-secondary rounded-xl p-3 blueprint-hover-scale blueprint-transition" />
      </div>
      
      {/* Main Content */}
      <div className="relative">
        {renderActiveModule()}
      </div>
      
      {/* Bottom Navigation */}
      <BottomNav activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
};

export default Index;
