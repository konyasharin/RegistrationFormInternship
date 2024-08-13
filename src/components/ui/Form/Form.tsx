import { FC, FormHTMLAttributes } from 'react';
import { Space, Title } from '@mantine/core';
import styles from './Form.module.css';
import clsx from 'clsx';

type FormProps = FormHTMLAttributes<HTMLFormElement> & {
  title?: string;
};

export const Form: FC<FormProps> = ({
  title,
  children,
  className,
  onSubmit,
  ...attributes
}) => {
  return (
    <form
      className={clsx(className, styles.form)}
      onSubmit={e => {
        e.preventDefault();
        onSubmit?.(e);
      }}
      {...attributes}
    >
      {title && (
        <>
          <Title ta={'center'} order={2} size={'h1'} tt={'uppercase'}>
            {title}
          </Title>
          <Space h={20} />
        </>
      )}
      {children}
    </form>
  );
};
