/*
1.1. - Digues quins d'aquests noms de variables són correctes i quins no. 
*/

//1. variAble (correcte)
//2. Variable (correcte)
//3. vari-able (incorrecte)
//4. vari_able (correcte)
//5. _variable (correcte)
//6. vari.able (incorrecte)
//7. vari4able (correcte)
//8. 4variable (incorrecte)
//9. variable4 (correcte)
//10.variable_4 (correcte)
//11.LaMevaVariable (correcte)

/*
1.2. - Volem guardar a una variable el nom d'un empleat. Quin d'aquests noms de variable
seria el més addient?
*/

//1. nomempleat 
//2. Nomempleat
//3. NomEmpleat
//4. nomEmpleat (la més addient és la quatre)
//5. Nom_empleat
//6. _NomEmpleat
//7. nomEmpleat0
//8. nom_empleat (la segona millor)
//9. nom0empleat
//10.Nom empleat

/*
2.1.- Què passaria si féssim aquestes declaracions de variables?
Pensa primer que creus que passaria. Després pots provar a executar aquestes instruccions
i veure que passa (si passa alguna cosa).
*/

//a.
//var a = 1;
//var a = 2;
//console.log(a); // surt un 2 ja que la variable a s'ha declarat dues vegades i l'ultim valor assignat és 2. 

//b.-
//var a = 1;
//let a = 2;
//console.log(a); //surt un error ja que no es pot declarar un a variable amb el mateix nom utlitzant let després d'haver-la declarat amb var.  

//c.-
//let a = 1;
//var a = 2; 
//console.log(a)//surt un error ja que no es pot declarar un a variable amb el mateix nom utlitzant var després d'haver-la declarat amb let.

//d.-
//let a = 1;
//let a = 2;
//console.log(a); //surt un error ja que no es pot declarar un a variable amb el mateix nom utlitzant let després d'haver-la declarat amb let.

//3.1.- Quines d'aquestes assignacions són correctes i quines no? Tracta cada assignació com si fos independent.
//let a = 5; (correcte)
//let b = 5z; (incorrecte)
//let c = "c";(correcte)
//let c = "c'; (incorrecte)
//let c = "c'c'c"; (correcte)
//let c = "c'c"c'; (Incorrecte)
//let n = 35; (correcte)
//let n = 35va; (incorrecte)

//3.2.-Tenim un programa que té les assignacions que tenim a continuació. Hi ha, però, una línia errònia. Quina és? Escriu en un paper quina creus que és i desprès executa el codi. Fixa't en l'error que et dona el navegador.

//let a = 5;
//let b = c;
//c = 7; // en el programa ens surt que no troba la variable c, ja que no l'hem declarat abans d'assignar-li un valor. Per tant, la línia errònia és la segona. 

//3.3.-De quins tipus són les dades que assignem a aquestes variables?
//let a = 55; (Numèriques)
//let b = 55.5; (Numèriques)
//let c = "Hola"; (cadena de caracters)
//let d = 'Hola'; (cadena de caracters)
//let e = true; (logic)

//4.1.-Quins valors s'escriuran a la consola després d'executar aquest codi?
//let a = 25;
//let b = 15 + a;
//let c = b * 2;
//console.log(a,b,c); //la consola mostra 25, 40, 80, ya que ens ha fet la operació de suma i multiplicació amb les varibales a i b. 

//4.2.- Quins valors s'escriuran a la consola després d'executar aquest codi?

// let a = 10;
// let b = 20;
// let c = 5;
// a = a + 3;
// b = b + 4 - a;
// c = a + b + c;
// a = a + c;
// b = 4;
// c = c + 3 - b + 2;
// console.log(a,b,c); 
// La consola mostra 58, 4, 56, ja que ens ha fet les operacions amb les variables a, b i c.

// 4.3.- Quins valors s'escriuran a la consola després d'executar aquest codi?
// Escriu-los en un paper i desprès executa el codi. Et donen el mateix?
// let a = 5;
// let b = 18;
// let c = 15;
// let d = 22;
// a = a + 10;
// b = b + 5 - c;
// c = c + 4 + b;
// d = d + b + a;
// a = a + 1;
// b = b + c;
// c = b + c;
// d = b + b;
// console.log(a,b,c,d);
// La consola mostra 16, 8, 27, 16, ja que ens ha fet les operacions amb les variables a, b, c i d.

