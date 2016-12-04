import { Random } from 'meteor/random';

if (Meteor.isServer) {
	Meteor.publish('githubRepos', function() {
		var self = this;
		try {
			var response = HTTP.get('https://api.github.com/users/joejacob/repos', {
						'headers': {
							'Authorization' : 'token ' + process.env.GITHUB_API_KEY,
							'User-Agent' : 'joejacob'
						}
					});

			_.each(response.data, function(repo) {
			 	self.added('repos', Random.id(), repo);
			});

			self.ready();
		} catch (error) {
			console.log(error);
		}
	});
}