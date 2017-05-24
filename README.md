# Install 
npm install --save log4js-logentries-appender

#Example use

    const Log4js = require('log4js');

    Log4js.configure({
        appenders: [
            { type: 'log4js-logentries-appender', token: 'MyToken' },
        ]
    });

    const logger = Log4js.getLogger();

    logger.trace('my message');
	logger.debug('my message');
	logger.info('my message');
	logger.warn('my message');
	logger.error('my message');
	logger.fatal('my message');
