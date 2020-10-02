// Funktion mit mehreren Parametern wird in mehrere Funktionen mit einem Parameter umgewandelt
function volume(x) {
  return function(y) {
    return function(z) {
      return x*y*z;
    }
  }
}
console.log(volume(10)(10)(10));
