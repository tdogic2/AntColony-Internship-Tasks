const createNewStruct = require("./task1");

// Test provided in the text.
const test1 = [
  { id: 1, value: 3 },
  { id: 2, value: 7 },
  { id: 3, value: 3 },
  { id: 4, value: 1 },
  { id: 5, value: 4 },
];

// Testing a list that contains multiple objects with duplicate values and mixed-up ids.
const test2 = [
  { id: 7, value: 3 },
  { id: 2, value: 7 },
  { id: 1, value: 3 },
  { id: 4, value: 1 },
  { id: 3, value: 4 },
  { id: 6, value: 5 },
  { id: 5, value: 4 },
  { id: 8, value: 4 },
];

// Testing an empty list.
const test3 = [];

// Testing a list that contains only one object, clearly demonstrating the absence of any duplicate values.
const test4 = [{ id: 1, value: 3 }];

// Testing a list that contains multiple objects, with each object having unique values and no duplicates.
const test5 = [
  { id: 5, value: 1 },
  { id: 2, value: 2 },
  { id: 1, value: 8 },
  { id: 4, value: 3 },
  { id: 3, value: 5 },
  { id: 6, value: 6 },
];

test("Task 1 - Test 1: ", () =>
  expect(createNewStruct(test1)).toEqual({ id: 6, value: 5 }));

test("Task 1 - Test 2: ", () =>
  expect(createNewStruct(test2)).toEqual({ id: 9, value: 6 }));

test("Task 1 - Test 3: ", () => expect(createNewStruct(test3)).toEqual({}));

test("Task 1 - Test 4: ", () => expect(createNewStruct(test4)).toEqual({}));

test("Task 1 - Test 5: ", () => expect(createNewStruct(test5)).toEqual({}));
