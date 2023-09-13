import { FC, memo } from 'react';

import * as icons from '@icons';
import { twMerge } from 'tailwind-merge';

interface Props {
  src?: string;
  className?: string;
  alt?: string;
}

const Icon: FC<Props> = ({ src, className, alt }) => {
  return (
    <div
      className={twMerge(
        'rounded-full p-2.5 bg-black/10 aspect-square flex items-center justify-center',
        className,
      )}
    >
      {src ? (
        <img alt={alt} src={src} className="rounded-full aspect-square" />
      ) : (
        <icons.User />
      )}
    </div>
  );
};

export default memo(Icon);
