import { Meteor } from 'meteor/meteor';

//if(Meteor.isServer) {
Meteor.methods({
	getRepos() {
			this.unblock();
			
			console.log('token ' + process.env.GITHUB_API_KEY);
			HTTP.get('https://api.github.com/users/joejacob/repos', {
				'headers': {
					'Authorization' : 'token ' + process.env.GITHUB_API_KEY,
					'User-Agent' : 'joejacob'
				}
			}, function (err, response, headers) {
				console.log("error: " + err);
				console.log("response " + response);
	  			console.log("headers: " + headers); //json object
	  			console.log(response);
	  			return response.data;
			});
	}
});
//}