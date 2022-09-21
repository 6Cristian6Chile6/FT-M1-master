'use strict'
// No cambies los nombres de las funciones.

function factorear(num) {

  let factors=[1];
  let x =2;
  while (num > 1){
    if (num%x===0){
      factors.push(x);
      num/=x;}
      else {
        x++;
      }
return factors;
    }
  }


  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:



function bubbleSort(array) {

  for(let i=0;i<array.length;i++)
        for (let j=0; j<array.length; j++){
        if(array[i]<array[j]){
          let aux=array[i];
          array[i]=array[j];
          array[j]=aux;
        }
  }
return array;
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

}


function insertionSort(array) {
  
  /*for (let i=1; i<array.length ;i++){
    if (array[i]<array[i-1])
     {let aux=array[i];
          array[i]=array[i-1];
          console.log(array)
          array[i-1]=aux;
                    while(i>0){
               i--;
             }}}// esta tb funciona... pero esta rarisima XD */
             for (let i = 1; i < array.length; i++) {
              let j = i - 1;
              let auxiliar = array[i];
          
              while (j >= 0 && array[j] > auxiliar) {
                  array[j + 1] = array[j];
                  --j;
              }
          
              array[j + 1] = auxiliar;
          }
   return array;
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:

}


function selectionSort(array) {
  for(let i = 0; i < array.length; i++) {
    // encontrar el minimo en el arreglo
    let min = i;
    for(let j = i+1; j < array.length; j++){
        if(array[j] < array[min]) {
            min=j; 
        }
     }
     if (min != i) {
         // cambiando elementos
         let temporal = array[i]; 
         array[i] = array[min];
         array[min] = temporal;      
    }
}
return array;
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:

}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
