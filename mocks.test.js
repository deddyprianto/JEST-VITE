const forEach = (items, callback) => {
  for (let i = 0; 1 < items.length; i++) {
    callback(items[i]);
  }
};

test("should mock callback", () => {
  const mockCallback = jest.fn((x) => 42 + x);
  expect(forEach([1, 2], mockCallback.mock)).toBe();
});
