import { Alert, em } from '@mantine/core';
import styles from './AlertPopup.module.css';
import { useInterval } from '@mantine/hooks';
import { useContext, useEffect } from 'react';
import clsx from 'clsx';
import { StoreContext } from '@/context/StoreContext.tsx';

export const AlertPopup = () => {
  const context = useContext(StoreContext);
  const {
    start,
    stop,
    active: timerIsActive,
  } = useInterval(() => {
    context?.setAlertPopup({
      ...context?.alertPopup,
      isActive: !timerIsActive,
    });
  }, 5000);
  useEffect(() => {
    if (context?.alertPopup.isActive) start();
    else stop();
  }, [context?.alertPopup.isActive]);
  return (
    <Alert
      variant="filled"
      color="green"
      title={context?.alertPopup.title}
      w={em('100%')}
      pos={'absolute'}
      top={100}
      className={clsx(
        styles.alert,
        context?.alertPopup.isActive
          ? styles.alert_active
          : styles.alert_disabled,
      )}
    >
      {context?.alertPopup.text}
    </Alert>
  );
};
