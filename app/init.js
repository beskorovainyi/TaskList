'use strict';

module.exports = function(express, app) {

	const config = require('./config');
	const path = require('path');

	app.use('/', express.static(path.join(config.app.staticPath)));

	let route = require('./route')(app);

	let server = require('./server')(app, express);
}
