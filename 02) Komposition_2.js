  //Funktionen
  const plusVier = (x) => x + 4;
  const malSechs = (x) => x * 6;
  //Compose-Funktion (nur 2 können verkettet werden)
  const compositionMitKontext = function(f, g) {
    return function() {
      return f.call(this, g.apply(this, arguments));
    };
  };
  //Verknüpfungen
  const plusViermalSechs = compositionMitKontext(
    malSechs,
    plusVier
  );
//Ausgabe in Konsole
console.log(plusViermalSechs(2));  // Resultat 36
