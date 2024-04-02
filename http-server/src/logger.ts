import winston, { format, createLogger, transports } from 'winston';

// Configure the logger
const logger = createLogger({
  level: 'info',
  format: format.combine(
    format.timestamp(),
    format.json()
  ),
  transports: [
    new transports.File({ 
      filename: process.env.NODE_ENV == 'dev' 
        ? 'logs/httpserver.log'
        : '/var/log/httpserver.log' 
    }),
  ],
});

export default logger;