import { fizzBuzz } from "./fizzbuzz";

describe("fizzbuzz", () => {

  it("should return return a string", () => {
    expect(typeof fizzBuzz(5)).toBe("string");
  });

  it.each([3, 6, 9, 12])
  ("returns 'Fizz' for multiples of three such as 3, 6, 9, and 12",
  (input: number) => {
      expect(fizzBuzz(input)).toEqual("Fizz");
  });

  it("returns multiples of five such as 5, 10, and 20 as buzz", () => {
    [5, 10, 20].map((multiple) => fizzBuzz(multiple))
      .forEach((m) => expect(m).toEqual("Buzz"));
  });

  it.each([[15, 'FizzBuzz'], [45, 'FizzBuzz']])
  ("returns 'FizzBuzz' for multiples of both such as 15 and 45",
  (input: number, output: string) => {
      expect(fizzBuzz(input)).toEqual(output);
  });

  it("returns string output of a number such as 43 -> '43'", () => {
    expect(fizzBuzz(43)).toBe("43");
  });

  describe("accepts only numbers between 1 to 100", () => {

    it("throws an error when input is 102", () => {
      expect(() => fizzBuzz(102)).toThrow("Input must be a number between 1 and 100.");
    });

    it("throws an error when input is -12", () => {
      expect(() => fizzBuzz(-12)).toThrow("Input must be a number between 1 and 100.");
    });
  
    it("throws an error when input is not a number", () => {
      expect(() => fizzBuzz("abc")).toThrow("Input must be a number between 1 and 100.");
    });

  });

});
