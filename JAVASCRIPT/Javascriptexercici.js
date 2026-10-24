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

//3.2.-enim un programa que té les assignacions que tenim a continuació. Hi ha, però, una línia errònia. Quina és? Escriu en un paper quina creus que és i desprès executa el codi. Fixa't en l'error que et dona el navegador.

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
let a = 25;
let b = 15 + a;
let c = b * 2;
console.log(a,b,c);



