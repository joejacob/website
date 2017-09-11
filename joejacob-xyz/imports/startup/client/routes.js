import { BlazeLayout } from 'meteor/kadira:blaze-layout';

import '../../ui/layouts/app-body.js';
import '../../ui/pages/app-not-found.js';
import '../../ui/pages/root-redirector.js';
import '../../ui/pages/project.js';
import '../../ui/pages/resume.js';
import '../../ui/pages/lisa.js';

FlowRouter.route('/', {
  name: 'home',
  action() {
    BlazeLayout.render('App_body', { main: 'App_rootRedirector' });
  },
});

FlowRouter.route('/projects/:project_name', {
  name: 'project',
  action() {
    BlazeLayout.render('App_body', { main: 'App_project' });
  },
});

FlowRouter.route('/resume', {
	name: 'resume',
	action() {
		BlazeLayout.render('App_body', { main: 'App_resume' });
	},
});

FlowRouter.route('/lisa', {
  name: 'lisa',
  action() {
    BlazeLayout.render('App_body', { main: 'App_lisa' });
  }
});

// uses App_notFound template for unknown routes
FlowRouter.notFound = {
	action() {
		BlazeLayout.render('App_body', { main: 'App_notFound'});
	},
};