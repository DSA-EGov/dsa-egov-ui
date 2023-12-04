import { FC, memo, useRef } from 'react';

import { cn } from '@helpers';
import * as icons from '@icons';

import type { ButtonInputProps } from './types';

const ButtonInput: FC<ButtonInputProps> = ({
  className,
  placeholder,
  onSubmit,
}) => {
  const inputRef = useRef<HTMLInputElement>(null!);

  return (
    <div
      className={cn(
        'flex items-center justify-between rounded-full overflow-hidden bg-white/10 p-1',
        className,
      )}
    >
      <input
        placeholder={placeholder}
        className="bg-transparent px-1 focus-within:outline-none"
        ref={inputRef}
      />
      <button
        onClick={() => onSubmit(inputRef.current.value)}
        className="p-1 hover:bg-white/20 rounded-full"
      >
        <icons.SendPlane width={20} height={20} className="fill-primary" />
      </button>
    </div>
  );
};

export default memo(ButtonInput);
