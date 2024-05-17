import '@/styles/globals.css';
import {useEffect} from 'react';
import {AppProps} from "next/app";

export default function MyApp({Component, pageProps}: AppProps) {
  debugger
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
        .register('/service-worker.js', {scope: '/'})
        .then((registration) => console.log('scope is: ', registration.scope));
    }
  }, []);

  // eslint-disable-next-line react/jsx-no-undef
  return <Component {...pageProps} />;
}