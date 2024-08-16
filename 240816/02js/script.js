class Pet {
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }

  run() {
    alert(`${this.name} is running`);
  }
}

const cheez = new Pet("치즈", "yellow");
// cheez.run();

class Cat extends Pet {
  constructor(name, color, breed) {
    super(name, color);
    this.bread = breed;
  }
  viewInfo() {
    alert(`이름 : ${this.name}, 품종 : ${this.bread}, 색깔 : ${this.color}`);
  }
}

const bori = new Cat("보리", "흰색", "코숏");
bori.viewInfo();
