import type { Session } from '@/types/Session';

export interface ListItemProps {
  session: Session;
  isSelected: boolean;
  onDelete: (sessionId: string) => void | Promise<void>;
  onRename: (sessionId: string, newName: string) => void | Promise<void>;
}
