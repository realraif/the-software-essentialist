import { BooleanCalculator } from './index';

/*
  Create a boolean calculator that takes a boolean expression (as a string)
  and evaluates it to compute the correct output boolean result
  
  validates single values
  "True" => true
  "False" => false

  validates AND
  "True AND False" => false
  "True AND True" => true
  "False AND False" => false

  validates OR
  "True OR False" => true
  "True OR True" => true
  "False OR False" => false

  validates NOT
  "NOT True" => false
  "NOT False" => true

  knows the order of operations is NOT, AND, OR
  "True OR False AND False" => true
  "True OR NOT False AND False" => true
  "True OR NOT False AND False OR False" => true
  "True OR NOT False AND False OR False AND True" => true
  "True OR NOT False AND False OR False AND True OR True" => true

  validates parentheses
  "(True OR False) AND False" => false
  "(True OR False) AND (False OR True)" => true
  "(True OR False) AND (False OR True) OR False" => true

  validates nested parentheses
  "(True OR False) AND (False OR (True AND False))" => false
  "(True OR False) AND (False OR (True AND False) OR True)" => true
  "(True OR False) AND (False OR (True AND False) OR True) OR False" => true

  validates complex expressions
  "True OR NOT False AND False OR False AND True OR True" => true
  "True OR NOT False AND False OR False AND True OR True AND False" => true
  "True OR NOT False AND False OR False AND True OR True AND False OR NOT True" => true

  validates complex expressions with parentheses
  "(True OR False) AND (False OR (True AND False) OR True) OR False" => true
  "(True OR False) AND (False OR (True AND False) OR True) OR False AND True" => true
  "(True OR False) AND (False OR (True AND False) OR True) OR False AND True OR NOT True" => true

  validates complex expressions with nested parentheses
  "(True OR False) AND (False OR (True AND False) OR True) OR False" => true
  "(True OR False) AND (False OR (True AND False) OR True) OR False AND True" => true
  "(True OR False) AND (False OR (True AND False) OR True) OR False AND True OR NOT True" => true

*/

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
    ])('knows that "%s" is %s', (input, expected) => {
      const result = BooleanCalculator.validateInput(input);

      expect(result).toBe(expected);
    });
  });

})
