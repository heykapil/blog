import Script from 'next/script'
export default function Viewer() {
  return (
    <div id="adobe-dc-view"></div>
    <Script src="https://documentcloud.adobe.com/view-sdk/main.js" />
    <Script src="./static/view.js />
  )
}
