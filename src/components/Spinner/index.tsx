import { FC, memo } from 'react';

import * as icons from '@icons';
import { cn } from '@helpers';

interface Props {
  className?: string;
  size?: number
}

const Spinner: FC<Props> = ({ className, size = 48 }) => {
  return (
    <icons.Spinner
      width={size}
      height={size}
      className={cn('animate-spin-reverse', className)}
    />
  );
};

export default memo(Spinner);
