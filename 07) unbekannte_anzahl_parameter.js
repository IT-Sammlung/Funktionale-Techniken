// Michael können eine unbekannte Anzahl an Parametern für Hobbys übergeben werden, siehe slice.call
var michael = {
  hobbys: [],
  hobbysList() {
    console.log(this.hobbys);
  },
  hobbySet() {
    this.hobbys = Array.prototype.slice.call(
      arguments, 0
    );
  }
}
michael.hobbysList();
michael.hobbySet('Ski', "Velo", "Wandern", "Campen");
michael.hobbysList();
