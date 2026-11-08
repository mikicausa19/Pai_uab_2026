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


