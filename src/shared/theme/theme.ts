import { Container, createTheme, MantineThemeOverride } from '@mantine/core';
import clsx from 'clsx';
import styles from './theme.module.css';

export const theme: MantineThemeOverride = createTheme({
  components: {
    Container: Container.extend({
      classNames: (_, { size }) => ({
        root: clsx({ [styles.responsiveContainer]: size === 'responsive' }),
      }),
    }),
  },
});
