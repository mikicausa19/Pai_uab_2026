// Introducció a les taules 
// 21.1.- Fes un programa que faci el següent:
// ● Defineix una variable de tipus taula, buida.
// ● Afegeixi el valor “Hola” a la posició 0.
// ● Afegeixi el valor “Adeu” a la posició 1.
// ● Escrigui a la consola el contingut de la taula.

// let taula = [];
// taula[0] = "Hola";
// taula[1] = "Adeu";
// console.log(taula);

// 21.2.- Al programa anterior, afegeix les instruccions necessàries (després del console.log()) per a fer el següent:
// ● Afegeixi el valor “Nom” a la posició 2 de la taula.
// ● Escrigui a la consola el contingut de la taula.
// ● Modifiqui el valor emmagatzemat a la posició 1 de la taula, guardant el valor “, “
// ● Escrigui a la consola el contingut de la taula

// taula[2] = "Nom";
// console.log (taula);
// taula[1] = ", ";
// console.log(taula);

// 21.3.- Fes un programa que faci el següent:
// ● Defineixi una variable de tipus taula, amb aquests elements [23,45,98,73].
// ● Escrigui a la consola la suma dels elements situats a les posicions 0 i 2 de la taula.
// ● Guardi a la posició 6 de la taula la suma dels elements
// ● Escrigui a la consola el contingut de la taula. Què passa a la posició 5?

// let taula = [23, 45, 98, 73];
// let suma = 0;
// for (let i = 0; i < taula.length; i++){
//     suma += taula[i]
//     taula[6] = suma
//     console.log(taula[0] + taula[2])
//     console.log(taula)
//}
// A la posició 5 surt undefined ja que no hi ha cap valor assignat a aquesta posició.

// 21.4.- Fes un programa que, donat un número (que demanarem per pantalla fent servir prompt()) emmagatzemi a una taula el doble i el triple d’aquest número. Un cop fet, escriu la taula a la consola.

// let numero = Number(prompt("Introdueix un número"));
// let taula = []
// for (let i = 0; i < 2; i++){
//     taula[0] = numero * 2;
//     taula[1] = numero * 3;
// }
// console.log(taula);

// 21.5.- Fes un programa que, donat dos números, que demanarem per pantalla i emmagatzemarem a dues variables, guardi a una taula els resultats de la suma, la resta, la multiplicació i la divisió dels dos valors introduïts.

// let numero1 = Number(prompt("Introdueix un número"));
// let numero2 = Number(prompt("Introdueix un número"));
// let taula = []
// for (i = 0; i < 4; i++){
//     taula[0] = numero1 + numero2
//     taula[1] = numero1 - numero2
//     taula[2] = numero1 * numero2
//     taula[3] = numero1 / numero2 
// }
// console.log(taula);

// 21.6.- Donada aquesta taula:
// let taula = [23,45,63,78,23,68,3,78,32,53,93,21,53,5,62,78];
// Fes un programa que escrigui a la consola els valors situats a la primera i la darrera posició de la taula.
// *****
// Donada la definició d’aquesta taula:
// let taula = [23,45,63,78,23,68,3,78,32,53,93,21,53,5,62,78];

// let taula = [23,45,63,78,23,68,3,78,32,53,93,21,53,5,62,78];
// console.log ([0])
// console.log([15])

// 21.7.- Fes un programa que escrigui a la consola tots els valors emmagatzemats a la taula, un a un.
// let taula [23,45,63,78,23,68,3,78,32,53,93,21,53,5,62,78];
// for (let i = 0; i < taula.length; i++){
//     console.log(taula[i])
// }

// //21.8.- Fes un programa que escrigui a la consola la suma tots els valors emmagatzemats a la taula.

// let taula = [23,45,63,78,23,68,3,78,32,53,93,21,53,5,62,78];
// let suma = 0;
// for (let i = 0; i < taula.length; i++){
//     suma += taula[i]
// }
// console.log(suma)

// 21.9.- Fes un programa que crei una segona taula i emmagatzemi a ella tots els valors de la taula, tot sumant-los 25 (així les tres primeres posicions de la nova taula emmagatzemarien [48, 70, 88] Un cop fet haurà d’escriure la nova taula a la consola.

