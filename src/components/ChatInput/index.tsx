import { FC, memo, useCallback, useContext } from 'react';
import { Field, Form, Formik, FormikHelpers } from 'formik';
import { useParams } from 'react-router';
import { toast } from 'react-toastify';
import classNames from 'classnames';

import * as icons from '@icons';
import { ChatContext } from '@/context/chat';
import { useAuth } from '@hooks';
import { useApiService } from '@hooks/useApiService';
import { ApiService } from '@services/ApiService';
import type { PostQuestionDto } from '@/types/PostQuestionDto';

const ChatInput: FC = () => {
  const auth = useAuth();
  const api = useApiService(auth.token);
  const params = useParams();
  const sessionId = params['sessionId'];

  const { setIsQuestionLoading, setQuestions, isQuestionLoading } =
    useContext(ChatContext);

  const handleSubmit = useCallback(
    async (
      values: { data: string },
      formikHelpers: FormikHelpers<{ data: string }>,
    ) => {
      try {
        setIsQuestionLoading(true);
        formikHelpers.resetForm();

        const res = await api.post<any, PostQuestionDto>(
          ApiService.routes.CHAT_POST,
          {
            text: values.data,
            sessionId,
          },
        );

        setQuestions((questions) => [res, ...questions]);
        setIsQuestionLoading(false);
      } catch (err) {
        console.error(err);
        toast('Error sending question', { type: 'error' });
      }
    },
    [api, sessionId],
  );

  return (
    <div className="flex border-t border-gray-600 p-3">
      <Formik initialValues={{ data: '' }} onSubmit={handleSubmit}>
        <Form
          className={classNames('flex flex-1 p-2 bg-black/10 rounded-full', {
            'pointer-events-none': isQuestionLoading,
          })}
        >
          <div className="px-3 w-full flex">
            <Field
              placeholder="Type your question"
              name="data"
              autoComplete="off"
              className="bg-transparent placeholder:text-primary focus-within:outline-none flex-1"
              disabled={isQuestionLoading}
            />
          </div>
          <button
            className="rounded-full hover:bg-white/10 p-2"
            type="submit"
            disabled={isQuestionLoading}
          >
            <icons.SendPlane width={20} height={20} />
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default memo(ChatInput);
