// tienenMismaLongitud(a, b)✅
// Crear una función tienenMismaLongitud que tome como argumentos dos strings a y b y devuelva true si tienen la misma longitud o false de lo contrario

// tienenMismaLongitud('javascript', 'java') // false
// tienenMismaLongitud('manzana', 'cerveza') // true

// let tienenMismaLongitud = (a , b) => a.length === b.length;


// console.log(tienenMismaLongitud('javascript', 'java'));
// console.log(tienenMismaLongitud('manzana', 'cerveza'));


// esUltimoCaracter(palabra, caracter)✅
// Crear una función esUltimoCaracter que tome como argumentos una palabra y un caracter y devuelva true si la palabra termina con el caracter o false de lo contrario

// esUltimoCaracter('lovelace', 'e') // true
// esUltimoCaracter('lovelace', 'f') // false

// let esUltimoCaracter = (palabra, caracter)=> palabra.charAt(palabra.length -1) == caracter;


// console.log(esUltimoCaracter('lovelace', 'e'));
// console.log(esUltimoCaracter('lovelace', 'f'));


// esContraseniaValida(contrasenia)✅
// Crear una función esValida que tome como argumento una contrasenia (string) y devuelva true si tiene 8 caracteres o más o false si tienen menos de 8 caracteres

// esValida('contraseniaMuySegura') // true
// esValida('abc123') // false


// let esValida = (string)=>{
//     return string.length >= 8;
        
//  }
// console.log(esValida('contraseniaMuySegura'));
// console.log(esValida('abc123'));


// sonIguales(a, b)✅
// Crear una función sonIguales que tome como argumentos dos strings a y b y devuelva true si ambos strings tienen el mismo contenido independientes del caso y false en caso contrario.

// sonIguales('javascript', 'JavaScript') // true
// sonIguales('AdA LoVeLaCe', 'Ada Lovelace') // true
// sonIguales('NO ESTOY GRITANDO', 'ESTOY GRITANDO') // false

//let sonIguales = (a, b)=> a.toUpperCase() === b.toUpperCase();


// console.log(sonIguales('javascript', 'JavaScript'));
// console.log(sonIguales('AdA LoVeLaCe', 'Ada Lovelace'));
// console.log(sonIguales('NO ESTOY GRITANDO', 'ESTOY GRITANDO'));

// contarPalabras(str)✅
// Crear una función contarPalabras que tome como argumento un string str y devuelva la cantidad de palabras que posee

// contarPalabras('javascript') // 1
// contarPalabras('ada lovelace') // 2
// contarPalabras('si debuggear es el proceso de remover bugs, programar es el proceso de agregarlos') // 14


//let contarPalabras = (str)=> str.split(' ').length;


// console.log(contarPalabras('javascript'));
// console.log(contarPalabras('ada lovelace'));
// console.log(contarPalabras('si debuggear es el proceso de remover bugs, programar es el proceso de agregarlos'));


// burlarse(str)✅
// Crear una función burlarse que tome como argumento un string str y devuelva el mismo string con todas las vocales reemplazadas por la letra i

// burlarse('programar es dificil') // 'prigimir is dificil'

// let burlarse = (string)=>{
//     let reemplazar = [["a", "i"],["e", "i"],["o", "i"],["u", "i"]];


//    for(let i=0; i<reemplazar.length;i++){

//     if(string.includes(reemplazar[i][0])) {
//         string = string.replaceAll(reemplazar[i][0],reemplazar[i][1]);
//     }

//    }

//    return string
//    }

// console.log(burlarse('programar es dificil'));



// esFraccionMayorAUno(fraccion)✅
// Crear una función esFraccionMayorAUno que tome como argumento un string fraccion (en el formato 'numerador/denominador') y devuelva true si dicha fracción es mayor a 1 o false de lo contrario

// esFraccionMayorAUno('1/2') // false
// esFraccionMayorAUno('2/2') // false
// esFraccionMayorAUno('4/2') // true


// let esFraccionMayorAUno = (fraccion)=>{
//     let numeroUno = Number(fraccion.slice(0,1))
//     let numeroDos = Number(fraccion.slice(2,3))
  
//     return numeroUno / numeroDos > 1
  
//   }
  

// console.log(esFraccionMayorAUno('1/2'));
// console.log(esFraccionMayorAUno('2/2'));
// console.log(esFraccionMayorAUno('4/2'));


// capitalizar(str)✅
// Crear una función capitalizar que tome como argumento un string str y devuelva el mismo string con la primera letra en mayúscula

// capitalizar('lovelace') // 'Lovelace'
// capitalizar('había una vez...') // 'Había una vez...'


//let capitalizar=(string)=> string.replace(string.charAt(0),string.charAt(0).toUpperCase());
// console.log(capitalizar('lovelace'));
// console.log(capitalizar('había una vez...'));




