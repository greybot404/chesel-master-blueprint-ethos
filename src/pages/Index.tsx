
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
    <div className="min-h-screen bg-chesel-dark relative overflow-hidden">
      {/* Glassmorphism Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-400/10 rounded-full blur-3xl"></div>
        <div className="absolute top-3/4 left-1/2 w-64 h-64 bg-purple-500/5 rounded-full blur-2xl"></div>
      </div>
      
      {/* Glass Sidebar Trigger */}
      <div className="absolute top-4 left-4 z-50">
        <SidebarTrigger className="glass-button-primary glow-primary rounded-xl p-3 hover:scale-110 transition-all duration-300" />
      </div>
      
      {/* Main Content with Glass Effect */}
      <div className="relative z-10">
        {renderActiveModule()}
      </div>
      
      {/* Glass Bottom Navigation */}
      <BottomNav activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
};

export default Index;
