import Script from 'next/script'
export default function Viewer() {
  return (
    <Script src="https://documentcloud.adobe.com/view-sdk/main.js" />
    <Script
  strategy="afterInteractive"
  dangerouslySetInnerHTML={{
    __html: `
    (document.addEventListener("adobe_dc_view_sdk.ready", function(){ 
		var adobeDCView = new AdobeDC.View({clientId: "432a6f34caa24103815ebb8b12751934", divId: "adobe-dc-view"});
		adobeDCView.previewFile({
			content:{location: {url: "https://documentcloud.adobe.com/view-sdk-demo/PDFs/Bodea Brochure.pdf"}},
			metaData:{fileName: "Bodea Brochure.pdf"}
		}, {});
	}););
  `,
  }}
/>
  )
}
