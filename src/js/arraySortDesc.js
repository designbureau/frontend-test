const arraySortDesc = (arr, key) => {
  /**
   * Check that required parameters are supplied.
   */
  if (!key || !arr) throw new Error("Parameter required.");

  /**
   * Check that first parameter is an array.
   */
  if (!Array.isArray(arr))
    throw new Error("Type error. Parameter is not an array.");

  /**
   * Sort the array.
   */
  return arr.sort((a, b) => b[key] - a[key]);
};

export default arraySortDesc;
