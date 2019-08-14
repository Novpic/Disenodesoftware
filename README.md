#  The Revealing Module Pattern en Javascript

El Revealing Module Pattern Design  es un patrón de diseño que nació gracias a la frustración de Christian Heilmann ya que Javascript no es un lenguaje orientado a objetos como C# y Java.

**Este patrón soluciona este problema.**

## Como se Realiza
Se definen todas las funciones y variables de dentro de otra función anonimatos que las retorne, con pointers de los objetos que serán públicos. Los que no se retornen quedarán privados.

```javascript
var myRevealingModule = (function () {

	var privateVar = "Ben Cherry",
	publicVar = "Hey there!";

	function privateFunction() {
		console.log( "Name:" + privateVar );
	}
	function publicSetName( strName ) {
		privateVar = strName;
	}
	function publicGetName() {
		privateFunction();
	}

// Reveal public pointers to
// private functions and properties

	return {
		setName: publicSetName,
		greeting: publicVar,
		getName: publicGetName
	};
})();

myRevealingModule.setName( "Juan Camilo L" );
```

Acá se puede evidenciar claramente un ejemplo de como realizarlo de manera fácil y sencilla. otra forma de poner en Privado es dentro del la instancia **return** poner como comentario la variable.

``` javascript
return {
		//Comentar la variable la pone privada y mas ordenado
		//setName: publicSetName,
		greeting: publicVar,
		getName: publicGetName
	};
```

## Conclusión

El patrón de modelo antes visto facilita el orden de como organizar el código con Javascript tipo orientador a objetos.

La única dificultad es cuando una función privada llama a una publica y se va a realizar un patch  eso genera posibles inconsistencias y problemas en el código.

### Juan Camilo Londoño 
###  juclondonome@unal.edu.co
