/*Bin requiring*/
	const Kernel = require( global.paths.bin +'/kernel');

/*Services requiring*/
	const bodyParser 	 = require('body-parser'),
				compress 		 = require('compression'),
				express 		 = require('express'),
				pug 				 = require('pug'),
				morgan 			 = require('morgan'),
				errorHandler = require(global.paths.vendors).errorHandler;

/*Kernel methods overriding*/

	Kernel.appWillFinishLaunching = appWillFinishLaunching;
	Kernel.appDidFinishLaunching = appDidFinishLaunching;

module.exports = Kernel;

/*Kernel methods definitions*/

	function appWillFinishLaunching(app) {
		app.disable('x-powered-by');
		app.engine('pug', pug.__express);
		app.set('view engine', 'pug');
		app.set('views', global.paths.views);
		app.use(compress());
		app.use(bodyParser.urlencoded({ extended: true, inflate: true }));
		app.use(bodyParser.json());
		app.use(express.static(global.paths.assets));
		app.use(morgan('dev'));
	}

	function appDidFinishLaunching (app) {
		errorHandler.set(app);
	}