// let taula = [23,45,63,78,23,68,3,78,32,53,93,21,53,5,62,78];
// let taula2 = [];
// for (let i = 0; i < taula.length; i++){
//     taula2[i] = taula[i] + 25;
// }
// console.log(taula2);

// 21.10.- Fes un programa que calculi la mitjana dels valors emmagatzemats a la taula i l’escrigui a la consola (la mitjana es calcula sumant tots els valors i dividint pel nombre de valors).

// let taula = [23,45,63,78,23,68,3,78,32,53,93,21,53,5,62,78];
// let suma = 0;
// for (let i = 0; i < taula.length; i++){
//     suma += taula[i]
//     let mitjana = suma / taula.length
//     console.log(mitjana)
// }

// 21.11.- Fes un programa que calculi i escrigui a la consola els valors més gran i més petit de la taula. 

// let taula = [23,45,63,78,23,68,3,78,32,53,93,21,53,5,62,78];
// let max = taula[0];
// let min = taula[0];

// for (let i = 1; i < taula.length; i++) {
//     if (taula[i] > max) {
//         max = taula[i];
//     }
//     if (taula[i] < min) {
//         min = taula[i];
//     }
// }
// console.log("Valor més gran: " + max);
// console.log("Valor més petit: " + min);

//21.12.- Fes un programa que crei una nova taula on s’emmagatzemin només els valors parells de la taula i que escrigui el contingut d’aquesta nova taula a la consola. 

// let taula = [23,45,63,78,23,68,3,78,32,53,93,21,53,5,62,78];
// let taulaParells = [];

// for (let i = 0; i < taula.length; i++) {
//     if (taula[i] % 2 === 0) {
//         taulaParells.push(taula[i]);
//     }
// }
// console.log(taulaParells);

//21.13.- Fes un programa que demani a l’usuari un valor (fent servir prompt()) i escrigui a la consola quants cops apareix aquest valor a la taula. 

// let numero = number(prompt("Introdueix un número"));
// let taula = [23,45,63,78,23,68,3,78,32,53,93,21,53,5,62,78];
// let comptador = 0;
// for (let i = 0; i < taula.length; i++) {
//     if (taula[i] === numero) {
//         comptador++;
//     }
// }
// console.log("El valor " + numero + " apareix " + comptador + " cops a la taula.");   

// 21.14.- Fes un programa que, donats dos arrays de números, comprovi si tots dos tenen el mateix número d’elements i, si és així, crei una nova taula que contingui la suma de cada element que es trobi a la mateixa posició als dos arrys.

// let taula1 = [1, 2, 3, 4, 5];
// let taula2 = [6, 7, 8, 9, 10];
// let taulaSuma = [];
// if (taula1.length === taula2.length) {
//     for (let i = 0; i < taula1.length; i++) {
//         taulaSuma[i] = taula1[i] + taula2[i];
//     }
//     console.log(taulaSuma);
// } else {
//     console.log("Els arrays no tenen el mateix número d'elements.");
// }

// 21.15.- Fes un programa que, donats una taula amb números, guardi a una nova taula els valors de la primera però donant-li la volta. 

// let taula = [1, 2, 3, 4, 5];
// let taulaInvertida = [];
// for (let i = 0; i < taula.length; i++) {
//     taulaInvertida[i] = taula[taula.length - 1 - i];
// }
// console.log(taulaInvertida);

// 21.6 Fes un programa que demani un número a l’usuari (fent servir prompt()) i escrigui a la consola si es troba o no a la taula. IMPORTANT: Fes-lo fent servir un while de manera que si es troba l’element, s’acabi el bucle.

// let numero = Number(prompt("Introdueix un número"));
// let taula = [23, 45, 63, 78, 23, 68, 3, 78, 32, 53, 93, 21, 53, 5, 62, 78];
// let i = 0;
// let trobat = false;
// while (i < taula.length && !trobat) {
//     if (taula[i] === numero) {
//         trobat = true;
//     }
//     i++;
// }
// if (trobat) {
//     console.log("El número " + numero + " es troba a la taula.");
// } else {
//     console.log("El número " + numero + " no es troba a la taula.");
// }   

