const arraySortAZ = (arr, key) => {
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
  return arr.sort((a, b) => {
    const nameA = a[key].toLowerCase(),
      nameB = b[key].toLowerCase();
    return nameA < nameB ? -1 : 1;
  });
};

export default arraySortAZ;
