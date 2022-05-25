import Document, { Html, Head, Main, NextScript } from 'next/document'
class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="viewport" content="width=device-width" />
          <link
            rel="preload"
            href="/font/ibm/ibm-plex-sans-var.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="/font/ibm/ibm-plex-sans-var-italic.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="/font/cansu/Cansu-Bold.woff"
            as="font"
            type="font/woff"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="/font/cansu/Cansu-Regular.woff"
            as="font"
            type="font/woff"
            crossOrigin="anonymous"
          />
           {/*  <link rel="preload" href="/font/league-mono/LeagueMono-Bold.woff2" as="font" type="font/woff2" crossOrigin='anonymous' />
          <link rel="preload" href="/font/league-mono/LeagueMono-SemiBold.woff2" as="font" type="font/woff2" crossOrigin='anonymous' />
          <link rel="preload" href="/font/league-mono/LeagueMono-Regular.woff2" as="font" type="font/woff2" crossOrigin='anonymous' />
          <link rel="apple-touch-icon" sizes="76x76" href="/static/favicons/hat.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/static/favicons/hat.png" />
          <link rel="icon" type="image/jpg" sizes="16x16" href="/static/favicons/hat.jpg" />
        */}
          <link rel="manifest" href="/static/favicons/site.webmanifest" />
          <link rel="mask-icon" href="/static/favicons/hat.png" color="#fff" />
          <meta name="msapplication-TileColor" content="#000000" />
          <meta name="theme-color" content="#000000" />
          <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
          <script src="/static/extra.js" />
          {/*<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <link
            href="https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@100;300;400;600;700;800&display=swap"
            rel="stylesheet"
          />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
          <link
            href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500&display=swap"
            rel="stylesheet"
          />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.15.3/katex.min.css" integrity="sha512-07YhC3P4/vS5HdgGuNAAeIxb5ee//efgRNo5AGdMtqFBUPYOdQG/sDK0Nl5qNq94kdEk/Pvu8pmN4GYUeucUkw==" crossorigin="anonymous" referrerpolicy="no-referrer" />
          */}
        </Head>
        <body className="antialiased text-black bg-white dark:bg-dark dark:text-white">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
