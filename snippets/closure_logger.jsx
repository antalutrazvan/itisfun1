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
const fileErrorLogger = createLogger("FS-ERR-LOG", "error", fileLoggingAPI);

errorLogger("This is confusing.");
fileErrorLogger("But not really.");
