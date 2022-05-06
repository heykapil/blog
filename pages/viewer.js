import Script from 'next/script'
export default function Viewer() {
  return (
    <div id="adobe-dc-view"></div>
    <script src="https://documentcloud.adobe.com/view-sdk/main.js"></script>
    <script type="text/javascript" src="./static/view.js"></script>
  )
}
