import type { Chat } from '@/types/Chat';
import type { Dispatch, SetStateAction } from 'react';

export interface ListItemProps {
  chat: Chat;
  isSelected: boolean;
  setEditingChatId: Dispatch<SetStateAction<string | null>>;
}
