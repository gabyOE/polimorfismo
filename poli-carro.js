class Carro {
    constructor(marca, modelo) {
      this.marca = marca;
      this.modelo = modelo;
    }
  
    acelerar() {
      console.log("O carro está acelerando.");
    }
  }
  
  class CarroEsportivo extends Carro {
    acelerar() {
      console.log("O carro esportivo está acelerando muito rápido!");
    }
  }
  
  class CarroFamiliar extends Carro {
    acelerar() {
      console.log("O carro familiar está acelerando suavemente.");
    }
  }
  
  const carro = new Carro("Ford", "Fusion");
  const carroEsportivo = new CarroEsportivo("Porsche", "911");
  const carroFamiliar = new CarroFamiliar("Toyota", "Camry");

    carro.acelerar()
  carroEsportivo.acelerar();
  carroFamiliar.acelerar(); 
  