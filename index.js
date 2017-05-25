'use strict';

const logEntries = (config) => {

    return (loggingEvent) => {

        const LeNode = require('le_node');

        const log = new LeNode({
            token: config.token
        });

        const toFrom = {
            info: 'info',
            error: 'err',
            warn: 'warning',
            trace: 'notice',
            fatal: 'emerg',
            debug: 'debug'
        };

        const send = toFrom[loggingEvent.level.levelStr.toString().toLowerCase()];

        loggingEvent.data.forEach((logSend) => {

            this.loggingParse = '';

            try {
                this.loggingParse = JSON.parse(logSend);
            }
            catch (e) {
                this.loggingParse = logSend;
            }
        
            log[send](this.loggingParse);
        });
    };
};

const configure = (config) => {

    return logEntries(config);
};

exports.name      = 'log4js-logEntries-appender';
exports.appender  = logEntries;
exports.configure = configure;
