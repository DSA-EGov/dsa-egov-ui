import classNames, { ArgumentArray } from 'classnames';
import { twMerge } from 'tailwind-merge';

export const cn = (...args: ArgumentArray) => twMerge(classNames(...args));