// 21.17.- Fes un programa que demani un número a l’usuari (fent servir prompt()) i escrigui a la consola si hi ha algun valor més gran a la taula. IMPORTANT: Fes-lo fent servir un while de manera que si es troba que hi ha un element més gran, s’acabi el bucle.

// let numero = Number(prompt("Introdueix un número"));
// let taula = [23, 45, 63, 78, 23, 68, 3, 78, 32, 53, 93, 21, 53, 5, 62, 78];
// let i = 0;
// let trobat = false;
// while (i < taula.length && !trobat) {
//     if (taula[i] > numero) {
//         trobat = true;
//     }
//     i++;
// }
// if (trobat) {
//     console.log("Hi ha algun valor més gran que " + numero + " a la taula.");
// } else {
//     console.log("No hi ha cap valor més gran que " + numero + " a la taula.");
// }   

// 21.19.- Fes un programa que donades dues taules de la mateixa mida, crei una nova taula amb la unió de les dues taules de manera alterna. Per exemple: [1,2,3] unió [4,5,6] → [1,4,2,5,3,6]

// let taula1 = [1, 2, 3];
// let taula2 = [4, 5, 6];
// let taulaUnida = [];
// for (let i = 0; i < taula1.length; i++) {
//     taulaUnida.push(taula1[i]);
//     taulaUnida.push(taula2[i]);
// }
// console.log(taulaUnida);    

// 21.20.- Fes un programa que, donada una taula i un valor, crei una nova taula sense el valor proporcionat.

// let taula = [1, 2, 3, 4, 5];
// let valor = Number(prompt("Introdueix un valor a eliminar de la taula"));
// let taulaFiltrada = [];
// for (let i = 0; i < taula.length; i++) {
//     if (taula[i] !== valor) {
//         taulaFiltrada.push(taula[i]);
//     }
// }
// console.log(taulaFiltrada);  

// 21.21.- Fes un programa que, donada una taula i una posició, guardi a una altra taula la taula inicial, però des de la posició donada fins al final. Per exemple [1,2,3,5,6,7,8,9,0] i 4 → [6,7,8,9,0]

// let taula = [1, 2, 3, 5, 6, 7, 8, 9, 0];
// let posicio = Number(prompt("Introdueix una posició"));
// let taulaResultat = [];
// for (let i = posicio; i < taula.length; i++) {
//     taulaResultat.push(taula[i]);
// }
// console.log(taulaResultat);  

// 21.22.- Fes un programa que, donada una taula escrigui a la pantalla el primer número que estigui repetit.

// let taula = [1, 2, 3, 4, 5, 3, 6, 7, 8, 9];
// let trobat = false;
// for (let i = 0; i < taula.length && !trobat; i++) {
//     for (let j = i + 1; j < taula.length && !trobat; j++) {
//         if (taula[i] === taula[j]) {
//             console.log("El primer número repetit és: " + taula[i]);
//             trobat = true;
//         }
//     }
// }
// if (!trobat) {
//     console.log("No hi ha números repetits a la taula.");
// }   

//Exercici amb objectes
// Tenim aquesta definició de l’objecte cotxe i dues variables:
// function Auto(marca, modelo, potencia, antiguedad , precio) {
//  this.marca = marca;
//  this.modelo = modelo;
//  this.potencia = potencia;
//  this.antiguedad = antiguedad;
//  this.precio = precio;
// }
// let miAuto = new Auto("Seat","Ibiza",90,2010,5000);
// let otroAuto = new Auto("Opel","Astra",92,1995,500);
// 21.23.- Fes un programa que et digui el model i la marca del vehicle més antic.

// let miAuto = new Auto("Seat","Ibiza",90,2010,5000);
// let otroAuto = new Auto("Opel","Astra",92,1995,500);

// if (miAuto.antiguedad < otroAuto.antiguedad) {
//     console.log("El vehicle més antic és: " + miAuto.marca + " " + miAuto.modelo);
// } else if (miAuto.antiguedad > otroAuto.antiguedad) {
//     console.log("El vehicle més antic és: " + otroAuto.marca + " " + otroAuto.modelo);
// } else {
//     console.log("Els dos vehicles tenen la mateixa antiguitat.");
// }   