logger("StarCraft Strategy Guide Started");
/**
default_logger at 15/09/2018, 18:18:39
  
  StarCraft Strategy Guide Started  
*/

setTimeout(function() {
  logger("You must construct additional Pylons", "warn");
  /**
  default_logger at 15/09/2018, 18:19:39
    
     Must construct additional Pylons
  */
}, 60000)

function logger(msg = "", level="info", name="default_logger" ) {
  console[level](
    `${name} at ${new Date().toLocaleString()}

      ${msg} 
    `
  );
};