// 4.4.- Quins valors s’escriuran a la consola si executem aquest programa? Fes-ho primer
// sobre paper i desprès prova a l’ordinador.
// let a = 10
// let b = 20
// let c = 5
// a = a + 3 // Fixat en aquesta instrucció.
// // Quin valor tenia la variable a abans d’executar-se la instrucció? Abans tenia el valor 10.
// // I desprès? desprès de executar-se la instrucció, la variable a té el valor 13.
// console.log(a);
// b = b + 4 – a
// console.log(b);
// c = a + b + c
// console.log(c);
// a = a + c
// console.log(a);
// b = 4
// console.log(b);
// c = c + 3 - b + 2
// console.log(c);
// La consola mostra 13, 11, 29, 42, 4, 30, ja que ens ha fet les operacions amb les variables a, b i c.

// 4.5. - Quins valors s’escriuran a la consola si executem aquest programa? Fes-ho primer
// sobre paper i desprès prova a l’ordinador.
// let a = 5;
// let b = 18;
// let c = 15;
// let d = 22;
// a = a + 10;
// b = b + 5 - c;
// c = c + 4 + b;
// d = d + b + a;
// console.log(a,b,c,d);
// La consola mostra 15, 8, 27, 45, ja que ens ha fet les operacions amb les variables a, b, c i d.
// a = a + 1;
// b = b + c;
// c = b + c;
// d = b + b;
// console.log(a,b,c,d);
// La consola mostra 16, 35, 62, 16, ja que ens ha fet les operacions amb les variables a, b, c i d.

// 4.6. - Quins valors s’escriuran a la consola si executem aquest programa?
// let a = 10;
// let b = 5;
// let c = a / b;
// let d = a * b;
// let e = a % 3;
// console.log (c,d,e);
// La consola mostra 2, 50, 1, ja que ens ha fet les operacions amb les variables a i b.

// 4.7.- Quins valors s’escriuran a la consola si executem aquest programa?
// let a = 10;
// let b = 5;
// let c = a * b * 3;
// let d = a / 3;
// console.log(c,d);
// La consola mostra 150, 3.3333333333333335, ja que ens ha fet les operacions amb les variables a i b.

// Operadors unaris
// 5.1.- Què s’escriurà a la consola si executem aquest codi?
// let a = 5;
// a++;
// console.log(a);
// let b = a++;
// console.log(a,b);
// La consola mostra 6, 7, 6, ja que ens ha fet les operacions amb la variable a.

// 5.2.- Què s’escriurà a la consola si executem aquest codi?
// let a = 5;
// ++a;
// console.log(a);
// let b = ++a;
// console.log(a,b);
// La consola mostra 6, 7, 7, ja que ens ha fet les operacions amb la variable a.

// 5.3.- Observa aquestes operacions, prova a executar-les i explica el perquè dels resultats obtinguts.
// let a = 5;
// let b = a++;
// let c = a--;
// console.log(a,b,c);
// a = 5;
// b = ++a;
// c = --a;
// console.log(a,b,c);
// a = 5;
// let d = 25 + a++;
// a = 5;
// let e = 25 + ++a;
// console.log(d,e);

// La consola mostra 5, 6, 6, 6, 6, 5, 30, 31, ja que ens ha fet les operacions amb la variable a. En el primer cas, b s'assigna el valor de a abans d'incrementar-lo i c s'assigna el valor de a després de decrementar-lo. En el segon cas, b s'assigna el valor de a després d'incrementar-lo i c s'assigna el valor de a abans de decrementar-lo. En el tercer cas, d s'assigna el valor de 25 més el valor de a abans d'incrementar-lo i e s'assigna el valor de 25 més el valor de a després d'incrementar-lo.

