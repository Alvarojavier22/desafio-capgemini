let cadena = prompt("Ingrese una palabra");

let numeroCombinaciones = factorial(cadena.length);

let anagramas = [];


while (anagramas.length != numeroCombinaciones) {

  let anagrama = combinar(cadena);

  if (!anagramas.includes(anagrama)) anagramas.push(anagrama);

}

console.log(anagramas);
function combinar(cadena) {

  let arreglo = Array.from(cadena);


  for (i = 0; i <= arreglo.length; i++) {

    let index = Math.floor(Math.random() * arreglo.length);


    let temp = arreglo[i];
    arreglo[i] = arreglo[index];
    arreglo[index] = temp;

  }
  return arreglo.join('');

}


function factorial(n) {
  let total = 1;
  for (i = 1; i <= n; i++) {
    total = total * i;
  }
  return total;
}