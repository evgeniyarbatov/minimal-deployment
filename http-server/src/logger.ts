import winston, { format, createLogger, transports } from 'winston';

const customFormat = winston.format.printf((info) => {
  return JSON.stringify({
    time: (new Date()).toISOString(),
    level: info.level,
    message: info.message,
  });
});

// Configure the logger
const logger = createLogger({
  level: 'info',
  format: format.combine(
    format.timestamp(),
    customFormat,
  ),
  transports: [
    new transports.Console()
  ],
});

export default logger;