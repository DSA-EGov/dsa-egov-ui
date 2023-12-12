import {
  ChangeEventHandler,
  FC,
  KeyboardEventHandler,
  memo,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';

import { cn } from '@helpers';
import * as icons from '@icons';

import type { ButtonInputProps } from './types';

const ButtonInput: FC<ButtonInputProps> = ({
  className,
  placeholder,
  onSubmit,
  lengthLimit,
  focusOnLoad = false,
}) => {
  const inputRef = useRef<HTMLInputElement>(null!);
  const [value, setValue] = useState<string>('');

  useEffect(() => {
    if (focusOnLoad) {
      inputRef.current?.focus();
    }
  }, []);

  const handleSubmit = useCallback(() => {
    onSubmit(value);
  }, [onSubmit, value]);

  const handleKeyup: KeyboardEventHandler = useCallback(
    (e) => {
      if (e.key === 'Enter') {
        handleSubmit();
      }
    },
    [handleSubmit],
  );

  const handleChange: ChangeEventHandler<HTMLInputElement> = useCallback(
    (e) => {
      if (value.length >= lengthLimit) {
        return;
      }

      setValue(e.target.value);
    },
    [value, lengthLimit],
  );

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
        value={value}
        onChange={handleChange}
        onKeyUp={handleKeyup}
        ref={inputRef}
      />
      <button
        onClick={handleSubmit}
        className="p-1 hover:bg-white/20 rounded-full"
      >
        <icons.SendPlane width={20} height={20} className="fill-primary" />
      </button>
    </div>
  );
};

export default memo(ButtonInput);
