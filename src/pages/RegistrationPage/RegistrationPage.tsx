import { Anchor, Center, Space, TextInput } from '@mantine/core';
import { Link, useNavigate } from 'react-router-dom';
import { CONFIRM_EMAIL, LOGIN } from '@/shared/constants/routes.ts';
import { useForm } from '@mantine/form';
import { EMAIL_PATTERN } from '@/shared/constants/patterns.ts';
import { registration } from '@/utils/api/requests/registration/registration.ts';
import { useContext, useState } from 'react';
import { Form } from '@/components/ui/Form/Form.tsx';
import { StoreContext } from '@/context/StoreContext.tsx';

export const RegistrationPage = () => {
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const context = useContext(StoreContext);
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
      <Form
        title={'Регистрация'}
        sendButtonText={'Зарегистрироваться'}
        error={error}
        isLoading={isLoading}
        onSubmit={form.onSubmit(async values => {
          setIsLoading(true);
          const response = await registration(values);
          setIsLoading(false);
          if (response) {
            if (response.data.detail) {
              console.log(response.data.detail);
              setError('Данные введены в неверном формате');
            } else if (!response.data.success)
              setError('Пользователь с таким именем уже существует');
            else {
              setError('');
              context?.setAlertPopup({
                isActive: true,
                title: 'Проверьте электронную почту',
                text: 'Мы прислали сообщение вам на электронную почту и вы можете либо ввести код из письма в окне ниже, либо перейти по ссылке в письме',
              });
              navigate(CONFIRM_EMAIL);
            }
          } else setError('Не удалось зарегистрироваться');
        })}
      >
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
      </Form>
      <Space h={20} />
      <Center>
        <Anchor component={Link} to={LOGIN} size={'xl'} c={'blue'}>
          Уже есть аккаунт? Войти
        </Anchor>
      </Center>
    </>
  );
};
