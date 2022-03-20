import arraySortAZ from "../js/arraySortAZ";

it("empty parameter throws an error", () => {
  const toTest = null;
  expect(() => {
    arraySortAZ(toTest, "name");
  }).toThrow("Parameter required.");
});

it("parameter is not an array and throws an error", () => {
  const toTest = "string";
  expect(() => {
    arraySortAZ(toTest, "name");
  }).toThrow("Type error. Parameter is not an array.");
});

it("array is sorted in alphabetical order", () => {
  const toCompare = [
    {
      name: "Alice",
      age: 42,
    },
    {
      name: "Bob",
      age: 29,
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

  const toTest = [
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
  expect(arraySortAZ([...toTest], "name")).toEqual(toCompare);
});
