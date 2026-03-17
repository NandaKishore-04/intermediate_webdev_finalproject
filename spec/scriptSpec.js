const { calculateSimpleInterest, calculateTotalPayableAmount } = require('../script.js');

describe("Interest Rate Calculator Tests", () => {

  it("should calculate simple interest correctly", () => {
    let result = calculateSimpleInterest(1000, 5, 1);
    expect(result).toBe(50);
  });

  it("should calculate total payable amount correctly", () => {
    let result = calculateTotalPayableAmount(1000, 50);
    expect(result).toBe(1050);
  });

});