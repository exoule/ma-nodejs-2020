class Planet {
  constructor(name, diametr) {
    this.name = name;
    this.diametr = diametr;
    this.size = this.getSize();
  }

  getSize() {
    return 4 / 3 * Math.PI * Math.pow((this.diametr) / 2, 3);
  }

  getNewPlanet() {
    return (`Планета: ${this.name}, Розмір: ${this.size}`);
  }
}

class Earth extends Planet {}

const a = new Planet('Nibiry:', 17898);
console.log(a.getNewPlanet());

const b = new Earth('Venera:', 19878);
console.log(b.getNewPlanet());