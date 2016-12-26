Meteor.startup(function() {
    const prerenderio = require('prerender-node');
    
    if (process.env.PRERENDER_IO && process.env.DOMAIN_NAME) {
        prerenderio.set('prerenderToken', process.env.PRERENDER_IO);
        prerenderio.set('host', process.env.DOMAIN_NAME);
        prerenderio.set('protocol', 'http');
        WebApp.rawConnectHandlers.use(prerenderio);
    }
});