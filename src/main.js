import "./scss/style.scss";
import palindrome from "./js/palindrome";
import arraySortAZ from "./js/arraySortAZ";
import arraySortDesc from "./js/arraySortDesc";
import arrayNew from "./js/arrayNew";

console.log("Test palindrome 'Kayak' with title casing", palindrome("Kayak"));
console.log(
  "Test palindrome 'Kayak!Kayak' with unwanted characters",
  palindrome("Kayak!Kayak")
);
console.log("Test palindrome 'Hello!' with punctuation", palindrome("Hello!"));
console.log("Test palindrome '100' with incorrect type", palindrome(100));
console.log("Test palindrome with null input", palindrome());
console.log("Test palindrome with empty string input", palindrome(""));

const people = [
  {
    name: "Bob",
    age: 29,
  },
  {
    name: "Alice",
    age: 42,
  },
  {
    name: "Greg",
    age: 23,
  },
  {
    name: "Jean",
    age: 50,
  },
];

console.log("Sort age descending", arraySortDesc([...people], "age"));
console.log(
  "Sort name alphabetically",
  arraySortAZ([...people], "name", "ASC")
);

console.log("Create new array with ages", arrayNew([...people], "age"));
console.log("Input invalid type", arrayNew("not and array"));
