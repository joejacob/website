import './sidebar.html';
import './loading.js';

Template.App_sidebar.events({
	'click .project-title'(event) {
		if (event.target.id != '') {
    		FlowRouter.go('/projects/' + event.target.id);
    	}
  	}
})