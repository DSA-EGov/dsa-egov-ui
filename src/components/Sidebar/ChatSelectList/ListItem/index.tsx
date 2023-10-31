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
  setEditingChatId,
}) => {
  const nameRef = useRef<HTMLSpanElement>(null!);

  const handleNameEdit = useCallback(async () => {
    setEditingChatId(chat.id);

    const nameElement: HTMLSpanElement = nameRef.current;
    nameElement.contentEditable = 'true';
    nameElement.focus();

    const handleBlur = () => {
      setEditingChatId(null);
      nameElement.removeEventListener('blur', handleBlur);
    };

    const handleKeyup = (event: KeyboardEvent) => {
      if (event.key !== 'Enter') {
        return;
      }

      setEditingChatId(null);
      nameElement.removeEventListener('keyup', handleKeyup);
    };

    nameElement.addEventListener('blur', handleBlur);
    nameElement.addEventListener('keyup', handleKeyup);
  }, []);

  const handleDelete = useCallback(async () => {}, []);

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
              onClick={handleDelete}
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
