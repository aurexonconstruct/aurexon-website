import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'gold-outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  isExternal?: boolean;
  children: React.ReactNode;
  className?: string;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  href,
  isExternal = false,
  children,
  className = '',
  icon,
  iconPosition = 'right',
  ...props
}) => {
  const baseStyles =
    'inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A869] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B1528] disabled:opacity-50 disabled:pointer-events-none cursor-pointer tracking-wider uppercase text-xs sm:text-sm select-none';

  const sizeStyles = {
    sm: 'px-3 py-2 sm:px-4 sm:py-2 text-xs gap-1.5 rounded-sm',
    md: 'px-5 py-2.5 sm:px-6 sm:py-3 text-xs sm:text-sm gap-2 rounded-sm',
    lg: 'px-7 py-3.5 sm:px-8 sm:py-4 text-sm gap-2.5 rounded-sm font-semibold',
  };

  const variantStyles = {
    primary:
      'bg-[#C5A869] hover:bg-[#D4AF37] text-[#070E1B] font-semibold shadow-sm hover:shadow-md active:translate-y-0.5 border border-[#C5A869]',
    secondary:
      'bg-[#132B4F] hover:bg-[#1A365D] text-white border border-[#203D66] hover:border-[#C5A869]/40 active:translate-y-0.5',
    outline:
      'bg-transparent hover:bg-white/5 text-slate-100 border border-slate-700 hover:border-slate-500 active:translate-y-0.5',
    'gold-outline':
      'bg-transparent hover:bg-[#C5A869]/10 text-[#C5A869] border border-[#C5A869]/70 hover:border-[#C5A869] active:translate-y-0.5',
    ghost:
      'bg-transparent hover:bg-white/5 text-slate-300 hover:text-white border border-transparent',
  };

  const combinedClasses = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        className={combinedClasses}
        {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        {icon && iconPosition === 'left' && <span className="shrink-0">{icon}</span>}
        <span>{children}</span>
        {icon && iconPosition === 'right' && <span className="shrink-0">{icon}</span>}
      </a>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {icon && iconPosition === 'left' && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <span className="shrink-0">{icon}</span>}
    </button>
  );
};
