const fetchData = require("./async");

describe("async", () => {
  test("should return correct todo", () => {
    fetchData(1).then((data) => expect(data.id).toBe(1));
  });
});
