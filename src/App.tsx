import { AppShell, Container, em, Stack } from '@mantine/core';
import { Route, Routes } from 'react-router-dom';
import {
  CONFIRM_EMAIL,
  LOGIN,
  MAIN,
  PROFILE,
  REGISTRATION,
} from '@/shared/constants/routes.ts';
import { RegistrationPage } from '@/pages/RegistrationPage/RegistrationPage.tsx';
import { MainPage } from '@/pages/MainPage/MainPage.tsx';
import { LoginPage } from '@/pages/LoginPage/LoginPage.tsx';
import { NotFoundPage } from '@/pages/NotFoundPage/NotFoundPage.tsx';
import { ConfirmEmailPage } from '@/pages/ConfirmEmailPage/ConfirmEmailPage.tsx';
import { Header } from '@/components/layouts/Header/Header.tsx';
import { useContext, useLayoutEffect } from 'react';
import { StoreContext } from '@/context/StoreContext.tsx';
import { jwtDecode } from 'jwt-decode';
import { JwtInfoFromDto } from '@/utils/helpers/JwtInfoFromDto.ts';
import { AuthInspector } from '@/components/hocs/AuthInspector.tsx';
import { ProfilePage } from '@/pages/ProfilePage/ProfilePage.tsx';
import { AlertPopup } from '@/components/shared/AlertPopup/AlertPopup.tsx';

function App() {
  const context = useContext(StoreContext);
  /*
   * useLayoutEffect за место useEffect чтобы не дергался интерфейс,
   * который зависит от hoc компонента AuthInspector
   * (в нем тоже используется useLayoutEffect)
   */
  useLayoutEffect(() => {
    if (context?.jwt && context.jwt.authToken) {
      context.setUser(JwtInfoFromDto(jwtDecode(context.jwt.authToken)));
    }
    context?.setIsInitialized(true);
  }, [context?.jwt.authToken]);

  return (
    <Container mih={em('100vh')} size={'responsive'} pos={'relative'} p={'0'}>
      <AppShell header={{ height: 70 }}>
        <Header />
      </AppShell>
      <AlertPopup />
      <Stack mih={em('100vh')} align="stretch" justify="center" gap={0}>
        <Routes>
          <Route path={MAIN} element={<MainPage />} />
          <Route
            path={REGISTRATION}
            element={
              <AuthInspector authIsRequired={false}>
                <RegistrationPage />
              </AuthInspector>
            }
          />
          <Route
            path={LOGIN}
            element={
              <AuthInspector authIsRequired={false}>
                <LoginPage />
              </AuthInspector>
            }
          />
          <Route
            path={CONFIRM_EMAIL}
            element={
              <AuthInspector authIsRequired={false}>
                <ConfirmEmailPage />
              </AuthInspector>
            }
          />
          <Route
            path={PROFILE}
            element={
              <AuthInspector>
                <ProfilePage />
              </AuthInspector>
            }
          />
          <Route path={'*'} element={<NotFoundPage />} />
        </Routes>
      </Stack>
    </Container>
  );
}

export default App;
