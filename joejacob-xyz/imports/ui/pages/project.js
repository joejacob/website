import './project.html';

Template.App_project.helpers({
	title() {
		return FlowRouter.getParam('project_name');
	}
});