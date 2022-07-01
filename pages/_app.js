import '@/css/tailwind.css'
import 'katex/dist/katex.min.css'
import '@/css/extra.css'
import '@/css/prism.css'
import '@/css/twemoji.css'
import '@/css/timeline.css'
import renderMathInElement from 'katex/dist/contrib/auto-render.min.js'
import { useEffect } from 'react'
import { ThemeProvider } from 'next-themes'
import Head from 'next/head'
import Router from 'next/router';
import Analytics from '@/components/analytics'
import LayoutWrapper from '@/components/LayoutWrapper'
import Extra from '@/components/Extra'
import NProgress from 'nprogress';
import { SessionProvider } from 'next-auth/react';

NProgress.configure({ showSpinner: true });

Router.onRouteChangeStart = () => {
  // console.log('onRouteChangeStart triggered');
  NProgress.start();
};

Router.onRouteChangeComplete = () => {
  // console.log('onRouteChangeComplete triggered');
  NProgress.done();
};

Router.onRouteChangeError = () => {
  // console.log('onRouteChangeError triggered');
  NProgress.done();
};

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (  
  
    <SessionProvider session={session}>
      <ThemeProvider attribute="class">
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <Analytics />
      <LayoutWrapper>
        <Component {...pageProps} />
      </LayoutWrapper>
      <Extra />
      </ThemeProvider>
    </SessionProvider>
      
  )
}
