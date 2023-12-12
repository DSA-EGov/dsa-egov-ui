import {
  FC,
  memo,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import { useAuth } from '@hooks';
import { useApiService } from '@hooks/useApiService';
import { ApiService } from '@services/ApiService';
import { mapRouteParams } from '@helpers';
import { AppRoute } from '@enums';
import type { ApiResponse } from '@/types/ApiResponse';
import type { IQuestion } from '@/types/IQuestion';
import { Spinner } from '@components';
import { ChatContext } from '@/context/chat';

import Question from './Question';

const ChatMessages: FC = () => {
  const params = useParams();
  const sessionId = params['sessionId'];
  const navigate = useNavigate();
  const auth = useAuth();
  const api = useApiService(auth.token);

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { questions, setQuestions, isQuestionLoading } =
    useContext(ChatContext);

  const fetchMessages = useCallback(async () => {
    try {
      setIsLoading(true);

      const res = await api.get<ApiResponse<IQuestion>>(
        mapRouteParams(ApiService.routes.CHAT_GET, { sessionId }),
      );

      setQuestions(res.data);
    } catch (err) {
      console.dir(err);
      if (
        err instanceof axios.AxiosError &&
        err.response.data.statusCode === 401
      ) {
        navigate(AppRoute.HOME);
      }
    } finally {
      setIsLoading(false);
    }
  }, [api, sessionId]);

  useEffect(() => {
    fetchMessages();
  }, [sessionId]);

  const loadingElement = useMemo<ReactNode>(
    () => (
      <div className="flex items-center flex-1 justify-center w-full">
        <Spinner />
      </div>
    ),
    [],
  );

  const questionsListElement = useMemo<ReactNode>(
    () =>
      questions.length === 0 ? (
        <span className="text-center text-3xl font-thin h-full flex items-center uppercase tracking-widest">
          Ask a question
        </span>
      ) : (
        <ul className="flex w-[80%] min-h-full flex-col-reverse overflow-auto pr-6">
          {questions.map((q, i) => (
            <Question
              question={q}
              key={q.id}
              isLast={i === questions.length - 1}
            />
          ))}
        </ul>
      ),
    [questions],
  );

  const questionLoadingElement = useMemo(
    () =>
      isQuestionLoading && (
        <div className="absolute top-8 left-1/2 transform-gpu -translate-x-1/2 flex justify-center gap-3 text-sm bg-gray-600 py-3 px-6">
          Generating <Spinner size={24} />
        </div>
      ),
    [isQuestionLoading],
  );

  return (
    <div className="flex-1 relative flex flex-col items-center overflow-auto py-12">
      {isLoading ? loadingElement : questionsListElement}
      {questionLoadingElement}
    </div>
  );
};

export default memo(ChatMessages);
