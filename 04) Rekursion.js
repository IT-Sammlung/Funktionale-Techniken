        //Einfaches Beispiel, ähnelt vom Prinzip einer While
        const laufen = (x) => {
        if(x<=0){
          console.log("angekommen");
          return 0;
        }
        console.log("1m laufen");
        return laufen(x-1);
      }
      laufen(5);

      //Beispiel Fakultät berechnen
      //!5 = 5*4*3*2*1
      const fakultaet = (x) => {
        if(x <= 1) {
          return x;
        }
        return x * fakultaet(x-1);
      };
      console.log(fakultaet(5)); // 120
      
      //Beispiel x-te Stelle von Fibonacci berechnen
      //1,2,3,5,8,13,21.... <== 4te Stelle von Fibonacci = 5
      let fibo = (x) => {
        if(x<=1) {return 1;}
        return fibbo(x-1) + fibbo(x-2);
      };

      console.log(fibbo(4)); // 5
