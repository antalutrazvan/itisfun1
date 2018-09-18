logger("StarCraft Strategy Guide Started");
/**
Logger-2 at 18/09/2018, 18:18:39
  
  StarCraft Strategy Guide Started  
*/

function logger(msg = "", level="info", api = console) {
  api[level](
    `logger at ${new Date().toLocaleString()}

      ${msg} 
    `
  );
};

setTimeout(function() {
  logger("Must construct additional Pylons", "warn");
  /**
  logger-2 at 18/09/2018, 18:18:39
    
     Must construct additional Pylons
  */
}, 60000)
