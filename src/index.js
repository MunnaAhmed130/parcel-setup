// import "./styles/index.scss";

console.log("is working?...");

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

const rock = new Person("Rock", 57);
const tom = new Person("Tom", 20);

if (module.hot) {
  module.hot.accept();
}
