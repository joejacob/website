import './sidebar.html';
import './loading.js';

Repos = new Mongo.Collection('repos');

Template.App_sidebar.onCreated(function() {
	Meteor.subscribe('githubRepos');
});

Template.App_sidebar.helpers({
	repos(){
		console.log(Repos.find());
		return Repos.find({ fork: false });
	}
});

Template.App_sidebar.events({
	'click .project-title'(event) {
    	FlowRouter.go('/projects/' + event.target.text.replace(/\s+/g, '-'));
  	}
})