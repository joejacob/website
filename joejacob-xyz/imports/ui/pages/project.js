import './project.html';

//Session.set('repo_name', FlowRouter.getParam('project_name'));

Template.App_project.helpers({
	title() {
		console.log('poooooo' + Session.get('repo_name'));
		// return Session.get('repo_name');
		return FlowRouter.getParam('project_name');
	}
});