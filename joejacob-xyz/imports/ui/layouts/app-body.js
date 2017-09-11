/* global alert */

import { Meteor } from 'meteor/meteor';
import { ReactiveVar } from 'meteor/reactive-var';
import { Template } from 'meteor/templating';
import { FlowRouter } from 'meteor/kadira:flow-router';

import '../components/loading.js';
import '../components/header.js';
import '../components/footer.js';
import '../components/sidebar.js';

import './app-body.html';

// global.Buffer = global.Buffer || require("buffer").Buffer;

const CONNECTION_ISSUE_TIMEOUT = 5000;

// A store which is local to this file?
const showConnectionIssue = new ReactiveVar(false);

Meteor.startup(() => {
  // Only show the connection error box if it has been 5 seconds since
  // the app started
  setTimeout(() => {
    // Show the connection error box
    showConnectionIssue.set(true);
  }, CONNECTION_ISSUE_TIMEOUT);
});

Template.App_body.helpers({
  connected() {
    if (showConnectionIssue.get()) {
      return Meteor.status().connected;
    }
    return true;
  }
});