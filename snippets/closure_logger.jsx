function createLogger(name, level, api) {
  const context = {
    name: name || 'DEFAULT_LOGGER',
    level: level || 'info',
    api: api || console
  };
  
  return function (msg) {
    context.api[context.level](
      `${context.name} at ${new Date().toLocaleString()}

        ${msg} 
      `
    );
  };
}

const errorLogger = createLogger("ERR-LOG", "error");
const warningLogger = createLogger("WRN-LOG", "warn");

errorLogger("This is confusing.");
/**
  ERR-LOG at 19/09/2018, 11:36:48

    But not really.
 */
warningLogger("But not really.");
/**
  FS-WRN-LOG at 19/09/2018, 11:36:48

    But not really. 
 */