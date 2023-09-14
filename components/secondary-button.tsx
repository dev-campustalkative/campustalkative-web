'use client';

import { IconType } from 'react-icons';

interface Props {
  children?: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  className?: string;
  icon?: IconType;
}

const Button: React.FC<Props> = ({
  children,
  onClick,
  disabled,
  className,
  icon: Icon,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="w-full rounded-full border border-ct-primary-200 bg-ct-primary-200 bg-opacity-40 py-4 px-7 flex gap-4 items-center justify-center"
    >
      {Icon && <Icon size={32} color="#191102" />}
      <span className="text-2xl text-ct-grey-700 sm:text-base md:text-lg">
        {children}
      </span>
    </button>
  );
};

export default Button;
