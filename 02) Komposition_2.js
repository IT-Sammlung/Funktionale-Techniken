  //Funktionen
  const plusVier = (x) => x + 4;
  const malSechs = (x) => x * 6;
  //Compose-Funktion (nur 2 können verkettet werden)
  const compositionWithContext = function(f, g) {
    return function() {
      return f.call(this, g.apply(this, arguments));
    };
  };
  //Verknüpfungen
  const plusViermalSechs = compositionWithContext(
    malSechs,
    plusVier
  );
//Ausgabe in Konsole
console.log(plusViermalSechs(2));  // Resultat 36
