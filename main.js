
let numTotaleGatti = 53; 
let numGattiPerFila = 8; 

let numFile = Math.floor(numeroTotaleGatti / numeroGattiPerFila);

let numRimastiFuori = numeroTotaleGatti % numGattiPerFila;
console.log(numRimastiFuori);

let gattiPerNuovaFila = numeroGattiPerFila - numRimastiFuori;

// Risultati
console.log(`Ci sono ${numFile} file di gatti e ne mancano ${gattiPerNuovaFila} per una nuova fila, con un avanzo di ${numRimastiFuori}` );
