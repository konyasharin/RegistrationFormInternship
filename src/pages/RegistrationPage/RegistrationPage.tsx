import { Button, Center, Flex, Space, Text, TextInput } from '@mantine/core';
import { Form } from '@/components/ui/Form/Form.tsx';
import { Link } from 'react-router-dom';
import { LOGIN } from '@/shared/constants/routes.ts';
import { useForm } from '@mantine/form';
import { EMAIL_PATTERN } from '@/shared/constants/patterns.ts';
import { postRegistration } from '@/utils/api/requests/registration';
import { useState } from 'react';

export const RegistrationPage = () => {
  const [serverError, setServerError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const form = useForm({
    initialValues: {
      email: '',
      password: '',
      repeatPassword: '',
    },
    validate: {
      email: value =>
        EMAIL_PATTERN.test(value)
          ? null
          : 'Неверный формат ввода электронной почты',
      password: value => (value.length > 0 ? null : 'Введите пароль'),
      repeatPassword: (value, state) => {
        if (value.length === 0) return 'Повторите пароль';
        if (value !== state.password) return 'Пароли не совпадают';
        return null;
      },
    },
  });
  return (
    <>
      <Space h={200} />
      <Form
        title={'Регистрация'}
        onSubmit={form.onSubmit(async ({ repeatPassword, ...values }) => {
          setIsLoading(true);
          const response = await postRegistration({
            repeat_password: repeatPassword,
            ...values,
          });
          setIsLoading(false);
          if (response) {
            if (response.data.detail) {
              console.log(response.data.detail);
              setServerError('Данные введены в неверном формате');
            } else if (!response.data.success)
              setServerError('Пользователь с таким именем уже существует');
            else if (response.data.success) setServerError(null);
          }
          if (!response) setServerError('Не удалось зарегистрироваться');
        })}
      >
        <Flex direction={'column'} gap={10}>
          <TextInput
            size={'lg'}
            placeholder={'Электронная почта'}
            {...form.getInputProps('email')}
          />
          <TextInput
            size={'lg'}
            placeholder={'Пароль'}
            type={'password'}
            {...form.getInputProps('password')}
          />
          <TextInput
            size={'lg'}
            placeholder={'Повторите пароль'}
            type={'password'}
            {...form.getInputProps('repeatPassword')}
          />
        </Flex>
        <Space h={20} />
        <Button
          variant={'filled'}
          fullWidth
          size={'lg'}
          type={'submit'}
          loading={isLoading}
        >
          Зарегистрироваться
        </Button>
      </Form>
      <Space h={5} />
      <Center>
        <Text component={Link} to={LOGIN} c={'blue'} size={'xl'}>
          Уже есть аккаунт? Войти
        </Text>
      </Center>
      <Space h={10} />
      <Text c={'red'} ta={'center'}>
        {serverError}
      </Text>
    </>
  );
};
