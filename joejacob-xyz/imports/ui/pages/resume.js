import { PDFJS } from 'meteor/pascoual:pdfjs';
import { FlowRouter } from 'meteor/kadira:flow-router';
//import '../../api/aws/server/s3.js';
import './resume.html';

/* In your Template.xxx.rendered */
// Set worker URL to package assets

PDFJS.workerSrc = '/packages/pascoual_pdfjs/build/pdf.worker.js';
//AWS = require('aws-sdk');
//const S3 = new S3();
//

AWS = require('aws-sdk');
const S3 = new AWS.S3();
//console.log(AWS.config);
//S3 = Session.get('AWS_S3');
Template.App_resume.helpers({
	resumePdf() {
		// Create PDF
		Meteor.call('getS3', function(err, result) {
			//Session.set('S3', result);
			var params = {
				Bucket: 'joejacob-data',
				Key: 'joseph_jacob_resume.pdf'
			};	
			S3.getObject(params, function(err, data) {
				if(err) {
					console.log(err, err.stack);
				} else {
					console.log(data);
				}
			});
		});
		//var S3 = Session.get('S3');
		//		});

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
	textUrl() {
		return 'https://' + 'joejacob-data' + '.s3.amazonaws.com/' + 'joseph_jacob_resume.txt';
	},
	adjustFrame() {
		Meteor.defer(function() {
			$( "#txtiframe" ).load(function() {
				this.height = this.contentWindow.document.body.scrollHeight*0.7 + 'px';
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