//Assignacions compostes (no explicat a classe)
// 6.1.- Què s’escriurà a la consola si executes aquest codi?
// let a = 10;
// a += 5;
// console.log(a);
// a *= 5;
// console.log(a);
// a -= 5;
// console.log(a);
// a /= 5;
// console.log(a);
// La consola mostra 15, 75, 70, 14, ja que ens ha fet les operacions amb la variable a. En el primer cas, a s'incrementa en 5, en el segon cas, a es multiplica per 5, en el tercer cas, a es decrementa en 5 i en el quart cas, a es divideix per 5.

// //Cadenes de caràcters
// 7.1.- Quines d’aquestes assignacions de cadenes de caràcters són incorrectes?
// let a = "Hola";
// let b = 'Hola';
// let c = 'Hola";
// let d = "Hola 'gramola'";
// let e = 'Hola "gramola'";
// La assignació c és incorrecta ja que les cometes no estan tancades correctament. La assignació e també és incorrecta ja que les cometes no estan tancades correctament. Les altres assignacions són correctes.

// 7.2.- Què s’escriurà a la consola si executes aquest codi?
// let a = "Hola";
// let b = "Adéu";
// console.log (a+b);
// let c = a + 2;
// console.log (c);
// La consola mostra HolaAdéu, Hola2, ja que ens ha fet les operacions amb les variables a i b. En el primer cas, s'ha concatenat les dues cadenes de caràcters i en el segon cas, s'ha concatenat la cadena de caràcters amb el número 2.

//Comparacions
// 8.1.- Què s’escriurà a la consola si executes aquest codi?
// let a = 5, b = 7;
// let c = 5,d = "5";
// let e1 = a == b;
// let e2 = c == d;
// let e3 = c === d;
// console.log(e1,e2,e3);
// La consola mostra false, true, false, ja que ens ha fet les comparacions amb les variables a, b, c i d. En el primer cas, a no és igual a b, en el segon cas, c és igual a d ja que es fa una conversió de tipus implícita i en el tercer cas, c no és estrictament igual a d ja que són de tipus diferent.

// 8.2.- Què s’escriurà a la consola si executes aquest codi?
// let a = true;
// let b = false;
// let c1 = true === false;
// let c2 = true == 1;
// let c3 = true === 1;
// console.log(c1,c2,c3);
// La consola mostra false, true, false, ja que ens ha fet les comparacions amb les variables a i b. En el primer cas, true no és estrictament igual a false, en el segon cas, true és igual a 1 ja que es fa una conversió de tipus implícita i en el tercer cas, true no és estrictament igual a 1 ja que són de tipus diferent.

//8.3.- Què s’escriurà a la consola si executes aquest codi?
// let a = 10;
// let b = 20;
// console.log (a > b, a < b);
// La consola mostra false, true, ja que ens ha fet les comparacions amb les variables a i b. En el primer cas, a no és major que b i en el segon cas, a és menor que b.

// 8.4.- Què s’escriurà a la consola si executes aquest codi?
// let a = "Hola";
// let b = "hola";
// let c = "Adéu";
// let d1 = a === b;
// let d2 = a < b;
// let d3 = a < c;
// console.log (d1,d2,d3);
// La consola mostra false, true, false, ja que ens ha fet les comparacions amb les variables a, b i c. En el primer cas, a no és estrictament igual a b ja que són de tipus diferent, en el segon cas, a és menor que b ja que la lletra "H" és menor que la lletra "h" i en el tercer cas, a no és menor que c ja que la lletra "H" és major que la lletra "A".

// 8.5.- Què s’escriurà a la consola si executes aquest codi? Per què?
// let a = 9;
// let b = 7;
// let c = 3;
// let d = a < b < c;
// console.log(d);
// Igual això t’ajuda a explicar-lo
// console.log (true == 1);
// console.log (false == 0);
// La consola mostra true, ja que ens ha fet les comparacions amb les variables a, b i c. En el primer cas, a no és menor que b, per tant, la comparació retorna false. En el segon cas, false és menor que c, per tant, la comparació retorna true.

// Operadors lògics
// 9.1.- Quins valors escriuran a la consola aquestes expressions? Explica el perquè.
// console.log(true && true);
// console.log(true && false);
// console.log(false && (3 == 4));
// console.log(false && true);
// console.log(false && false);
// La consola mostra true, false, false, false, false, ja que ens ha fet les operacions amb els valors lògics. En el primer cas, true i true és true, en el segon cas, true i false és false, en el tercer cas, false i (3 == 4) és false ja que 3 no és igual a 4, en el quart cas, false i true és false i en el cinquè cas, false i false és false.

