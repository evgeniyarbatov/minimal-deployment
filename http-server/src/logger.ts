import { format, createLogger, transports } from 'winston';

// Configure the logger
const logger = createLogger({
  level: 'info',
  format: format.combine(
    format.timestamp(),
    format.json(),
  ),
  transports: [
    new transports.Console()
  ],
});

export default logger;