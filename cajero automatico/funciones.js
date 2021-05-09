/* 
Realizar el algoritmo del cajero automatico, teniendo en cuenta las opciones:

1. Consultar Saldo

2. Retirar
  2.1 10.000
  2.2 20.000
  2.3 50.000
  2.4 200.000
  2.5 600.000
  
3. Transferir
  3.1 # Cuenta a donde se transfiere
  3.2 Valor
  
4. Cambiar Clave

Al finalizar cada operación debe preguntar si desea salir o realizar otra operación.

Determine Variables y constantes,
Ciclos y condiciones de operación,
Funciones,
Desarrollo de la aplicación.

# Constantes    |    Variables    |    Operaciones    ||
*/

// --------------  Programa Completo: --------------
// Constantes y Variables:
  const saldo = 900000;
  const retiros = [10000,20000,50000,200000,600000];
  const error = 'Clave Incorrecta';
  
  var salidas;
  var clave = 2345;
  var numerocuenta;

// Definir Funciones:
// Función Saldo:
function Saldo(resclave){
  // Condicionar si la clave ingresada es la correcta:
  if (resclave === clave){
    return ("Su saldo es de "+saldo);
  }else{
    return error;
  }
}
//
// test de función saldo: Saldo(2345)

// Función Retirar:
function Retiros(valor,resclave){
  // Validar que la clave sea correcta
  var resultado;
  resclave === clave ? resultado=newsaldo(valor) : resultado=error;
  return resultado  
}
//Retiros(3000,2345)

function newsaldo(valor){
  let saldonew = saldo - valor;
  let mensaje = 'Se han usado '+valor+' Su saldo actual es de '+saldonew;
  let errorsaldo = 'Fondos insufucientes';
  saldonew < saldo & saldonew > 0 ? resultado = mensaje : resultado = errorsaldo;
  return resultado;
}
// funcion Transferir:
function Transferencia(cuenta, resclave, valortransferir){
  let resultado;
  resclave === clave ? resultado=valortransfiere(valortransferir) : resultado='errores';
  return resultado
}

function valortransfiere(monto){
  var valor = saldo-monto 
  let resultado;
  valor > 0 ? resultado=newsaldo(monto) : resultado=error
  return resultado;
}
// Transferencia(123245,2345,800000);

function CambioClave(resclave, newclave){
  resclave === clave ? resultado ="Su nueva clave es "+ (clave = newclave) : resultado = error
  return resultado;
}

function inicio(operacion){
  console.log(operacion);
  
  switch (operacion){
      case 1:
        var x = prompt('Digite la clave','');
        x = parseInt(x); 
        salidas = Saldo(x);
        break;
      case 2:
      var x = prompt('Digite la clave','');
        x = parseInt(x); 
        var x = prompt('Cuanto Desea Retirar');
        x = parseInt(x);
        salidas = Retiros(x,2345);
        break;
      case 3:
       var x = prompt('Número de cuenta a la que desea transferir');
       x = parseInt(x); 
       var x = prompt('Digite la clave','');
        x = parseInt(x); 
       var x = prompt('Cuanto Desea Transferir');
        x = parseInt(x);
        salidas = Transferencia(x, 2345, 600000);
        break;
      case 4:
        var x = prompt('Digite la clave','');
        x = parseInt(x); 
       var x = prompt('Digite la nueva clave','');
        x = parseInt(x); 
        salidas = CambioClave(2345, x);
        break;
      default:
        //console.log('Bienvenido a su Cajero Electrónico\n');
        //console.log('Digite una de la siguientes operaciones (#): \n');
        //console.log('1. Consulta tu saldo');
        //console.log('2. Retira Dinero');
        //console.log('3. Realiza una Transferencia');
        //console.log('4. Cambia tu Clave');
      break;
      
  }
  console.log(salidas);


  return salidas;

}
// inicio();
