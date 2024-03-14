// import "./styles/index.scss";
import * as styles from "./styles/styles.module.css";

const h2 = document.querySelector("h2");
h2.classList.add(styles.heading);
console.log(h2);

console.log("is working?...");
// console.log("is working?...");
// console.log("is working?...");

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
const rock = new Person("Rock", 57);
const tom = new Person("Tom", 20);
console.log(rock, tom);
console.log(rock?.age?.num);

if (module.hot) {
  module.hot.accept();
}
