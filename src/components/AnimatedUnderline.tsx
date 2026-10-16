import React from 'react';

interface AnimatedUnderlineProps {
  children: React.ReactNode;
  color?: string;
  className?: string;
}

export const AnimatedUnderline: React.FC<AnimatedUnderlineProps> = ({
  children,
  color = '#10b981',
  className = ''
}) => {
  return (
    <span className={`relative inline-block whitespace-nowrap ${className}`}>
      <span className="relative z-10">{children}</span>
      <svg
        className="absolute -bottom-1.5 sm:-bottom-2.5 left-0 w-full h-3 sm:h-4 pointer-events-none overflow-visible z-0"
        viewBox="0 0 100 12"
        fill="none"
        preserveAspectRatio="none"
      >
        <path
          d="M2,8 C25,2 60,11 98,4 C82,10 40,11 12,9"
          stroke={color}
          strokeWidth="2.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="animate-draw-line"
          style={{
            strokeDasharray: 200,
            strokeDashoffset: 0,
            opacity: 0.95
          }}
        />
      </svg>
    </span>
  );
};
