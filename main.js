// Variabili 
let numeroTotaleGatti = 53; 
let numeroGattiPerFila = 8; 

// Gatti rimasti fuori
let gattiRimanenti = Math.ceil(numeroTotaleGatti % numeroGattiPerFila);

// File complete
let numeroFileComplete = Math.ceil(numeroTotaleGatti - gattiRimanenti) / numeroGattiPerFila;

// Gatti che servono per completare una nuova fila
let gattiPerNuovaFila = (gattiRimanenti && numeroGattiPerFila - gattiRimanenti) || 0;

// Risultati
console.log(`Ci sono ${numeroFileComplete} file di gatti e ne mancano ${gattiPerNuovaFila} per una nuova fila, con un avanzo di ${gattiRimanenti}` );
