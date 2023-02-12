import useUser from '@/libs/client/useUser';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { SWRConfig } from 'swr';

const LoginCheck = () => {
  useUser();
  return null;
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SWRConfig
      value={{
        fetcher: (url: string) =>
          fetch(url).then((response) => response.json()),
      }}
    >
      <LoginCheck />
      <Component {...pageProps} />
    </SWRConfig>
  );
}
