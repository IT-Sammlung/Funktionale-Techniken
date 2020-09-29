  //Funktionen
  const plusVier = (x) => x + 4;
  const malSechs = (x) => x * 6;
  //Compose-Funktion (nur 2 können verkettet werden)
  const compositionGenerisch = function() {
    const functions = arguments;
    return function() {
      let args = arguments;
      for(let i=functions.length;i-- > 0;) {
        args = [functions[i].apply(this, args)];
      }
      return args[0];
    };
  };
  //Verknüpfungen
  const plusViermalSechs = compositionGenerisch(
    malSechs,
    plusVier,
    malSechs
  );
//Ausgabe in Konsole
console.log(plusViermalSechs(2));  // Resultat 96
