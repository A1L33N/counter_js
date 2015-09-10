var counter = function(num1, num2) {
  var multiple = Math.floor(num1/num2);
  var top = num2 * (Math.ceil(num1/num2));
  var result = 0;
  var array = [];

  while (result < top) {
    debugger

    result +=  num2;
    array.push(result);
    debugger;
  }
  return array.join(', ');
};
