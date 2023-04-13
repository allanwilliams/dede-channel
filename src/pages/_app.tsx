import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Header from '../components/template/Header'
import Footer from '../components/template/Footer';
import Menu from '../components/template/Menu';
import AlertBootstrap from '../components/alerts/AlertBootstrap';
import './style.css';
import { BaseProvider, useBase } from '../contexts/base';

export default function App({ Component, pageProps }: AppProps) {
  return <>
      <BaseProvider>
        <> 
          <Header />
          <Menu />       
          <AlertBootstrap></AlertBootstrap>
          <Component {...pageProps} />
        </>        
      </BaseProvider>
      <Footer />
  </>
}
