/* The following assumptions and decisions have been made since the text is not entirely clear:
    1. I assume that the input list is of the proper form.
    2. I assume that the ids in the input list are unique and represented as positive integers.
    3. In the given scenario where the input list is empty I decided to return an empty object.
    4. In the case where the input list is not empty, with each object having unique values and no duplicates, I also decided to return an empty object.
*/

function createNewStruct(inputList) {
  // The time complexity of this operation is O(n log n), where 'n' is the number of objects in the input list.
  const sortedInputList = inputList.sort((a, b) => a.value - b.value);

  let maxId = 0;
  let duplicateValue = 0;
  let duplicateCount = 0;
  let newId = 0;
  let newValue = 0;

  // The time complexity of this operation is O(n), where 'n' is the number of objects in the input list.
  sortedInputList.forEach((item) => {
    maxId = Math.max(maxId, item.id);
    if (duplicateValue !== item.value && duplicateCount <= 1) {
      duplicateValue = item.value;
      duplicateCount = 0;
    }
    if (duplicateValue === item.value) duplicateCount++;
    if (duplicateCount > 1 && newValue === 0) {
      newValue = duplicateValue + 1;
    }
    if (newValue === item.value) newValue = item.value + 1;
  });

  if (maxId > 0 && newValue > 0) newId = maxId + 1;

  if (newId === 0 && newValue === 0) return {};

  return {
    id: newId,
    value: newValue,
  };
}

// The time complexity of this function is O(n log n).
/* 
  Question: Could we improve the time complexity of this function? 
  Approach: 
    Probably. Instead of apriori sorting the list, we could do a single pass through the loop while using a Map to keep track of the frequency of each value in the input list.
    I have decided not to pursue any further investigation into this particular idea. 
    I'm perfectly satisfied with the current one.
*/

module.exports = createNewStruct;
