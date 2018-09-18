const sixSquared = square(6);

function square(number) {
  const squared = number * number;

  function nullIfOdd() {
    const secretResult = squared % 2 ? squared : 0 ;

    return secretResult;
  }

  const result = nullIfEven();

  console.log(secretResult, squared, result);
  // undefined, 36, 36

  return result;
}
