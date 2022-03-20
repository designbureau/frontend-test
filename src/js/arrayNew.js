const arrayNew = (arr, key) => {
  /**
   * Check that required parameters are supplied.
   */
  if (!arr || !key) throw new Error("Parameter required.");

  /**
   * Check parameter is an array. If not, return error.
   */
  if (!Array.isArray(arr))
    throw new Error("Type error. Parameter is not an array.");

  /**
   * Create new array.
   */
  const newArray = [];

  /**
   * Map over array parameter using supplied key, push to new array.
   */
  arr.map((el) => {
    newArray.push(el[key]);
  });

  /**
   * Return new array.
   */
  return newArray;
};

export default arrayNew;
