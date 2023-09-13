import { FC, memo, MouseEventHandler, PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';

interface Props {
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const Button: FC<PropsWithChildren<Props>> = ({
  className,
  children,
  onClick,
  type,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={twMerge('px-2 py-1 rounded-lg', className)}
    >
      {children}
    </button>
  );
};

export default memo(Button);
