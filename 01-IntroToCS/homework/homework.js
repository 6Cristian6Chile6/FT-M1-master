'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  let numerizador=x=>Number(x);
  let arraynum = Array.from(String(num),numerizador);
  let arraybinario = arraynum.reverse();
  let acum=0;
  for (let i=0; i<arraybinario.length; i++){
      acum+=arraybinario[i]*Math.pow(2,i);}
  return acum;
      
}

function DecimalABinario(num){
  let arraybin=[];
  let guardanum;
  if (num===0){
      return num;
  }
  else if (num===1){
  return num;
  }
  else do {
      arraybin.unshift(num%2)
      let cuociente=Math.floor(num/2);
      guardanum=num;
      num=cuociente;
      
  } while (guardanum >= 2)
  //return Number(arraybin.join("")); ...devuelve numero y NO PASA TEST...
  return arraybin.join("");
}

module.exports = {
  BinarioADecimal,
  DecimalABinario,
}