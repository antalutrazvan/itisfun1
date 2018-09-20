function main() { 
  // scope 1 
  let counter = 2;

  counter += 1; //
  // counter === 3

  { 
    //scope 2 
    let counter = 3;
        
    counter += 1;
    // counter === 4 
  }

}