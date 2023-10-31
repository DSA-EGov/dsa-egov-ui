import { FC, memo, useCallback } from 'react';
import { Field, Form, Formik, FormikHelpers } from 'formik';

import * as icons from '@icons';

const ChatInput: FC = () => {
  const handleSubmit = useCallback(
    async (
      values: { data: string },
      formikHelpers: FormikHelpers<{ data: string }>,
    ) => {
      console.log(values);
    },
    [],
  );

  return (
    <div className="flex border-t border-gray-600 p-3">
      <Formik initialValues={{ data: '' }} onSubmit={handleSubmit}>
        <Form className="flex flex-1 p-2 bg-black/10 rounded-full">
          <div className="px-3 w-full flex">
            <Field
              placeholder="Type your question"
              name="data"
              autoComplete="off"
              className="bg-transparent placeholder:text-primary focus-within:outline-none flex-1"
            />
          </div>
          <button className="rounded-full hover:bg-white/10 p-2" type="submit">
            <icons.SendPlane width={20} height={20} />
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default memo(ChatInput);
