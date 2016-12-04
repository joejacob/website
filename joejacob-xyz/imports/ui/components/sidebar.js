import './sidebar.html';

Repos = new Mongo.Collection('repos');
var reposHandle;

Template.App_sidebar.onCreated(function() {
	reposHandle = Meteor.subscribe('githubRepos');
});

Template.App_sidebar.helpers({
	repos(){
		return Repos.find();
	}
});