//9.2.- Quins valors escriuran a la consola aquestes expressions? Explica el perquè.
// console.log(false || false);
// console.log(false || true);
// console.log(false || (3 == 4));
// console.log(true || true);
// console.log(true || false);
// La consola mostra false, true, false, true, true, ja que ens ha fet les operacions amb els valors lògics. En el primer cas, false o false és false, en el segon cas, false o true és true, en el tercer cas, false o (3 == 4) és false ja que 3 no és igual a 4, en el quart cas, true o true és true i en el cinquè cas, true o false és true.

// Prioritat dels operadors
// 10.1.- Quins valors s’escriuran a la consola si executem aquest programa? Atenció a la
// prioritat de les operacions
// let a = 5;
// let b = 10;
// let c = 2;
// a = a + b * c; // Pensa bé quin hauria de ser el resultat d’aquesta operació. 30? o 25? El resultat és 25 ja que la multiplicació té més prioritat que la suma. 
// console.log(a);
// let r = a % b + 1; // Quina operació és %?
// let d = c + a / b;
// console.log(d,r);
// La consola mostra 25, 3, 2.5, ja que ens ha fet les operacions amb les variables a, b i c. En el primer cas, a s'incrementa en b multiplicat per c, en el segon cas, r s'assigna el valor de a mòdul b més 1 i en el tercer cas, d s'assigna el valor de c més a dividit per b. L'operació % és l'operador de mòdul que retorna el residu de la divisió entre dos nombres.


// 10.2.- Quins valors s’escriuran a la consola si executem aquest programa?
// let a = 5;
// let b = 6;
// let c = 2;
// let d1 = a + b * c;
// let d2 = (a + b) * c;
// let d3 = a - b * c + a / c + 6 % 5;
// console.log (d1,d2,d3);
// La consola mostra 17, 22, -1.5, ja que ens ha fet les operacions amb les variables a, b i c. En el primer cas, d1 s'assigna el valor de a més b multiplicat per c, en el segon cas, d2 s'assigna el valor de (a més b) multiplicat per c i en el tercer cas, d3 s'assigna el valor de a menys b multiplicat per c més a dividit per c més 6 mòdul 5.

// 10.3.- Quins valors s’escriuran a la consola si executem aquest programa?
// let e1 = false && false || true;
// let e2 = false || false && true;
// console.log(e1,e2);
// La consola mostra true, false, ja que ens ha fet les operacions amb els valors lògics. En el primer cas, false i false és false, per tant, la comparació retorna true ja que false o true és true. En el segon cas, false o false és false, per tant, la comparació retorna false ja que false i true és false.

// 10.4.- Quins valors s’escriuran a la consola si executem aquest programa?
// És molt important que ho intentis fer a mà abans de provar-lo a l’ordinador.
// let a = 5;
// let b = 4;
// let e1 = a > b || a < b;
// let e2 = a > b && a < b;
// let e3 = e1 || e2;
// let e4 = a <= b + 1 && b - 1 * 5 < 0;
// // Atenció a la prioritat de les operacions!!!
// console.log (e1,e2,e3,e4);
// La consola mostra true, false, true, true, ja que ens ha fet les operacions amb les variables a i b. En el primer cas, a és major que b o a és menor que b, per tant, la comparació retorna true. En el segon cas, a és major que b i a és menor que b, per tant, la comparació retorna false. En el tercer cas, e1 és true o e2 és false, per tant, la comparació retorna true. En el quart cas, a és menor o igual que b més 1 i b menys 1 multiplicat per 5 és menor que 0, per tant, la comparació retorna true.

// L’operador interrogant
// 11.1.- Explica el que fa aquest programa.
// let a = prompt ("Introdueix un número");
// let b = (a>=18) ? "Ets major d’edat":"No ets major d’edat";
// console.log (b);
// Aquest programa demana a l'usuari que introdueixi un número i després comprova si aquest número és major o igual a 18. Si és així, assigna la cadena "Ets major d’edat" a la variable b, en cas contrari, assigna "No ets major d’edat". Finalment, mostra el valor de b a la consola.

