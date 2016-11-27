import { PDFJS } from 'meteor/pascoual:pdfjs';

import './resume.html';

/* In your Template.xxx.rendered */
// Set worker URL to package assets
PDFJS.workerSrc = '/packages/pascoual_pdfjs/build/pdf.worker.js';

Template.App_resume.helpers({
	pdf() {
		// Create PDF
		PDFJS.getDocument('/joseph_jacob_resume.pdf').then(function getPdfHelloWorld(pdf) {
		    // Fetch the first page
		    pdf.getPage(1).then(function getPageHelloWorld(page) {
		        var scale = 1;
		        var viewport = page.getViewport(scale);

		        // Prepare canvas using PDF page dimensions
		        var canvas = document.getElementById('pdfcanvas');
		        //var canvas = document.createElement('canvas');
		        var context = canvas.getContext('2d');
		        canvas.height = viewport.height;
		        canvas.width = viewport.width;

		        // Render PDF page into canvas context
		        page.render({canvasContext: context, viewport: viewport}).promise.then(function() {
		        	return canvas.outerHTML;
		        });
		    });
		});
	}
});

