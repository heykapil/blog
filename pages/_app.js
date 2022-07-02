import '@/css/tailwind.css'
import 'katex/dist/katex.min.css'
import '@/css/extra.css'
import '@/css/prism.css'
import '@/css/twemoji.css'
import '@/css/timeline.css'
import { ThemeProvider } from 'next-themes'
import Head from 'next/head'
import Router , { useRouter } from 'next/router'
import Analytics from '@/components/analytics'
import LayoutWrapper from '@/components/LayoutWrapper'
import Extra from '@/components/Extra'
import NProgress from 'nprogress';
import { SessionProvider } from 'next-auth/react';


function App({ Component, pageProps }) {
  const router = useRouter();
  const { session, ...rest } = pageProps;
  return (
    <>
      <ThemeProvider attribute="class">
        <SessionProvider session={session}>
        <Head>
        <meta
              name="viewport"
              content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"
            />
        </Head>
        <Analytics />
        <LayoutWrapper>
          <Component {...rest} />
        </LayoutWrapper>
      </SessionProvider>
      </ThemeProvider>
    </>

  )
}
export default App;