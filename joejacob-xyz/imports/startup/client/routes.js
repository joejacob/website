import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

import '../../ui/layouts/app-body.js';
import '../../ui/pages/app-not-found.js';
import '../../ui/pages/root-redirector.js';
import '../../ui/pages/resume.js';

FlowRouter.route('/', {
  name: 'home',
  action() {
    BlazeLayout.render('App_body', { main: 'App_rootRedirector' });
  },
});

FlowRouter.route('/resume', {
	name: 'resume',
	action() {
		BlazeLayout.render('App_body', { main: 'App_resume' });
	},
});

// uses App_notFound template for unknown routes
FlowRouter.notFound = {
	action() {
		BlazeLayout.render('App_body', { main: 'App_notFound'});
	},
};