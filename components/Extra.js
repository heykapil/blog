import Script from 'next/script'

export default function Extra() {
  return (
    <>
      <Script src=".../public/static/extra.js" strategy="lazyOnload" />
    </>
  )
}
