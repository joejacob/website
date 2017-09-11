import './project.html';

import { Session } from 'meteor/session';

Template.App_project.helpers({
	readme() {
		if (Session.get(FlowRouter.getParam('project_name')) === undefined) {
			HTTP.get(
				'https:\/\/api.github.com/repos/joejacob/' + FlowRouter.getParam('project_name') + '/contents/README.md',
				{
					headers: {
						"Accept": "application/vnd.github.v3.html+json"
					}
				}, 
				function(error, response) {
					if (error) {
						console.log(error);
					} else {
						Session.set(FlowRouter.getParam('project_name'), response.content);
					}
			});
		}

		return Session.get(FlowRouter.getParam('project_name'));
	}
});