
import React from 'react';
import { Card } from '@/components/ui/card';
import { User, Users } from 'lucide-react';

interface GenderSelectionProps {
  onSelect: (gender: 'male' | 'female') => void;
}

const GenderSelection: React.FC<GenderSelectionProps> = ({ onSelect }) => {
  return (
    <div className="min-h-screen bg-white blueprint-flex-center p-6">
      <div className="max-w-2xl w-full space-y-8">
        <div className="text-center space-y-4">
          <h1 className="blueprint-h1">Welcome to Chesel</h1>
          <p className="blueprint-body text-gray-600">Choose your profile to personalize your wellness journey</p>
        </div>
        
        <div className="blueprint-grid md:grid-cols-2 gap-6">
          <Card 
            className="blueprint-card-standard cursor-pointer blueprint-hover-scale group"
            onClick={() => onSelect('male')}
          >
            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto bg-black rounded-full blueprint-flex-center group-hover:bg-gray-800 blueprint-transition">
                <User className="w-8 h-8 text-white" />
              </div>
              <h3 className="blueprint-h3">Male</h3>
              <p className="blueprint-body-sm text-gray-600">
                Optimized protocols for male physiology
              </p>
            </div>
          </Card>

          <Card 
            className="blueprint-card-standard cursor-pointer blueprint-hover-scale group"
            onClick={() => onSelect('female')}
          >
            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto bg-black rounded-full blueprint-flex-center group-hover:bg-gray-800 blueprint-transition">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="blueprint-h3">Female</h3>
              <p className="blueprint-body-sm text-gray-600">
                Optimized protocols for female physiology
              </p>
            </div>
          </Card>
        </div>
        
        <div className="text-center">
          <p className="blueprint-caption text-gray-500">
            This helps us personalize your experience and recommendations
          </p>
        </div>
      </div>
    </div>
  );
};

export default GenderSelection;
