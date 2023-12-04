import { FC, memo, useCallback, useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import { useAuth } from '@hooks';
import { useApiService } from '@hooks/useApiService';
import type { Session } from '@/types/Session';
import type { ApiResponse } from '@/types/ApiResponse';
import type { ActionResponse } from '@/types/ActionResponse';
import { ApiService } from '@services/ApiService';
import { mapRouteParams } from '@helpers';
import { Spinner } from '@components';

import CreateChatButton from './CreateChatButton';
import ChatSelectList from './ChatSelectList';
import UserCard from './UserCard';

const Sidebar: FC = () => {
  const auth = useAuth();
  const apiService = useApiService(auth.token);

  const [sessions, setSessions] = useState<Session[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const fetchSessions = useCallback(async () => {
    setIsLoading(true);

    try {
      const req = await apiService.get<ApiResponse<Session>>(
        ApiService.routes.SESSIONS_GET,
      );

      setSessions(req.data ?? []);
    } catch (err) {
      toast('Error loading sessions', { type: 'error' });
      console.error(err);
    }

    setIsLoading(false);
  }, [apiService]);

  const handleCreate = useCallback(
    async (name: string) => {
      setIsLoading(true);

      try {
        await apiService.post(ApiService.routes.SESSIONS_POST, {
          name,
        });

        await fetchSessions();
      } catch (err) {
        toast('Error creating session', { type: 'error' });
        console.error(err);
      }

      setIsLoading(false);
    },
    [apiService],
  );

  const handleDelete = useCallback(
    async (sessionId: string) => {
      setIsLoading(true);
      try {
        const req = await apiService.delete<ActionResponse>(
          mapRouteParams(ApiService.routes.SESSIONS_DELETE, { id: sessionId }),
        );

        if (req.error || req.message !== 'success') {
          throw req;
        }

        await fetchSessions();
      } catch (err) {
        toast('Error deleting session', { type: 'error' });
        console.error(err);
      }
      setIsLoading(false);
    },
    [apiService, fetchSessions],
  );

  const handleRename = useCallback(
    async (sessionId: string, newName: string) => {
      setIsLoading(true);

      try {
        await apiService.patch(
          mapRouteParams(ApiService.routes.SESSIONS_PATCH, { id: sessionId }),
          {
            name: newName,
          },
        );

        await fetchSessions();
      } catch (err) {
        toast('Error renaming session', { type: 'error' });
        console.error(err);
      }

      setIsLoading(false);
    },
    [apiService],
  );

  useEffect(() => {
    fetchSessions();
  }, []);

  return !auth.isAuthenticated || isLoading ? (
    <div className="flex flex-1 justify-center items-center w-1/6 max-w-sm min-w-[256px] h-full">
      <Spinner />
    </div>
  ) : (
    <div className="w-1/6 max-w-sm min-w-[256px] h-full flex flex-col overflow-auto flex-1">
      <CreateChatButton onCreateChat={handleCreate} />
      <ChatSelectList
        sessionsList={sessions}
        onDelete={handleDelete}
        onRename={handleRename}
      />
      <UserCard />
    </div>
  );
};

export default memo(Sidebar);