// 11.2.- Escriu un programa que demani dos números (fent servir la instrucció prompt) i escrigui a la consola qual és el més gran. Fes servir l’operador interrogant (?)
// let num1 = parseFloat(prompt("Introdueix el primer número:"));
// let num2 = parseFloat(prompt("Introdueix el segon número:"));
// let max = (num1 > num2) ? num1 : num2;
// console.log("El número més gran és: " + max);    

// 11.3.- Escriu un programa que demani dues paraules (fent servir la instrucció prompt) i ens digui si les dues paraules són iguals.
// let paraula1 = prompt("Introdueix la primera paraula:");
// let paraula2 = prompt("Introdueix la segona paraula:");
// let iguals = (paraula1 === paraula2) ? "Les dues paraules són iguals" : "Les dues paraules són diferents";
// console.log(iguals);  

// Problemes
//12.1.- Fes un programa que, donat un número (que demanarem per pantalla fent servir prompt() escrigui a la consola el doble, el triple i el quadrat del número llegit. 
// let num = parseFloat(prompt("Introdueix un número:"));   
// console.log("El doble del número és: " + (num * 2));
// console.log("El triple del número és: " + (num * 3));
// console.log("El quadrat del número és: " + (num * num));

//12.2.- Fes un programa en JavaScript que calculi el perímetre i l’àrea d’un rectangle de 20 i 80 metres de costat. Modifica el programa perquè els valors dels costats es demanin amb prompt(). 
// let costat1 = parseFloat(prompt("Introdueix el primer costat:"));
// let costat2 = parseFloat(prompt("Introdueix el segon costat:"));
// let perimetre = 2 * (costat1 + costat2);
// let area = costat1 * costat2;
// console.log("El perímetre del rectangle és: " + perimetre);
// console.log("L'àrea del rectangle és: " + area); 

// 12.3.- Fes un programa que, donat el radi d’una circumferència, calculi, a una nova variable i escrigui a la consola, la longitud de la circumferència i l’àrea del cercle. Fes servir una constant per guardar el número pi (3,141593) a) Longitud de la circumferència: 2 * 3.1416 * ràdio b) Àrea del cercle: 3.1416 * radio^2 
// const pi = 3.141593;
// let radi = parseFloat(prompt("Introdueix el radi de la circumferència:"));
// let longitud = 2 * pi * radi;
// let area = pi * radi * radi;
// console.log("La longitud de la circumferència és: " + longitud);
// console.log("L'àrea del cercle és: " + area);    

// 12.4.- Escriu un programa en JavaScript que calculi el sou mensual a partir del nombre d’hores treballades (160 hores) i el preu per hora treballada (12€). Prova amb altres valors. 
// let hores = parseFloat(prompt("Introdueix el nombre d’hores treballades:"));
// let preuPerHora = parseFloat(prompt("Introdueix el preu per hora treballada:"));
// let souMensual = hores * preuPerHora;
// console.log("El sou mensual és: " + souMensual);

// 12.5.- Fes un programa en JavaScript que, donades dues variables x i y, intercanviï els seus valores de manera que x acabi tenint el valor de y i y acabi tenint el valor de x. Així, si inicialment tenim: let x = "Hola", y = 3; Quan el programa acabi, x haurà de guardar un 3 i y un “Hola”. 
// let x = "Hola";
// let y = 3;
// let temp = x;
// x = y;
// y = temp;
// console.log("x: " + x);
// console.log("y: " + y);

// 12.6.- Fes un programa que escrigui a la consola el cub d’un número llegit per teclat (amb el prompt()) 
// let num = parseFloat(prompt("Introdueix un número:"));
// console.log("El cub del número és: " + (num * num * num));

// 12.7.- Escriu un programa d’una sola línia que faci que aparegui a la pantalla un alert que digui “Hello World”. 
// alert("Hello World");

//12.8.- Escriu un programa de dues línies que demani el nom de l’usuari amb un prompt() iescrigui un text a la consola que digui “Hola nomUsuari”
// let nomUsuari = prompt("Introdueix el teu nom:");
// console.log("Hola " + nomUsuari);