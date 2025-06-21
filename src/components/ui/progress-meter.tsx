
import React from 'react';

interface ProgressMeterProps {
  value: number;
  size?: number;
  strokeWidth?: number;
  color?: string;
  backgroundColor?: string;
  showValue?: boolean;
  className?: string;
}

export const ProgressMeter: React.FC<ProgressMeterProps> = ({
  value,
  size = 120,
  strokeWidth = 8,
  color = '#3b82f6',
  backgroundColor = 'rgba(255, 255, 255, 0.1)',
  showValue = true,
  className = '',
}) => {
  const normalizedValue = Math.min(Math.max(value, 0), 100);
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const strokeDasharray = circumference;
  const strokeDashoffset = circumference - (normalizedValue / 100) * circumference;
  
  // Create gradient ID based on color
  const gradientId = `gradient-${color.replace('#', '')}`;
  
  return (
    <div className={`relative inline-flex items-center justify-center ${className}`}>
      <svg
        width={size}
        height={size}
        className="transform -rotate-90 drop-shadow-lg"
      >
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={color} stopOpacity="0.8" />
            <stop offset="50%" stopColor={color} stopOpacity="1" />
            <stop offset="100%" stopColor={color} stopOpacity="0.6" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        {/* Background Circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={backgroundColor}
          strokeWidth={strokeWidth}
          fill="transparent"
          className="opacity-30"
        />
        
        {/* Progress Circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={`url(#${gradientId})`}
          strokeWidth={strokeWidth}
          fill="transparent"
          strokeDasharray={strokeDasharray}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          className="transition-all duration-1000 ease-out"
          filter="url(#glow)"
          style={{
            filter: `drop-shadow(0 0 8px ${color}40)`,
          }}
        />
      </svg>
      
      {/* Value Text */}
      {showValue && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div 
              className="text-2xl font-bold"
              style={{ color: color }}
            >
              {Math.round(normalizedValue)}
            </div>
            <div className="text-xs text-blue-300/70 font-medium">
              SCORE
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
