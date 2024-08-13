import {
  Button,
  Flex,
  Paper,
  PaperProps,
  PolymorphicComponentProps,
  Space,
  Text,
  Title,
} from '@mantine/core';
import { FC, FormHTMLAttributes } from 'react';

type FormProps = FormHTMLAttributes<HTMLFormElement> &
  Omit<PolymorphicComponentProps<'form', PaperProps>, 'component'> & {
    title?: string;
    sendButtonText?: string;
    error?: string;
    isLoading?: boolean;
  };

export const Form: FC<FormProps> = ({
  title,
  children,
  sendButtonText,
  error,
  onSubmit,
  p = 'xl',
  shadow = 'xl',
  isLoading,
  ...attributes
}) => {
  return (
    <Paper
      component={'form'}
      shadow={shadow}
      p={p}
      onSubmit={e => {
        e.preventDefault();
        onSubmit?.(e);
      }}
      {...attributes}
    >
      {title && (
        <>
          <Title ta={'center'} tt={'uppercase'} order={2} size={'h1'}>
            {title}
          </Title>
          <Space h={20} />
        </>
      )}
      <Flex direction={'column'} gap={10}>
        {children}
      </Flex>
      <Space h={20} />
      <Button
        type={'submit'}
        loading={isLoading}
        fullWidth={true}
        size={'lg'}
        variant={'filled'}
      >
        {sendButtonText ?? 'Отправить'}
      </Button>
      {error && (
        <>
          <Space h={10} />
          <Text ta={'center'} c={'red'}>
            {error}
          </Text>
        </>
      )}
    </Paper>
  );
};
