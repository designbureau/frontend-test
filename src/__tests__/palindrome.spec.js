import palindrome from "../js/palindrome";

it("empty parameter throws an error", () => {
  const toTest = null;
  expect(() => {
    palindrome(toTest);
  }).toThrow("Parameter required.");
});

it("non string parameter throws an error", () => {
    const toTest = 100;
    expect(() => {
      palindrome(toTest);
    }).toThrow("Type error. Not a string.");
  });
  

it('"w" string with a single character is a palindrome', () => {
  const toTest = "w";
  const result = palindrome(toTest);

  expect(result).toBe(true);
});

it('"ab" is not a palindrome', () => {
  const toTest = "ab";
  const result = palindrome(toTest);

  expect(result).toBe(false);
});

it('"Aa" is a palindrome', () => {
  const toTest = "Aa";
  const result = palindrome(toTest);

  expect(result).toBe(true);
});

it('"Kayak" is a palindrome', () => {
  const toTest = "Kayak";
  const result = palindrome(toTest);

  expect(result).toBe(true);
});

it('"Scientist" is not a palindrome', () => {
  const toTest = "Scientist";
  const result = palindrome(toTest);

  expect(result).toBe(false);
});

it('"Hello!" is not a palindrome', () => {
  const toTest = "Hello!";

  debugger;
  const result = palindrome(toTest);

  expect(result).toBe(false);
});
