import type { Session } from '@/types/Session';

export interface ChatSelectListProps {
  sessionsList: Session[];
  onDelete: (sessionId: string) => void | Promise<void>;
  onRename: (sessionId: string, newName: string) => void | Promise<void>;
}
