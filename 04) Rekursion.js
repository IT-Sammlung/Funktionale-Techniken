      const fakultaet = (x) => {
        if(x <= 1) {
          return x;
        }
        return x * fakultaet(x-1);
      };
      console.log(fakultaet(5));
