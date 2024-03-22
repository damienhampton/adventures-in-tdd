const { expect } = require("chai");
const { adder } = require("./adder");

describe("4 + 5", () => {
  it("should equal 9", () => {
    expect(adder(4, 5)).to.equal(9);
  });
});
