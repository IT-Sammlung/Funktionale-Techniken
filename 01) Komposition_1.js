  //Funktionen
  const plusVier = (x) => x + 4;
  const malSechs = (x) => x * 6;
  //Compose-Funktion (nur 2 können verkettet werden)
  const composition = function(f, g) {
    return function(x) {
      return f(g(x));
    };
  };
  //Verknüpfungen
  const plusViermalSechs = composition(
    malSechs,
    plusVier
  );
//Ausgabe in Konsole
console.log(plusViermalSechs(2));  // Resultat 36
