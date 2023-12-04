import type { Chat } from '@/types/Chat';

export interface ListItemProps {
  chat: Chat;
  isSelected: boolean;
  onDelete: (sessionId: string) => void | Promise<void>;
  onRename: (sessionId: string, newName: string) => void | Promise<void>;
}
