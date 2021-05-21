function factorial(n) {

  let result = 1;

  for(let i = 0; i < n; i++) {
    result = result * (n - i);
  }
  
  return result;
  
}
  
  alert( factorial(0) );
  alert( factorial(1) );
  alert( factorial(3) );
  alert( factorial(5) );
