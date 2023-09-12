import { FC } from 'react';
import { ErrorMessage, Field } from 'formik';
import { twMerge } from 'tailwind-merge';

interface Props {
  name: string;
  type?: string;
  autoComplete?: boolean;
  placeholder?: string;
  className?: string;
}

const FormField: FC<Props> = ({
  name,
  className,
  placeholder,
  type = 'text',
  autoComplete = false,
}) => {
  return (
    <div className={twMerge('flex flex-col relative', className)}>
      <Field
        className="rounded-full px-3 py-1.5"
        name={name}
        placeholder={placeholder}
        type={type}
        autoComplete={autoComplete ? 'on' : 'off'}
      />
      <ErrorMessage
        name={name}
        component="p"
        className="absolte bottom-0 left-0 text-red-600 text-sm"
      />
    </div>
  );
};

export default FormField;
