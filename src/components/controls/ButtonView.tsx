import React from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'success' | 'warning' | 'error';

interface ButtonViewProps {
  label: string;
  onClick?: () => void;
  variant?: ButtonVariant;
  disabled?: boolean;
  className?: string;
  style?: React.CSSProperties;
  icon?: React.ReactNode;
}

const ButtonView: React.FC<ButtonViewProps> = ({
  label,
  onClick,
  variant = 'primary',
  disabled = false,
  className = '',
  style,
  icon
}) => {
  const buttonClass = `btn btn-${variant} ${className} ${disabled ? 'disabled' : ''}`;
  
  const handleClick = () => {
    if (!disabled && onClick) {
      onClick();
    }
  };
  
  return (
    <button 
      className={buttonClass}
      onClick={handleClick}
      disabled={disabled}
      style={style}
    >
      {icon && <span className="btn-icon">{icon}</span>}
      <span className="btn-label">{label}</span>
    </button>
  );
};

export default ButtonView; 