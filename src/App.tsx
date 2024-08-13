import { AppShell, Container, em } from '@mantine/core';
import { Route, Routes } from 'react-router-dom';
import {
  CONFIRM_EMAIL,
  LOGIN,
  MAIN,
  REGISTRATION,
} from '@/shared/constants/routes.ts';
import { RegistrationPage } from '@/pages/RegistrationPage/RegistrationPage.tsx';
import { MainPage } from '@/pages/MainPage/MainPage.tsx';
import { LoginPage } from '@/pages/LoginPage/LoginPage.tsx';
import { NotFoundPage } from '@/pages/NotFoundPage/NotFoundPage.tsx';
import { ConfirmEmailPage } from '@/pages/ConfirmEmailPage/ConfirmEmailPage.tsx';
import { Header } from '@/components/layouts/Header/Header.tsx';
import { useContext, useEffect } from 'react';
import { StoreContext } from '@/context/StoreContext.tsx';
import { jwtDecode } from 'jwt-decode';
import { JwtInfoFromDto } from '@/utils/helpers/JwtInfoFromDto.ts';

function App() {
  const context = useContext(StoreContext);
  useEffect(() => {
    if (context?.jwt && context.jwt.authToken) {
      context.setUser(JwtInfoFromDto(jwtDecode(context.jwt.authToken)));
    }
  }, [context?.jwt.authToken]);

  return (
    <Container mih={em('100vh')} size={'responsive'} pos={'relative'} p={'0'}>
      <AppShell header={{ height: 70 }}>
        <Header />
      </AppShell>
      <Routes>
        <Route path={MAIN} element={<MainPage />} />
        <Route path={REGISTRATION} element={<RegistrationPage />} />
        <Route path={LOGIN} element={<LoginPage />} />
        <Route path={CONFIRM_EMAIL} element={<ConfirmEmailPage />} />
        <Route path={'*'} element={<NotFoundPage />} />
      </Routes>
    </Container>
  );
}

export default App;