// aHackerSpeak(str) ✅
// Crear una función aHackerSpeak que tome como argumento un string str y el mismo string convertido a H4CK3R 5P3AK, siguiendo las siguientes reglas:

// - Las i se transforman en 1
// - Las e se transforman en 3
// - Las a se transforman en 4
// - Las s se transforman en 5
// - Las 0 se transforman en 0
// aHackerSpeak('javascript') // 'j4v45cr1pt'
// aHackerSpeak('soy una hacker') // '50y un4 h4ck3r'
// aHackerSpeak('ADA LOVELACE') // '4D4 L0V3L4C3'

// let aHackerSpeak =(str)=>{
// let encriptacion = [['i',1], ['e',3], ['a',4], ['s',5], ['o',0]];
// let strMinuscula = str.toLowerCase();

//     for(let i=0; i< encriptacion.length; i++){
//         if (strMinuscula.includes(encriptacion[i][0])){
//            strMinuscula = strMinuscula.replaceAll(encriptacion[i][0], encriptacion[i][1]);
//         }

//     }
//     return strMinuscula;

// }

// console.log(aHackerSpeak('javascript'));
// console.log(aHackerSpeak('soy una hacker'));
// console.log(aHackerSpeak('ADA LOVELACE'));


///////  ************* OTRA SOLUCIÓN 

// let aHackerSpeak =(str)=>{
//     let encriptacion = [['i',1], ['e',3], ['a',4], ['s',5], ['o',0], ['I',1], ['E',3], ['A',4], ['S',5], ['O',0]];
    
//         for(i=0; i< encriptacion.length; i++){
//             if (str.includes(encriptacion[i][0])){
//                str = str.replaceAll(encriptacion[i][0], encriptacion[i][1]);
//             }
    
//         }
//         return str;
    
//     }

// console.log(aHackerSpeak('javascript'));
// console.log(aHackerSpeak('soy una hacker'));
// console.log(aHackerSpeak('ADA LOVELACE'));



// obtenerPrimeraOracion(str)✅
// Crear una función obtenerPrimeraOracion que tome como argumento un string str y la primera oración de dicho string

// obtenerPrimeraOracion('A mí no me preguntes, sólo soy una oración.') // 'A mí no me preguntes, sólo soy una oración'
// obtenerPrimeraOracion('Tengo varias oraciones. Esta es la segunda. Y esta es la tercera.') // 'Tengo varias oraciones.'

// let obtenerPrimeraOracion = (str)=>{
//     let separarOracion = str.split('.');
    
//     return separarOracion[0];
//     }

// console.log(obtenerPrimeraOracion('A mí no me preguntes, sólo soy una oración.'));
// console.log(obtenerPrimeraOracion('Tengo varias oraciones. Esta es la segunda. Y esta es la tercera.'));










// ocultarContrasenia(contrasenia)❌
// Crear una función ocultarContraseña que tome como argumento una contrasenia de solo numeros y devuelva un string con dicha contraseña ocultada con astericos *, es decir, un string con la misma longitud donde todos sus caracteres son astericos

// ocultarContrasenia(123456) // '******'
// ocultarContrasenia(111222333) // '*********'


// let ocultarContrasenia =(contrasenia)=>{
//     // let asteriscos = [[0, '*'], [1, '*'],[2, '*'],[3, '*'],[4, '*'],[5, '*'],[6, '*'],[7, '*'],[8, '*'],[9, '*']];

//     let asteriscos = [0,1,2,3,4,5,6,7,8,9];

//    for (i=0; i<asteriscos.length; i++){
        
//     let caracterActual = asteriscos[i]
        
//     if(contrasenia.includes(caracterActual)){
//             contrasenia = contrasenia.replaceAll(caracterActual,'*');
//     }
    
     
//     }
//     return contrasenia;

// }

// console.log(ocultarContrasenia(123456));
// console.log(ocultarContrasenia(111222333));




// espaciarCaracteres(str)✅
// Crear una función espaciarCaracteres que tome como argumento un string str y devuelva un string con todos sus caracteres separados por un espacio

// espaciarCaracteres('javascript') // 'j a v a s c r i p t'
// espaciarCaracteres('ada lovelace') // 'a d a l o v e l a c e'


// let espaciarCaracteres = (str)=>{
//     let stringAseparar = str.split('');
//     let stringConEspacios = stringAseparar.join(' ');
//     return stringConEspacios
// }

// console.log(espaciarCaracteres('javascript'));
// console.log(espaciarCaracteres('ada lovelace'));



// removerVocales(str)✅
// Crear una función removerVocales que tome como argumento un string str y devuelva un string con todas sus vocales removidas

// removerVocales('javascript') // 'jvscrpt'
// removerVocales('ada lovelace') // 'd lvlc'


// let removerVocales = (string)=>{
//     let reemplazar = [['a',''], ['e',''], ['i',''], ['o',''], ['u','']];

//     for ( i=0; i<reemplazar.length; i++){
//       if (string.includes(reemplazar[i][0])){
//         string = string.replaceAll(reemplazar[i][0],reemplazar[i][1])
//        }
//     }
// return string
// }

