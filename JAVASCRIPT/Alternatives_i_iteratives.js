// Condicional simple: if 
// 13.1.- Escriu un programa que donat un número llegit amb prompt escrigui el missatge “el número llegit és negatiu” si el número és més petit que zero

// let numero = Number(prompt("intrdoueix un número: "));
// if (numero < 0){
//     console.log("el numero llegit és negatiu")
// }

// 13.2 13.2.- Escriu un programa que donat un número llegit amb prompt, escrigui el missatge “el número llegit és parell” si el número es parell.

// // let numero = Number(promtp("introdueix un número"));
// if (numero % 2 == 0){
//     console.log("el número llegit és parell")
// }

// 13.3 Escriu un programa que, donat un número llegit amb prompt, escrigui “el número llegit és parell” si el número es parell, o “el número llegit és senar”, si és senar. Fes servir un if per cada cas.

// let numero = number(prompt("introdueix un numero"));
// if (numero %2 == 0){
//     console.log("el numero és parell")
// } else{ 
//     console.log("el número llegit és senar")
// }

//13.4.- Escriu un programa que, donat dos números llegits amb prompt, escrigui a la consola el més gran de tots dos. Pista: fes servir dos if un per comprovar si el primer número és més gran que el segon i l’altre per comprovar si el segon número és més gran que el primer.

// let numero1 = number(prompt("introdueix un número"));
// let numero2 = number(prompt("Introdueix un número"));
// if (numero1>numero2){
//     console.log("El numero més gran és: " + numero1);
// if (numero2>numero1){
//     console.log("El numero més gran és: " + numero2)
// }
// }

// 13.5.- Escriu un programa que, donat tres número llegits amb prompt, escrigui a la consola el més gran dels tres. Pista: fes servir tres if cadascun d’ells per comprovar si un dels números és el més gran. 

// let numero1 = number(prompt("Introdueix un número"))
// let numero2 = number(prompt("Introdueix un número"))
// let numero3 = number(prompt("Introdueix un número"))

// if (numero1 > numero2 && numero1 > numero3);{
//     console.log("El numero més gran és:" + numero1)
// }
// if (numero2 > numero1 && numero2 > numero3);{
//     console.log("El número més gran és: " + numero2)
// }
// if (numero3 > numero1 && numero3 > numero2);{
//     console.log("El número més gran és " + numero3)
// }

// 13.6.- Fent servir només if, escriure un programa que donat amb prompt un número de mes, entre 1 i 12, escrigui per pantalla el nom del mes que correspon. 

// let numero = number(prompt("Introdueix un número"))
// let text;
// if (numero = 1 ){
//     text = "Gener"
// } 
// if (numero = 2){
//     text = "Febrer"
// }
// if (numero = 3){
//     text = "Març"
// }
// if (numero = 4){
//     text = "Abril"
// }
// if (numero = 5){
//     text = "Maig"
// }
// if (numero = 6){
//     text = "Juny"
// }
// if (numero = 7){
//     text = "Juliol"
// }
// if (numero = 8){
//     text = "Agost"
// }
// if (numero = 9){
//     text = "Septembre"
// }
// if (numero = 10){
//     text = "Octubre"
// }
// if (numero = 11){
//     text = "Novembre"
// }
// if (numero = 12){
//     text = "Decembre"
// } console.log(text) 

//Condicional doble: if - else
//14.1.- Escriu un programa que, donat un número llegit amb prompt, escrigui el missatge “elnúmero llegit és negatiu” si el número és més petit que zero i escrigui el missatge “el número llegit és positiu” en cas contrari. 

// let numero = number(prompt("Escriu un número"))
// if(numero < 0){
//     consol.log("el número és negatiu")
// }else{
//     consol.log("el número és positiu")
// }

//14.2.- Escriu un programa que donat un número llegit amb prompt, escrigui el missatge “el número llegit és parell” si el número es parell i “el número llegit es senar” en cas contrari.

// let numero = number(prompt("introdueix un número"))
// if(numero % 2 == 0){
//     console.log("el número és parell")
// }else{
//     console.log("el número és senar")
// }

//14.3.- Escriu un programa que, donat dos números llegits amb prompt, escrigui a la consola quin és el més gran. Només pots fer servir una instrucció if-else.

// let numero1 = number(prompt("Introdueix un número"))
// let numero2 = number(prompt("introdueix un número"))
// if (numero1 > numero2){
//     console.log("El número més gran: " + numero1)
// } else{
//     console.log("El número més gran és: " + numero2)
// }

//14.4.- Escriu un programa que, donat tres números llegits amb prompt, escrigui a la consola quin es el més gran. Pista. Comprova si el primer número llegit és el més gran. Si no és així, comprova si el més gran és el segon. Si tampoc ho és, el més gran, sens dubte, serà el tercer. 

// let numero1 = number(prompt("Introdueix un número"))
// let numero2 = number(prompt("Introdueix un número"))
// let numero3 = number(prompt("Introdueix un número"))

