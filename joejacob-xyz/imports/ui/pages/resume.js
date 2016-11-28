import { PDFJS } from 'meteor/pascoual:pdfjs';

import './resume.html';

/* In your Template.xxx.rendered */
// Set worker URL to package assets

PDFJS.workerSrc = '/packages/pascoual_pdfjs/build/pdf.worker.js';

Template.App_resume.helpers({
	resumePdf() {
		// Create PDF
		PDFJS.getDocument('/joseph_jacob_resume.pdf').then(function getPdfHelloWorld(pdf) {
		    // Fetch the first page
		    pdf.getPage(1).then(function getPageHelloWorld(page) {
		        var scale = 1.3;
		        var viewport = page.getViewport(scale);

		        // Prepare canvas using PDF page dimensions
		        var canvas = document.getElementById('pdfcanvas');
		        var context = canvas.getContext('2d');
		        canvas.height = viewport.height;
		        canvas.width = viewport.width;

		        // Render PDF page into canvas context
		        page.render({canvasContext: context, viewport: viewport});
		    });
		});
	},
	toggleValue(change, value) {
		var tag = value === FlowRouter.getQueryParam('type') ? 'span' : 'a';
		var ele = document.createElement(tag);
		ele.classList.add('change-type');
		ele.textContent = value;
		return ele.outerHTML;
	},
	adjustFrame() {
		Meteor.defer(function() {
			$( "#txtiframe" ).load(function() {
				this.height = this.contentWindow.document.body.scrollHeight + 'px';
				this.width = this.contentWindow.document.body.scrollWidth*2.3 + 'px';
			});
		});
	},
	isPdf() {
		return FlowRouter.getQueryParam('type') === 'pdf';
	}
});

Template.App_resume.events({
	'click .change-type'(event) {
		FlowRouter.setQueryParams({type: event.target.text});
	}
});

