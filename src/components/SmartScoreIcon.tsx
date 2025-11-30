import React from 'react';

interface SmartScoreIconProps {
  size?: number;
}

const SmartScoreIcon: React.FC<SmartScoreIconProps> = ({ size = 60 }) => {
  return (
    <div 
      style={{
        width: size,
        height: size,
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        borderRadius: size * 0.2,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 4px 12px rgba(102, 126, 234, 0.3)',
        margin: '0 auto 8px auto'
      }}
    >
      <svg 
        width={size * 0.6} 
        height={size * 0.6} 
        viewBox="0 0 24 24" 
        fill="white"
      >
        {/* Musical note and waveform icon */}
        <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
        <path d="M3 9v6h2l4 4V5L5 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" opacity="0.7"/>
      </svg>
    </div>
  );
};

export default SmartScoreIcon;