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

NProgress.configure({ showSpinner: false });

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

export default function App({ Component, pageProps }) {
  
  useEffect(() => {
    renderMathInElement(document.body, {
      delimiters: [
        {left: "$$", right: "$$", display: true},
        {left: "\\(", right: "\\)", display: false},
        {left: "\\begin{equation}", right: "\\end{equation}", display: true},
        {left: "\\begin{align}", right: "\\end{align}", display: true},
        {left: "\\begin{alignat}", right: "\\end{alignat}", display: true},
        {left: "\\begin{gather}", right: "\\end{gather}", display: true},
        {left: "\\begin{CD}", right: "\\end{CD}", display: true},
        {left: "\\[", right: "\\]", display: true},
        {left: "$", right: "$", display: true}
    ],
    // rendering keys
    throwOnError : false
    });
  }, [Component])

  return (
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
  )
}
