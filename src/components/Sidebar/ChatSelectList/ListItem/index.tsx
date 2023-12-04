import { FC, memo, useCallback, useRef } from 'react';
import { Link } from 'react-router-dom';

import { mapRouteParams } from '@/helpers/mapRouteParams';
import { Route } from '@enums';
import { cn } from '@/helpers/cn';
import * as icons from '@icons';

import type { ListItemProps } from './types';

const ListItem: FC<ListItemProps> = ({
  chat,
  isSelected,
  onDelete,
  onRename,
}) => {
  const nameRef = useRef<HTMLSpanElement>(null!);

  const handleNameEdit = useCallback(async () => {
    const nameElement: HTMLSpanElement = nameRef.current;
    nameElement.contentEditable = 'true';
    nameElement.focus();

    const stopEditingName = () => {
      nameElement.removeEventListener('blur', stopEditingName);
      nameElement.removeEventListener('keyup', handleKeyup);
      nameElement.contentEditable = 'false';
      onRename(chat.id, nameElement.textContent);
    };

    const handleKeyup = (event: KeyboardEvent) => {
      if (['Enter', 'Escape'].includes(event.key)) {
        stopEditingName();
      }
    };

    nameElement.addEventListener('blur', stopEditingName);
    nameElement.addEventListener('keyup', handleKeyup);
  }, []);

  return (
    <li key={chat.id} className="flex">
      <Link
        to={mapRouteParams(Route.CHAT, { chatId: chat.id })}
        className={cn(
          'default px-5 py-6 flex justify-between items-center flex-1 overflow-hidden',
          'text-ellipsis rounded-lg  hover:bg-white/10 duration/150 text-lg',
          { 'bg-white/10': isSelected },
        )}
      >
        <span
          ref={nameRef}
          className="text-ellipsis overflow-hidden whitespace-nowrap"
        >
          {chat.name ?? 'Unnamed'}
        </span>
        {isSelected && (
          <div className="flex gap-1">
            <button
              onClick={handleNameEdit}
              className="rounded-full hover:bg-white/10 p-2 -my-2"
            >
              <icons.Pencil width={18} height={18} />
            </button>
            <button
              onClick={() => onDelete(chat.id)}
              className="rounded-full hover:bg-white/10 p-2 -my-2 group"
            >
              <icons.DeleteBin
                width={18}
                height={18}
                className="group-hover:fill-error"
              />
            </button>
          </div>
        )}
      </Link>
    </li>
  );
};

export default memo(ListItem);
