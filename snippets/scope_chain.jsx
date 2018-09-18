const sixSquared = square(6);

function square(number) {
  const squared = number * number;

  function nullIfEven() {
    const secretResult = squared % 2 ? 0 : squared;

    return secretResult;
  }

  const result = nullIfEven();

  console.log(secretResult, squared, result);
  // undefined, 36, 0

  return result;
}
