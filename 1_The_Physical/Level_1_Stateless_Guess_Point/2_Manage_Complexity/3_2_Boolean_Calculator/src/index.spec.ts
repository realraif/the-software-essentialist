import { BooleanCalculator } from './index';


describe('boolean calculator', () => {

  describe('validates single values', () => {
    it.each([
      ['True', true],
      ['False', false],
    ])('knows that "%s" is %s', (input, expected) => {
      const result = BooleanCalculator.validateInput(input);
      
      expect(result).toBe(expected);
    });
  });

  describe('validates AND', () => {
    it.each([
      ['True AND False', false],
      ['True AND True', true],
      ['False AND False', false],
    ])('knows that "%s" is %s', (input, expected) => {
      const result = BooleanCalculator.validateInput(input);

      expect(result).toBe(expected);
    });
  });

  describe('validates OR', () => {
    it.each([
      ['True OR False', true],
      ['True OR True', true],
      ['False OR False', false],
      ['True OR False AND False', true],
    ])('knows that "%s" is %s', (input, expected) => {
      const result = BooleanCalculator.validateInput(input);

      expect(result).toBe(expected);
    });
  });

  describe('validates NOT', () => {
    it.each([
      ['NOT True', false],
      ['NOT False', true],
    ])('knows that "%s" is %s', (input, expected) => {
      const result = BooleanCalculator.validateInput(input);

      expect(result).toBe(expected);
    });
  });

  describe('knows the order of operations is NOT, AND, OR', () => {
    it.each([
      ['True OR False AND False', true],
      ['True OR NOT False AND False', true],
      ['True OR NOT False AND False OR False AND True', true],
      ['True AND False OR True AND False', false],
      ['True AND False OR True AND NOT True', false],
      ['False AND NOT False', false],
      ['NOT True AND NOT False', false],
      ['NOT True OR NOT False', true],
      ['NOT True OR False', false],
      ['True OR NOT False', true],
      ['True OR NOT False AND NOT True OR NOT False', true],
      ['NOT True AND NOT False OR NOT True OR False', false],
    ])('knows that "%s" is %s', (input, expected) => {
      const result = BooleanCalculator.validateInput(input);

      expect(result).toBe(expected);
    });
  });

  describe('validates parentheses', () => {
    it.each([
      ['(True OR False) AND False', false],
      ['(True OR False) AND (False OR True)', true],
      ['(True OR False) AND (False OR True) OR False', true],
      ['False OR (True AND False)', false],
      ['False OR (False)', false],
      ['False OR (True AND False) OR True', true],
      ['True AND (False OR True)', true],
      ['False OR (True)', true],
    ])('knows that "%s" is %s', (input, expected) => {
      const result = BooleanCalculator.validateInput(input);

      expect(result).toBe(expected);
    });
  });

  describe('validates complex expressions with nested parentheses', () => {
    it.each([
      ['(True OR False) AND (False OR (True AND False))', false],
      ['(True OR False) AND (False OR (True AND False) OR True)', true],
      ['(True OR False) AND (False OR (True AND False) OR True) OR False', true],
      ['False OR (True AND (False OR True))', true],
      ['True AND (False OR (True AND False))', false],
    ])('knows that "%s" is %s', (input, expected) => {
      const result = BooleanCalculator.validateInput(input);

      expect(result).toBe(expected);
    });
  });

  describe('throws error for invalid input', () => {
    it.each(['sdf', ''])('throws error for "%s"', (input) => {
      expect(() => {
        BooleanCalculator.validateInput(input);
      }).toThrowError();
    });
  });

})
