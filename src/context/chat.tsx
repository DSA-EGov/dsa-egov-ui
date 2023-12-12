import {
  createContext,
  Dispatch,
  FC,
  PropsWithChildren,
  SetStateAction,
  useState,
} from 'react';

import type { IQuestion } from '@/types/IQuestion';

export interface ChatContextProps {
  questions: IQuestion[];
  setQuestions: Dispatch<SetStateAction<IQuestion[]>>;
  isQuestionLoading: boolean;
  setIsQuestionLoading: Dispatch<SetStateAction<boolean>>;
}

export const ChatContext = createContext<ChatContextProps>(null!);

export const ChatContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [questions, setQuestions] = useState<IQuestion[]>([]);
  const [isQuestionLoading, setIsQuestionLoading] = useState<boolean>(false);

  return (
    <ChatContext.Provider
      value={{
        questions,
        setQuestions,
        isQuestionLoading,
        setIsQuestionLoading,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};
