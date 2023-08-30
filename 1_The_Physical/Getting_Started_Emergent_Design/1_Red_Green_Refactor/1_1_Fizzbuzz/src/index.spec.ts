import { fizzBuzz } from "./fizzbuzz";

describe("fizzbuzz", () => {

  it("should return return a string", () => {
    expect(typeof fizzBuzz(5)).toBe("string");
  });


  describe("returns string output of a number", () => {
    it.each([[43, '43'], [17, '17']])
    ("returns '%i' for %i", (input: number, output: string) => {
        expect(fizzBuzz(input)).toEqual(output);
    });
  });

  describe("returns 'Fizz' for multiples of three", () => {
    it.each([3, 6, 9, 12])
    ("returns 'Fizz' for %i", (input: number) => {
        expect(fizzBuzz(input)).toEqual("Fizz");
    });
  });

  describe("returns 'Buzz' for multiples of five", () => {
    it.each([5, 10, 20])
    ("returns 'Buzz' for %i", (input: number) => {
        expect(fizzBuzz(input)).toEqual("Buzz");
    });
  });

  describe("returns 'FizzBuzz' for multiples of both", () => {
    it.each([15, 45])
    ("returns 'FizzBuzz' for %i", (input: number) => {
        expect(fizzBuzz(input)).toEqual("FizzBuzz");
    });
  });

  describe("accepts only numbers between 1 to 100", () => {

    it("throws an error for 102", () => {
      expect(() => fizzBuzz(102)).toThrow("Input must be a number between 1 and 100.");
    });

    it("throws an error for -12", () => {
      expect(() => fizzBuzz(-12)).toThrow("Input must be a number between 1 and 100.");
    });
  
    it("throws an error for `abc`", () => {
      expect(() => fizzBuzz("abc")).toThrow("Input must be a number between 1 and 100.");
    });

  });

});
