      // Schlechte Programmierung
      i = 0; // Benötigt globale Variabel
      function counter(name) {
        console.log(name + ' : ' + i);
        i++;
      }
      counter('c1'); //c1 : 0
      counter('c1'); //c1 : 1
      counter('c1'); //c1 : 2


      //Closures
      function zaehler(name) {
        let i = 0; // Variabel bleibt erhalten, auch nachdem die äussere Funktion abgeschlossen wurde
        return function() {
          console.log(name + ' : ' + i);
          i++;
        }
      }
      const z1 = zaehler('z1');
      z1(); // 0
      z1(); // 1
      z1(); // 2

      //Selbe Closure anderst verwendet
      const cache = () => {
        let i=0;
        const aufgabe = () => {
          i++;
          return i;
        };
        return aufgabe;
      };

      const speicher1 = cache();
      console.log(speicher1()); // 0
      console.log(speicher1()); // 1
      console.log(speicher1()); // 2
