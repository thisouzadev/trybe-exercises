/* Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;
A média aritmética é o resultado da soma de todos os elementos divido pelo número total de elementos.
 */
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27]; 
let result = 0
for (let index = 0; index < numbers.length; index+=1) {
  result += numbers[index]; 
}
let average = result/numbers.length;
console.log(average);