import '@/styles/globals.css'
import '@/styles/style.css';
import '@/styles/calendario.css'
import type { AppProps } from 'next/app'
import Header from '../components/template/Header';
import HeaderTeste from '../components/template/HeaderTeste';
import Footer from '../components/template/Footer';
import Menu from '../components/template/Menu';
import AlertBootstrap from '../components/alerts/AlertBootstrap';
import { BaseProvider, useBase } from '../contexts/base';
import { SessionProvider } from "next-auth/react"
import SignIn from './login'
import { useRouter } from 'next/router'

export default function App(props: AppProps) {
  const router = useRouter()
  const { Component, pageProps: { session, ...pageProps } } = props;

  return <SessionProvider session={session}>
    <BaseProvider>
      {Component.hasOwnProperty('auth') ? (
        <SignIn>
          <Component {...pageProps} />
        </SignIn>
      ) : (
        <>
          <Menu />
          <Header />
          <div className='content-wrapper'>
            <AlertBootstrap></AlertBootstrap>
            <>
              <Component {...pageProps} />
            </>
            <Footer />
          </div>
        </>
      )}
    </BaseProvider>
  </SessionProvider>
}
