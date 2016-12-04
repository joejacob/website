import { TAPi18n } from 'meteor/tap:i18n';


import './header.html';

Template.App_header.helpers({
	languages() {
    	return _.keys(TAPi18n.getLanguages());
  	},
  	isActiveLanguage(language) {
    	return (TAPi18n.getLanguage() === language);
  	}
});

Template.App_header.events({
	'click .js-toggle-language'(event) {
    	const language = $(event.target).html().trim();
    	TAPi18n.setLanguage(language);
  	}
});