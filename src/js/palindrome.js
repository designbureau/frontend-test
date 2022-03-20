const palindrome = (str) => {
  /**
   *  Check if parameter exists.
   */
  if (!str)
    throw new Error('Parameter required.');

  /**
   *  Check if parameter is a string.
   */
  if (typeof str !== "string")
    throw new Error('Type error. Not a string.');

  /**
   *  Regex pattern for removing unwanted characters (eg. numbers and punctuation).
   */
  const re = /[^A-Za-z0–9]/g;

  /**
   *  Lowercase normalisation. Remove unwanted characters.
   */
  const lowerStr = str.toLowerCase().replace(re, "");

  /**
   *  Reverse the string.
   */
  const reverseStr = lowerStr.split("").reverse().join("");

  /**
   *  Compare strings and return true or false if it is a palindrome.
   */
  return reverseStr === lowerStr;
};

export default palindrome;
