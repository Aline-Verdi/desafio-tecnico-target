// 2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores 
// anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, 
// informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

// IMPORTANTE:

// Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código;

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