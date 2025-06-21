
import React from 'react';
import { cn } from '@/lib/utils';

interface ProgressMeterProps {
  value: number;
  max: number;
  label: string;
  color?: 'blue' | 'green' | 'purple' | 'orange' | 'red';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const ProgressMeter: React.FC<ProgressMeterProps> = ({
  value,
  max,
  label,
  color = 'blue',
  size = 'md',
  className
}) => {
  const percentage = Math.min((value / max) * 100, 100);
  
  const colorClasses = {
    blue: 'from-blue-500 to-blue-600',
    green: 'from-green-500 to-green-600',
    purple: 'from-purple-500 to-purple-600',
    orange: 'from-orange-500 to-orange-600',
    red: 'from-red-500 to-red-600'
  };

  const sizeClasses = {
    sm: 'w-16 h-16 text-xs',
    md: 'w-20 h-20 text-sm',
    lg: 'w-24 h-24 text-base'
  };

  return (
    <div className={cn('flex flex-col items-center space-y-2', className)}>
      <div className={cn('relative rounded-full bg-slate-800/50 p-1', sizeClasses[size])}>
        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="currentColor"
            strokeWidth="8"
            className="text-slate-700"
          />
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray={`${percentage * 2.827} 282.7`}
            className={cn('transition-all duration-1000 ease-out bg-gradient-to-r', colorClasses[color])}
            style={{
              background: `conic-gradient(from 0deg, var(--gradient-from), var(--gradient-to) ${percentage}%, transparent ${percentage}%)`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
            stroke={`url(#gradient-${color})`}
          />
          <defs>
            <linearGradient id={`gradient-${color}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" className={colorClasses[color].split(' ')[0].replace('from-', 'stop-')} />
              <stop offset="100%" className={colorClasses[color].split(' ')[1].replace('to-', 'stop-')} />
            </linearGradient>
          </defs>
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <span className="font-bold">{value}</span>
          <span className="text-xs text-slate-400">/{max}</span>
        </div>
      </div>
      <span className="text-xs text-slate-300 text-center">{label}</span>
    </div>
  );
};

export default ProgressMeter;
