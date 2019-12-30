'use strict';

module.exports = {
	'server': {
		'host': "localhost",
		'port': 3000,
	},

	'app': {
		'viewPath': `${__dirname}/../public/view`,
		'staticPath': `${__dirname}/../public`,
	},

	'gulp': {
		'build': {
			'js': `${__dirname}/../public/js`,
			'css': `${__dirname}/../public/css`,
			'img': `${__dirname}/../public/img`
		},
		'src': {
			'js': `${__dirname}/../public/js/*.js`,
			'css': `${__dirname}/../public/css/style.sass`,
			'img': `${__dirname}/../public/img/**/*.*`
		},
		'watch': {
			'js': `${__dirname}/../public/js/*.js`,
			'css': `${__dirname}/../public/css/**/*.sass`,
			'img': `${__dirname}/../public/img/**/*.*`
		}
	}
};
