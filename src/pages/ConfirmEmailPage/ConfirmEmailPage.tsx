import { Space, TextInput } from '@mantine/core';
import { Form } from '@/components/ui/Form/Form.tsx';
import { useState } from 'react';
import { useForm } from '@mantine/form';
import { confirmCode } from '@/utils/api/requests/registration/confirmCode.ts';
import { useNavigate } from 'react-router-dom';
import { LOGIN } from '@/shared/constants/routes.ts';

export const ConfirmEmailPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const form = useForm({
    initialValues: {
      code: '',
    },
    validate: {
      code: value =>
        value.length > 0 ? null : 'Введите код с электронной почты',
    },
  });
  return (
    <>
      <Space h={'200'} />
      <Form
        title={'Подтвердите адрес электронной почты'}
        sendButtonText={'Подтвердить'}
        isLoading={isLoading}
        onSubmit={form.onSubmit(async values => {
          setIsLoading(true);
          const response = await confirmCode(values.code);
          setIsLoading(false);
          if (response) {
            if (response.data.detail)
              form.setFieldError('code', 'Не валидный код');
            else if (!response.data.success)
              form.setFieldError('code', 'Неверный код');
            else {
              form.setFieldError('code', '');
              navigate(LOGIN);
            }
          } else {
            form.setFieldError('code', 'Произошла непредвиденная ошибка');
          }
        })}
      >
        <TextInput
          size={'lg'}
          placeholder={'Код с электронной почты'}
          {...form.getInputProps('code')}
        />
      </Form>
    </>
  );
};
