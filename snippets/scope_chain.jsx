one();
// a b c

function one() {
	var a = 'a';
  
  two();

  function two() {
		var b = "b";
 		
    three();

    function three() {
    	var c = "c";
      
      console.log(a,b,c); 
    }
  }
}
