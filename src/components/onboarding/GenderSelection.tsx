
import React from 'react';
import { Card } from '@/components/ui/card';

interface GenderSelectionProps {
  onSelect: (gender: 'male' | 'female') => void;
}

const GenderSelection: React.FC<GenderSelectionProps> = ({ onSelect }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-6">
      <div className="max-w-2xl w-full space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-white">Select Profile</h1>
          <p className="text-slate-300 text-lg">Choose your profile to personalize your experience</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          <Card 
            className="p-8 cursor-pointer transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20 border-slate-700 bg-slate-800/50 backdrop-blur-sm group hover:scale-105"
            onClick={() => onSelect('male')}
          >
            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full flex items-center justify-center group-hover:shadow-lg group-hover:shadow-blue-500/30 transition-all duration-300">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1.323l3.954 1.582 1.599-.8a1 1 0 011.2 1.556l-1.33 1.773A4.992 4.992 0 0116 9c0 1.657-.804 3.13-2.046 4.046L15.067 15H17a1 1 0 110 2H3a1 1 0 110-2h1.933l1.113-1.954A4.992 4.992 0 014 9c0-.771.183-1.498.507-2.146L3.177 5.081a1 1 0 011.2-1.556l1.599.8L9.93 2.676A1.993 1.993 0 0110 2z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-white">Male</h3>
              <p className="text-slate-400">Optimized protocols for male physiology</p>
            </div>
          </Card>

          <Card 
            className="p-8 cursor-pointer transition-all duration-300 hover:shadow-2xl hover:shadow-pink-500/20 border-slate-700 bg-slate-800/50 backdrop-blur-sm group hover:scale-105"
            onClick={() => onSelect('female')}
          >
            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto bg-gradient-to-br from-pink-500 to-rose-400 rounded-full flex items-center justify-center group-hover:shadow-lg group-hover:shadow-pink-500/30 transition-all duration-300">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1.323l3.954 1.582 1.599-.8a1 1 0 011.2 1.556l-1.33 1.773A4.992 4.992 0 0116 9c0 1.657-.804 3.13-2.046 4.046L15.067 15H17a1 1 0 110 2H3a1 1 0 110-2h1.933l1.113-1.954A4.992 4.992 0 014 9c0-.771.183-1.498.507-2.146L3.177 5.081a1 1 0 011.2-1.556l1.599.8L9.93 2.676A1.993 1.993 0 0110 2z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-white">Female</h3>
              <p className="text-slate-400">Optimized protocols for female physiology</p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default GenderSelection;
