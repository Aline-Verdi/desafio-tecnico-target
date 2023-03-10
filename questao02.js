function verificarFibonacci(num) {
    let a = 0;
    let b = 1;
    let fibonacci = [a, b];
  
    while (b <= num) {
      let c = a + b;
      a = b;
      b = c;
      fibonacci.push(c);
    }
  
    if (fibonacci.includes(num)) {
      console.log(num + ' - ' + 'Pertence à sequência de Fibonacci.');
    } else {
      console.log(num + ' - ' + 'Não pertence à sequência de Fibonacci.');
    }
  }  
  
  verificarFibonacci(21); // Saída: 21 Pertence à sequência de Fibonacci.
  verificarFibonacci(26); // Saída: 26 Não pertence à sequência de Fibonacci.