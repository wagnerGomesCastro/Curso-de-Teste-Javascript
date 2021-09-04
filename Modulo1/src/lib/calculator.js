module.exports.sum = (num1, num2)  => {
  const int1 = parseInt(num1, 10);
  const int2 = parseInt(num2, 10);

  // const int1 = num1;
  // const int2 = num2;

  if (Number.isNaN(int1) || Number.isNaN(int2)) {
    // console.log('Error! Please check your input')
    throw new Error('Please check your input');
  }

  return int1 + int2;
}
