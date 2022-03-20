import arrayNew from "../js/arrayNew";

it("empty parameter throws an error", () => {
  const toTest = null;
  expect(() => {
    arrayNew(toTest, "age");
  }).toThrow("Parameter required.");
});

it("parameter is not an array and throws an error", () => {
  const toTest = "string";
  expect(() => {
    arrayNew(toTest, "age");
  }).toThrow("Type error. Parameter is not an array.");
});

it("array is sorted in alphabetical order", () => {
  const toCompare = [29, 42, 23, 50];

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
  expect(arrayNew([...toTest], "age")).toEqual(toCompare);
});
