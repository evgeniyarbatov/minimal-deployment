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
        ? 'logs/http-server.log'
        : '/var/log/http-server.log' 
    }),
  ],
});

export default logger;