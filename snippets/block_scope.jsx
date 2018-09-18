function main() { 
  // scope 1 
  let counter = 2;

  { 
    //scope 2 
    let counter = 3;
        
    counter += 1;
    /**
      we're in scope 2 so:
      counter === 4 
    */
  }

  counter += 1;
  /**
    we're in scope 1 so:
    counter === 3
  */
}