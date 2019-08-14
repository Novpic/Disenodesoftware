var welcomeModule = (function(){
  var name = "John";
  var hello = function(){ console.log("Hello, " + name + "!");}
  var welcome = function() { console.log( hello() + " Welcome to StackOverflow!");}
  return {
    name: name,
    sayHello: hello,
    sayWelcome: welcome
  }
})();


//SI SE COMENTAN EN EL RETURN ES COMO PONER EN PRIVADO LOS ATRIBUTOS

var welcomeModule = (function(){
  var name = "John";
  var hello = function(){ console.log("Hello, " + name + "!");}
  var welcome = function() { console.log( hello() + " Welcome to StackOverflow!");}
  return {
    //name: name,
    //sayHello: hello,
    sayWelcome: welcome
  }
})();
