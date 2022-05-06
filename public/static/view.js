const previewConfig = {
   showDownloadPDF: true,
   showPageControls: true
}
document.addEventListener("adobe_dc_view_sdk.ready", function(){ 
		var adobeDCView = new AdobeDC.View({clientId: "a6927ed0ae534212b7f5ecfb67e619fe"});
		adobeDCView.previewFile({
			content:{location: {url: "https://documentcloud.adobe.com/view-sdk-demo/PDFs/Bodea Brochure.pdf"}},
			metaData:{fileName: "Bodea Brochure.pdf"}
		}, {embedMode: "LIGHT_BOX"});
	});
