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


  it('knows that "True" is true', () => {
    const result = BooleanCalculator.validateInput('True');

    expect(result).toBeTruthy();
  });

  it('knows that "False" is false', () => {
    const result = BooleanCalculator.validateInput('False');

    expect(result).toBeFalsy();
  });

})
