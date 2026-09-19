import React from 'react';

export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'whatsapp';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  asAnchor?: boolean;
  href?: string;
  target?: string;
  rel?: string;
  className?: string;
  id: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLElement>;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  asAnchor = false,
  href,
  target,
  rel,
  className = '',
  id,
  type = 'button',
  disabled = false,
  onClick,
}) => {
  const baseStyles =
    'inline-flex items-center justify-center font-medium transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-60 disabled:cursor-not-allowed select-none whitespace-nowrap active:scale-[0.98]';

  // Strict 2x horizontal to vertical padding rule
  const sizeStyles = {
    sm: 'text-xs px-3.5 py-[7px] rounded-lg min-h-[36px]',
    md: 'text-sm px-5 py-2.5 rounded-xl min-h-[44px]',
    lg: 'text-base px-7 py-3.5 rounded-xl min-h-[50px]',
  };

  const variantStyles = {
    primary:
      'bg-[#023B8C] text-white hover:bg-[#012f70] shadow-sm hover:shadow-md focus-visible:outline-[#023B8C]',
    secondary:
      'bg-[#01B2DC] text-[#0A1628] font-semibold hover:bg-[#009fc5] shadow-sm hover:shadow-md focus-visible:outline-[#01B2DC]',
    outline:
      'border border-[#023B8C] text-[#023B8C] hover:bg-[#023B8C]/5 focus-visible:outline-[#023B8C]',
    ghost:
      'text-[#0A1628] hover:text-[#023B8C] hover:bg-black/5 focus-visible:outline-[#023B8C]',
    whatsapp:
      'bg-[#01B2DC] text-[#0A1628] font-semibold hover:bg-[#009fc5] shadow-sm hover:shadow-md focus-visible:outline-[#01B2DC]',
  };

  const combinedClasses = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  if (asAnchor && href) {
    return (
      <a
        id={id}
        href={href}
        target={target}
        rel={target === '_blank' ? 'noopener noreferrer' : rel}
        onClick={onClick}
        className={combinedClasses}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      id={id}
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={combinedClasses}
    >
      {children}
    </button>
  );
};