// console.log(removerVocales('javascript'));
// console.log(removerVocales('ada lovelace'));





// obtenerExtension(archivo)✅
// Crear una función obtenerExtension que tome como argumento un string archivo con el formato 'nombre.extension' y devuelva la extensión del archivo

// obtenerExtension('imagen.png') // 'png'
// obtenerExtension('index.html') // 'html'
// obtenerExtension('notas.txt') // 'txt'

// let obtenerExtension = (archivo)=>{
//     let extension = archivo.split('.');
  
 
//     return extension[1];
 
 
//  }

// console.log(obtenerExtension('imagen.png'));
// console.log(obtenerExtension('index.html'));
// console.log(obtenerExtension('notas.txt'));








// esPuenteSeguro(puente)✅
// Crear una función esPuenteSeguro que tome como string un puente que consista en caracteres numerales y espacios y devuelva true si el puente está cortado (tiene espacios) o false si está entero y es seguro atravesar

// esPuenteSeguro('### ##') // false
// esPuenteSeguro('##### ####') // false
// esPuenteSeguro('########') // true

// let esPuenteSeguro = (puente)=> puente.split(' ').length === 1;
// console.log(esPuenteSeguro('### ##'));
// console.log(esPuenteSeguro('##### ####'));
// console.log(esPuenteSeguro('########'));


// obtenerSubreddit(url)✅
// Reddit es una red de comunidades en la que cada comunidad se conocer como subreddit. Crear una función obtenerSubreddit que tome como argumento un string url que consista en la url de un subreddit (p. ej. 'https://www.reddit.com/r/dankmemes/') y devuelva el subreddit (p. ej. 'dankmemes')

// obtenerSubreddit('https://www.reddit.com/r/javascript/') // 'javascript' 
// obtenerSubreddit('https://www.reddit.com/r/aww/') // 'aww' 

//let obtenerSubreddit =(url)=> url.split('/')[4];

// console.log(obtenerSubreddit('https://www.reddit.com/r/javascript/'));
// console.log(obtenerSubreddit('https://www.reddit.com/r/aww/'));



// convertirEnAcronimo(str)✅
// Crear una función convertirEnAcronimo que tome como argumento un string str y un string con todos los caracteres en mayúscula y separados por un punto

// convertirEnAcronimo('afip') // 'A.F.I.P.'
// convertirEnAcronimo('nasa') // 'N.A.S.A.'

// let convertirEnAcronimo =(str)=>{
//    let separarString = str.split('').join('.');

//    return separarString.toUpperCase();
// }

// console.log(convertirEnAcronimo('afip'));
// console.log(convertirEnAcronimo('nasa'));



// esAnioNuevo(fecha)✅
// Crear una función esAnioNuevo que tome como argumento un string fecha con el formato DD:MM:YYYY un argumento y devuelva true si la fecha es año nuevo o false si no lo es

// esAnioNuevo('03/05/2015') // false
// esAnioNuevo('22/01/1987') // false
// esAnioNuevo('01/01/2020') // true

// let esAnioNuevo =(fecha)=>{
//     let separarFecha = fecha.split('/');
//     let primero = '01';
  

//    return separarFecha[0]=== primero && separarFecha[1]=== primero
// }

// console.log(esAnioNuevo('03/05/2015'));
// console.log(esAnioNuevo('22/01/1987'));
// console.log(esAnioNuevo('01/01/2020'));




// aprueba(nota)✅
// Crear una función aprueba que tome como argumento un número nota y devuelva true si aprueba el examente (6 o más) o false si no. El número tiene que redondearse primero antes de evaluarlo

// aprueba(1) // false
// aprueba(5.4) // false
// aprueba(5.5) // true
// aprueba(5.6) // true
// aprueba(8) // true

//let aprueba = (nota)=> Math.round(nota) >= 6;

// console.log(aprueba(1));
// console.log(aprueba(5.4));
// console.log(aprueba(5.5));
// console.log(aprueba(5.6));
// console.log(aprueba(8));




// obtenerDuracionEnSegundos(duracion)✅
// Crear una función obtenerDuracionEnSegundos que tome como argumento un string duracion con el formato (mm:ss) y la cantidad de segundos totales de la duración

// obtenerDuracionEnSegundos('00:33') // 33
// obtenerDuracionEnSegundos('01:05') // 65
// obtenerDuracionEnSegundos('10:42') // 642

// let obtenerDuracionEnSegundos = (duracion)=>{
//     let segundosPorMinuto = 60 * Number(duracion.slice(0,2));
//     let segundos = Number(duracion.slice(3,5));

//     return segundosPorMinuto + segundos;
// }

// console.log(obtenerDuracionEnSegundos('00:33'));
// console.log(obtenerDuracionEnSegundos('01:05'));
// console.log(obtenerDuracionEnSegundos('10:42'));




