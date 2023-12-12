import { FC, memo } from 'react';

import type { QuestionProps } from './types';
import classNames from 'classnames';
import { useAuth } from '@hooks';

const Message: FC<QuestionProps> = ({ question, isLast }) => {
  const auth = useAuth();

  const name = auth.givenName ?? auth.familyName ?? auth.username ?? auth.name ?? 'undefined';

  return (
    <div
      className={classNames('px-6 flex py-6 flex-col justify-center gap-3 text-lg', {
        'border-t border-t-gray-600': !isLast,
      })}
    >
      <p>
        <span className="text-dim">{name}: </span>
        <span>{question.text}</span>
      </p>
      <p>
        <span className="text-dim">eGov AI: </span>
        <span>{question.responseText}</span>
      </p>
      <p className="text-right text-xs text-dim">
        {new Date(question.createdAt).toLocaleString('ro-RO')}
      </p>
    </div>
  );
};

export default memo(Message);
