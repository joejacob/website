//if(Meteor.isServer) {
	//console.log(AWS.config);
	
// }
// Meteor.methods({
// 	''
// })


// if(process.env.AWS_ACCESS_KEY_ID && process.env.AWS_SECRET_ACCESS_KEY) {
// 	AWS.config.update({
// 		accessKeyId: process.env.AWS_ACCESS_KEY_ID,
// 		secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
// 		region: process.env.AWS_REGION
// 	});
// }

Meteor.methods({
	'getS3': function() {
		console.log('returned s3')
		AWS = require('aws-sdk');
		return new AWS.S3();
	}
})
//export default S3 = new AWS.S3();