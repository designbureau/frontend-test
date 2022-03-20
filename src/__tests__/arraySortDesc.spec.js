import arraySortDesc from "../js/arraySortDesc";

it("empty parameter throws an error", () => {
  const toTest = null;
  expect(() => {
    arraySortDesc(toTest);
  }).toThrow("Parameter required.");
});

it("parameter is not an array and throws an error", () => {
  const toTest = "string";
  expect(() => {
    arraySortDesc(toTest, "age");
  }).toThrow("Type error. Parameter is not an array.");
});

it("array is sorted in descending order", () => {
  const toCompare = [
    {
      name: "Jean",
      age: 50,
    },
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
  expect(arraySortDesc([...toTest], "age")).toEqual(toCompare);
});
