import { Anchor, Center, Space, TextInput } from '@mantine/core';
import { Link } from 'react-router-dom';
import { REGISTRATION } from '@/shared/constants/routes.ts';
import { Form } from '@/components/ui/Form/Form.tsx';
import { useForm } from '@mantine/form';
import { EMAIL_PATTERN } from '@/shared/constants/patterns.ts';
import { useContext, useState } from 'react';
import {
  login,
  LoginResponse,
  loginResponseFromDto,
} from '@/utils/api/requests/auth/login.ts';
import { StoreContext } from '@/context/StoreContext.tsx';

export const LoginPage = () => {
  const setJwt = useContext(StoreContext)?.setJwt;
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const form = useForm({
    initialValues: {
      email: '',
      password: '',
    },
    validate: {
      email: value =>
        EMAIL_PATTERN.test(value)
          ? null
          : 'Неверный формат ввода электронной почты',
      password: value => (value.length > 0 ? null : 'Введите пароль'),
    },
  });
  return (
    <>
      <Space h={200} />
      <Form
        title={'Вход'}
        sendButtonText={'Войти'}
        isLoading={isLoading}
        error={error}
        onSubmit={form.onSubmit(async values => {
          setIsLoading(true);
          const response = await login(values);
          setIsLoading(false);
          if (response) {
            if (response.data.auth_token) {
              setJwt?.(loginResponseFromDto(response.data as LoginResponse));
            } else if (!response.data.success) {
              setError('Неверный логин или пароль');
            }
          } else {
            setError('Произошла непредвиденная ошибка');
          }
        })}
      >
        <TextInput
          size={'lg'}
          placeholder={'Электронная почта'}
          {...form.getInputProps('email')}
        />
        <TextInput
          size={'lg'}
          type={'password'}
          placeholder={'Пароль'}
          {...form.getInputProps('password')}
        />
      </Form>
      <Space h={20} />
      <Center>
        <Anchor component={Link} to={REGISTRATION} size={'xl'} c={'blue'}>
          Нет аккаунта? Зарегистрироваться
        </Anchor>
      </Center>
    </>
  );
};
