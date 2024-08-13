import { em, Stack, Title } from '@mantine/core';

export const NotFoundPage = () => {
  return (
    <Stack mih={em('100vh')} align="stretch" justify="center">
      <Title ta={'center'} order={2} size={'h2'}>
        Страница не найдена
      </Title>
    </Stack>
  )
}