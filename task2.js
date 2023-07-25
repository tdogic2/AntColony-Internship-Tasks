const InvalidPathError = require("./customErrors");

function isObject(obj) {
  return typeof obj === "object" && obj !== null && !Array.isArray(obj);
}

function isNestedPath(path) {
  const pathPattern = /^[a-zA-Z_$][a-zA-Z0-9_$]*(\.[a-zA-Z_$][a-zA-Z0-9_$]*)*$/;
  return pathPattern.test(path);
}

function lookUpValueOnPath(obj, path) {
  if (!isObject(obj) || typeof path !== "string")
    throw new TypeError("Invalid input type.");

  // The time complexity of this check is O(m), where 'm' is the length of the path.
  if (!isNestedPath(path)) throw new InvalidPathError("Invalid path form.");

  // The time complexity of this operation is O(n), where 'n' is the number of path segments.
  const pathArray = path.split(".");

  // The time complexity of this operation is O(d), where 'd' is the depth of the nested structure.
  let result = obj;
  for (let i = 0; i < pathArray.length; i++) {
    const key = pathArray[i];
    if (!(key in result))
      throw new InvalidPathError(`Property "${key}" not found in the obj.`);
    result = result[key];
  }
  return result;
}

// The time complexity of this function is O(m + n + d).
/* 
  Question: Could we improve the time complexity of this function?
  Approach:
    Probably. We could use memoization to optimize repeated lookups and minimize redundant traversals.
    I have decided not to pursue any further investigation into this particular idea. 
    I'm perfectly satisfied with the current one.
*/

module.exports = lookUpValueOnPath;
