import '@/css/extra.css'
import '@/css/prism.css'
import '@/css/tailwind.css'
import '@/css/twemoji.css'
import '@/css/timeline.css'
import { ThemeProvider } from 'next-themes'
import Head from 'next/head'
import Analytics from '@/components/analytics'
import LayoutWrapper from '@/components/LayoutWrapper'
import Extra from '@/components/Extra'

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
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
