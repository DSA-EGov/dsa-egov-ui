import { FC, memo, useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import ListItem from './ListItem';
import { useAuth } from '@hooks';
import { useApiService } from '@hooks/useApiService';
import { Session } from '@/types/Session';
import { ApiResponse } from '@/types/ApiResponse';
import { ApiService } from '@services/ApiService';
import { toast } from 'react-toastify';
import { Spinner } from '@components';

const ChatSelectList: FC = () => {
  const params = useParams();
  const sessionId: string | undefined = params['chatId'];

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

  useEffect(() => {
    fetchSessions();
  }, []);

  return (
    <div className="flex flex-col overflow-auto flex-1 pr-6">
      {isLoading ? (
        <div className="flex flex-1 justify-center items-center">
          <Spinner />
        </div>
      ) : (
        <ul className="flex flex-col gap-2 px-6 py-1.5 overflow-auto">
          {sessions.map((session) => (
            <ListItem
              key={session.id}
              chat={session}
              isSelected={session.id === sessionId}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default memo(ChatSelectList);
