let a = 10;
let b = 25;

// Exibindo os valores iniciais
console.log("Valores iniciais:");
console.log("a:", a);
console.log("b:", b);

// Trocando os valores das variáveis a e b
a = a + b;
b = a - b; 
a = a - b; 

// Exibindo os valores após a troca
console.log("Valores após a troca:");
console.log("a:", a);
console.log("b:", b);