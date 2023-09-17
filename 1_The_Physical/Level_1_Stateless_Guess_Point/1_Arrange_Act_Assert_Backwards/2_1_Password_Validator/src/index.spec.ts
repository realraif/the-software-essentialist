
import { passwordValidator } from './index'

/*

  validate password

  criteria:
Between 5 and 15 characters long
Contains at least one digit
Contains at least one upper case letter

examples:
mom -> false
mom123 -> false
mom123A -> true

Return an object
containing a boolean result
an errors key that contains an error message or type for all errors in occurrence.

example:
{
  result: false,
  errors: [
    { type: 'length', message: 'between 5 and 15' },
    { type: 'digit', message: 'at least one digit' },
    { type: 'upper', message: 'at least one upper case letter' }
  ]
}

*/

describe('password validator', () => {

  it('should know that "mom" is invalid', () => {
    const data = "mom";
    const validationResponse = passwordValidator.validate(data);

    expect(validationResponse.result).toBe(false);
    expect(validationResponse.errors).toBeDefined();
    expect(validationResponse.errors.length).toEqual(3);
    expect(validationResponse.errors[0].message).toContain('between 5 and 15');
    expect(validationResponse.errors[1].message).toContain('at least one digit');
    expect(validationResponse.errors[2].message).toContain('at least one upper case letter');
  });

  it('should know that "mom123" is invalid', () => {
    const data = "mom123";
    const validationResponse = passwordValidator.validate(data);

    expect(validationResponse.result).toBe(false);
    expect(validationResponse.errors).toBeDefined();
    expect(validationResponse.errors.length).toEqual(1);
    expect(validationResponse.errors[0].message).toContain('at least one upper case letter');
  });

})
