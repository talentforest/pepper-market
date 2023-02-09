import React from 'react';
import Header from './header';
import Nav from './navigation';
import { cls } from '../libs/client/utils';

interface LayoutProps {
  title?: string;
  canGoBack?: boolean;
  hasTabBar?: boolean;
  children: React.ReactNode;
}
export default function Layout({
  title,
  canGoBack,
  hasTabBar,
  children,
}: LayoutProps) {
  return (
    <div className='m-auto min-h-screen max-w-md bg-white'>
      {(title || canGoBack) && <Header title={title} canGoBack={canGoBack} />}
      <main className={cls('py-12', hasTabBar ? 'pb-24' : '')}>{children}</main>
      {hasTabBar && <Nav />}
    </div>
  );
}
