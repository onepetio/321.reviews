import React from 'react';
import styles from './PageHeader.module.scss';

interface PageHeaderProps extends React.ComponentProps<'header'> {
  sticky?: boolean;
  underline?: true;
}

const Logo = () => (
  <i className={styles.logo}>
    <span className={styles['gradient-text']}>321</span>.reviews
  </i>
)

export default function PageHeader({ sticky, underline }: PageHeaderProps) {
  const cls = [styles['page-header'], sticky && styles.sticky, underline && styles.underline].filter(Boolean).join(' ');

  return (
    <header className={cls}>
      <Logo />
      <nav></nav>
    </header>
  )
}
