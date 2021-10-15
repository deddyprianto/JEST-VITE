let animals = ["elephant", "zebra", "bear", "tiger"];

describe("animal array", () => {
  beforeEach(() => {
    console.log("jalan kan sebelum test berjalan");
    animals = ["elephant", "zebra", "bear", "tiger"];
  });
  test("should add animals to end of array", () => {
    animals.push("tigersaya");
    expect(animals[animals.length - 1]).toBe("tigersaya");
  });
  test("should add a monkey at beginning array", () => {
    animals.unshift("monkey");
    expect(animals[0]).toBe("monkey");
  });
  test("should have initial length of 4", () => {
    expect(animals.length).toBe(4);
  });
});

describe("testing something else", () => {
  test.only("should be truty", () => {
    expect(true).toBeTruthy();
  });
});
