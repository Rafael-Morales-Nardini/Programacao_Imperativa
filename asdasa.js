let numeros = [10,15,20.5,30,40,80]; // tamanho = 6
numeros.length // Tamanho de elementos do array = 6
// Para o indice 0 até o tamanho máximo de elementos do array vou fazer algo e incrementar o indice de 1 em 1
let soma = 0;
for(let indice = 0;indice < numeros.length;indice++){

  /*soma = 0;
    
    indice = 0 ; 0 < 6 -> true ; numero = numeros[indice] = 10 ; soma += numero;
    soma = 10
    indice++
    
    indice = 1 ; 1 < 6 -> true ; numero = numeros[indice] = 15 ; soma += numero;
    soma = 25
    indice++
    indice = 2 ; 2 < 6 -> true ; numero = numeros[indice] = 20.5 ; soma += numero;
    soma = 45.5
    indice++
    indice = 3 ; 3 < 6 -> true ; numero = numeros[indice] = 30 ; soma += numero
    indice++
    soma = 75.5
    indice = 4 ; 4 < 6 -> true; numero = numeros[indice] = 40 ; soma += numero
    indice++
    soma = 115.5
    indice = 5 ; 5 < 6 -> true; numero = numeros[indice] = 80 ; soma += numero
    indice++
    soma = 195.5;
    indice = 6 ; 6 < 6 -> false
    Encerra o loop
  */
  console.log("Valor da soma: " + soma);
  const numero = numeros[indice];
  soma += numero;

}

console.log("Valor da soma: " + soma);
