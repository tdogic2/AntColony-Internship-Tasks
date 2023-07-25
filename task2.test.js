const InvalidPathError = require("./customErrors");
const lookUpValueOnPath = require("./task2");

// Test provided in the text.
test1 = {
  obj: { property1: { property2: "Apple", property3: "Orange" } },
  path: "property1.property2",
};

// Testing first layer lookup in obj.
test2 = {
  obj: { property1: { property2: "Apple", property3: "Orange" } },
  path: "property1",
};

// Testing deep layer lookup in obj.
test3 = {
  obj: {
    property1: {
      property2: "Apple",
      property3: "Orange",
      property4: {
        property5: "Banana",
        property6: "Pear",
        property7: { property8: "Grapes" },
      },
    },
  },
  path: "property1.property4.property7.property8",
};

// Testing the type of obj.
test4 = {
  obj: [{ property1: { property2: "Apple", property3: "Orange" } }],
  path: "property1.property2",
};

// Testing the type of path.
test5 = {
  obj: { property1: { property2: "Apple", property3: "Orange" } },
  path: ["property1.property2"],
};

// Testing if the path form is valid.
test6 = {
  obj: { property1: { property2: "Apple", property3: "Orange" } },
  path: "property1.property2.",
};

// Testing if the path references a key that doesn't exist in obj.
test7 = {
  obj: { property1: { property2: "Apple", property3: "Orange" } },
  path: "property1.property4",
};

test("Task 2 - Test 1: ", () =>
  expect(lookUpValueOnPath(test1.obj, test1.path)).toBe("Apple"));

test("Task 2 - Test 2: ", () =>
  expect(lookUpValueOnPath(test2.obj, test2.path)).toEqual({
    property2: "Apple",
    property3: "Orange",
  }));

test("Task 2 - Test 3: ", () =>
  expect(lookUpValueOnPath(test3.obj, test3.path)).toBe("Grapes"));

test("Task 2 - Test 4: ", () =>
  expect(() => lookUpValueOnPath(test4.obj, test4.path)).toThrow(TypeError));

test("Task 2 - Test 5: ", () =>
  expect(() => lookUpValueOnPath(test5.obj, test5.path)).toThrow(TypeError));

test("Task 2 - Test 6: ", () => {
  expect(() => lookUpValueOnPath(test6.obj, test6.path)).toThrow(
    InvalidPathError
  );
  expect(() => lookUpValueOnPath(test6.obj, test6.path)).toThrow(
    /^Invalid path form.$/
  );
});

test("Task 2 - Test 7: ", () => {
  expect(() => lookUpValueOnPath(test7.obj, test7.path)).toThrow(
    InvalidPathError
  );
  expect(() => lookUpValueOnPath(test7.obj, test7.path)).toThrow(
    /^Property "property4" not found in the obj.$/
  );
});
