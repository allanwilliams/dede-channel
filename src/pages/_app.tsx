import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Header from '../template-admin-lte/Header'
import Footer from '../template-admin-lte/Footer';
import Menu from '../template-admin-lte/Menu';
import Head from 'next/head';
import AlertBootstrap from '../components/alerts/AlertBootstrap';

import './style.css';
import { BaseProvider, useBase } from '../contexts/base';

export default function App({ Component, pageProps }: AppProps) {
  return <>
      <Header />
      <Menu />
      <BaseProvider>
        <>
          <AlertBootstrap></AlertBootstrap>
          <Component {...pageProps} />
        </>        
      </BaseProvider>
      <Footer />
  </>
}
