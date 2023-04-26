/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function devolverPrimerElemento(array) {
   // Retornar el primer elemento del arreglo recibido por parámetro.
   // Tu código:
      return array[0];
}

function devolverUltimoElemento(array) {
   // Retornar el último elemento del arreglo recibido por parámetro.
   // Tu código:
   return array.pop();
}

function obtenerLargoDelArray(array) {
   // Retornar la longitud del arreglo recibido por parámetro.
   // Tu código:
   return array.length ;
}

function incrementarPorUno(array) {
   // El arreglo recibido por parámetro contiene números.
   // Retornar un arreglo con los elementos incrementados en +1.
   // Tu código:
   var nombresCompletos = array.map(nuevoArray => nuevoArray + 1);

   return nombresCompletos;
 
}

function agregarItemAlFinalDelArray(array, elemento) {
   // Agrega el "elemento" al final del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   var arr=[elemento];
   var array2=array.concat(arr)
   var nombresCompletos = array2.map(nuevoArray => nuevoArray);

   return nombresCompletos;
  

}

function agregarItemAlComienzoDelArray(array, elemento) {
   // Agrega el "elemento" al comienzo del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   var arr=[elemento];
   var array2=arr.concat(array)
   var arrayNvuevo = array2.map(nuevoArray => nuevoArray);

   return arrayNvuevo;
}

function dePalabrasAFrase(palabras) {
   // El argumento "palabras" es un arreglo de strings.
   // Retornar un string donde todas las palabras estén concatenadas
   // con un espacio entre cada palabra.
   // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
   // Tu código:
   var arr =palabras.join(" ");
   return arr;
}

function arrayContiene(array, elemento) {
   // Verifica si el elemento existe dentro del arreglo recibido.
   // Retornar true si está, o false si no está.
   // Tu código:
    //var arr=elemento;
   if(array.includes(elemento)){
      return true;
      }else{
        return false;
     
      }
}

function agregarNumeros(arrayOfNums) {
   // El parámetro "arrayOfNums" debe ser un arreglo de números.
   // Suma todos los elementos y retorna el resultado.
   // Tu código:

   var suma=arrayOfNums.reduceRight((anterior, actual)=>{
      return anterior + actual;
   });
  return suma;
}

function promedioResultadosTest(resultadosTest) {
   // El parámetro "resultadosTest" es un arreglo de números.
   // Itera (en un bucle) los elementos del arreglo y devuelve el promedio de las notas.
   // Tu código:
   
   var suma = 0;
  for(var i = 0;i < resultadosTest.length;i++){
      
      
      suma = suma + resultadosTest[i];
  }
  return suma / i;

}

function numeroMasGrande(arrayOfNums) {
   // El parámetro "arrayOfNums" es un arreglo de números.
   // Retornar el número más grande.
   // Tu código:
   var mayor = Math.max.apply(Math,arrayOfNums);
   return mayor;
}

function multiplicarArgumentos() {
   // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
   // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
   // [PISTA]: "arguments" es un arreglo.
   // Tu código:
  var producto = 1;
  if(arguments.length == 0){
   return 0;

  }else{
   
   for(var i = 0;i <arguments.length;i++){
     producto = producto * arguments[i];

   }

  }
      return producto;
}

function cuentoElementos(array) {
   // Desarrolla una función que retorne la cantidad de elementos del arreglo cuyo valor sea mayor que 18.
   // Tu código:
   var nuevoArr=[];
   for(var i=0;i<array.length;i++){
         if(array[i] > 18){
            nuevoArr.push(array[i]);
         }
   }
   return nuevoArr.length;

}

function diaDeLaSemana(numeroDeDia) {
   // Supongamos que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
   // Realiza una función que, dado el número del día de la semana, retorne: "Es fin de semana"
   // si el día corresponde a "Sábado" o "Domingo", y "Es dia laboral" en caso contrario.
   // Tu código:

   switch(numeroDeDia){
      case 1: return "Es fin de semana";break;
      case 2: return "Es dia laboral"; break;
      case 3: return "Es dia laboral";break;
      case 4: return "Es dia laboral"; break;
      case 5: return "Es dia laboral";break;
      case 6: return "Es dia laboral";break;
      case 7: return "Es fin de semana";break;
      default :
      return "Dia no encontrado";break;
   }
}

function empiezaConNueve(num) {
   // Esta función recibe por parámetro un número.
   // Debe retornar true si el entero inicia con 9 y false en otro caso.
   // Tu código:
   // Convertimos en String a "num" y lo dividimos en elementos de un arreglo.
  var nNum=num.toString().split("");
  if(nNum[0] === '9'){
   return true;
  }else{
   return false;
  }
}

function todosIguales(array) {
   // Si todos los elementos del arreglo son iguales, retornar true.
   // Caso contrario retornar false.
   // Tu código:
   var verificacion = (elementos) => elementos == array[0];
   array.every(verificacion);
    
   if(array.every(verificacion) == true){
     return true;
   }else{
     return false;
   }

}

function mesesDelAño(array) {
   // El arreglo contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
   // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
   // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
   // Tu código:
   var mesesSelecionados=[];
   for(var i = 0;i < array.length;i++){
     if(array[i] == "Enero" || array[i] == "Marzo" || array[i] == "Noviembre"){
         mesesSelecionados.push(array[i]);
     }
   };

     if(mesesSelecionados.length == 3){
         return mesesSelecionados;
    }else if(mesesSelecionados.length === 2){
      return "No se encontraron los meses pedidos";
    }
}

function tablaDelSeis() {
   // Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
   // La función devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
   // Tu código:
   const num1=6;
   var tablaMultiplicar=[];
     for(var j=0;j<=10;j++){
       
           tablaMultiplicar.push(num1*j);
 
     }
   
    return tablaMultiplicar;
}

function mayorACien(array) {
   // La función recibe un arreglo con enteros entre 0 y 200.
   // Recorrerlo y retornar un arreglo con todos los valores mayores a 100 (no incluye el 100).
   // Tu código:

   var nuevoArr=[];
   for(var i=0;i<array.length;i++){
      if(array[i] > 100){
         nuevoArr.push(array[i]);
      }

   }
   return nuevoArr;
}

/* ----------------------------------------------------------------------------------
💪 EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT  EXTRA CREDIT 💪
-------------------------------------------------------------------------------------*/

function breakStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un arreglo y retornarlo.
   // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
   // la ejecución y retornar el string: "Se interrumpió la ejecución".
   // [PISTA]: utiliza el statement 'break'.
   // Tu código:
   var arr=[];
   var num2=0;

     foralejandro:
     for(var i=0;i<15;i++){
         num=num+2;
         num2++;
         arr.push(num);

      
        if(arr.length == 10 && num2 == 10)break foralejandro;{
           //return "Se interrumpió la ejecución";

         }
     }
         
      return arr; 
}

function continueStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un array y retornarlo.
   // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
   // se continua con la siguiente iteración.
   // [PISTA]: utiliza el statement 'continue'.
   // Tu código:
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverPrimerElemento,
   devolverUltimoElemento,
   obtenerLargoDelArray,
   incrementarPorUno,
   agregarItemAlFinalDelArray,
   agregarItemAlComienzoDelArray,
   dePalabrasAFrase,
   arrayContiene,
   agregarNumeros,
   promedioResultadosTest,
   numeroMasGrande,
   multiplicarArgumentos,
   cuentoElementos,
   diaDeLaSemana,
   empiezaConNueve,
   todosIguales,
   mesesDelAño,
   tablaDelSeis,
   mayorACien,
   breakStatement,
   continueStatement,
};