// if(numero1 > numero2 && numero1 > numero3){
//     console.log("El número més gran és: " + numero1)
// } else if(numero2 > numero1 && numero2 > numero3){
//     console.log("El número més gran és: " + numero2)
// }else{
//     console.log("El número més gran és: " + numero3)
// }

//14.5.- Escriu un programa que, donats tres números llegits amb prompt, escrigui a la consola els tres números ordenats.

// let numero1 = number(prompt("Introdueix un número"))
// let numero2 = number(prompt("Introdueix un número"))
// let numero3 = number(prompt("Introdueix un número"))

// if(numero1 > numero2 && numero1 > numero3){
//     if(numero2 > numero3){
//         console.log(numero1 + " " + numero2 + " " + numero3)
//     }
// } 

//14.6.- En un control d’alcoholèmia necessiten un programa que els hi digui si una persona pot conduir o no. El programa demanarà dues dades: Si la persona té carnet de conduir i el  valor que ha sortit a la prova d’alcoholèmia. El programa ha de respondre que sí pot conduir si té carnet de conduir i la prova d’alcoholèmia ha donat un valor inferior a 0.25

// let teCarnet = confirm("Tens carnet de conduir?")
// let valorAlcohol = number(prompt("Quin és el valor de la prova d'alcoholèmia?"))
// if(teCarnet && valorAlcohol < 0.25){
//     console.log("Sí pots conduir")
// } else{
//     console.log("No pots conduir")
// }

//13.7.- Escriu un programa que, donat dos números llegits amb prompt, escrigui a la consola el resultat de restar al nombre més gran el nombre més petit. 

// let numero1 = number(prompt("Introdueix un número"))
// let numero2 = number(prompt("introdueix un número"))
// if (numero1 > numero2){
//     console.log("La resta és: " + (numero1 - numero2))
// }else{
//     console.log("L resta és: " + (numero2 - numero1))
// }

//14.8.- Escriu un programa que simuli la compra a una web. L’usuari haurà d’introduir una quantitat (el que cal pagar) per teclat fent servir la instrucció prompt.
// En cas que la quantitat sigui 30€ o més, es mostrarà a la consola un missatge indicant que
// el cost total és de 30€ donat que el transport és gratis.
// En cas que la quantitat sigui inferior a 30€, es mostrarà un missatge dient el preu total que
// consistirà en l’introduït més 4.95€ en concepte de cost d’enviament

// let quantitat = number(prompt("Introdueix un número"))
// if(quantitat => 30){
//     console.log("El cost total és 30€ i transport gratis")
// }else{
//     console.log("El cost total és: " + (quantitat + 4.95))
// }

//14.9.- Un usuari va a una gelateria i per calcular el cost del seu gelat té un ordinador on posa dues dades:
// 1. Si vol un conus (c) o una terrina (t). El conus té un cost base de 3.45 i la terrina de
// 3.95
// 2. Quin d’aquests sabors vol:
// 1. Vainilla o Xocolata. No cal afegir res
// 2. Turró, Menta o Oreo. Caldrà afegir 0.5 al preu final.
// 3. Crema, Gerds o Ametlles. Caldrà afegir 1 al preu final.
// Si l’usuari posa alguna dada malament, el missatge que es posarà a la consola serà “Error
// dades mal introduïdes”
// Si totes les dades són correctes, escriurà el preu final.

// let conus = 3.45
// let terrina = 3.95
// text;
// if (text = "Vainilla" || "Xocolata"){
//     console.log("Conus 3.45 i terrina 3.95")
// }
// if(text = "Turró" || "Menta" || "Oreo"){
//     console.log("Preu terrina: " + (terrina + 0.5) && "Preu conus: " + (conus + 0.5))
// }
// if(text = "Crema" || "Gerds" || "Ametlles"){
//     console.log("Preu terrina: " + (terrina + 1) && "Preu conus: " + (conus + 1))
// }else{
//     console.log("Error dades mal introduides")
// }

//Condicional múltiple: switch
//15.1.- Fent servir la instrucció switch escriu un programa que donat amb prompt un número de mes, entre 1 i 12, escrigui per pantalla el nom del mes que correspon.

// let numero = number(prompt("Introdueix un número"))
// switch(numero){
//     case 1:
//         console.log("Gener")
//         break
//     case 2:
//         console.log("Febrer")
//         break
//     case 3:
//         console.log("Març")
//         break
//     case 4:
//         console.log("Abril")
//         break
//     case 5:
//         console.log("Maig")
//         break
//     case 6:
//         console.log("Juny")
//         break
//     case 7:
//         console.log("Juliol")
//         break
//     case 8:
//         console.log("Agost")
//         break
//     case 9:
//         console.log("Setembre")
//         break
//     case 10:
//         console.log("Octubre")
//         break
//     case 11:
//         console.log("Novembre")
//         break
//     case 12:
//         console.log("Desembre")
//         break
//     default:
//         console.log("Número de mes no vàlid")
// }

// 