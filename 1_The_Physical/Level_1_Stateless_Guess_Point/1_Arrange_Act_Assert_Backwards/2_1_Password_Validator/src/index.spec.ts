
import { passwordValidator } from './index'

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

  it('should know that "mom123a" is invalid', () => {
    const data = "mom123a";
    const validationResponse = passwordValidator.validate(data);

    expect(validationResponse.result).toBe(false);
    expect(validationResponse.errors).toBeDefined();
    expect(validationResponse.errors.length).toEqual(1);
    expect(validationResponse.errors[0].message).toContain('at least one upper case letter');
  });

  it('should know that "Mona" is invalid', () => {
    const data = "Mona";
    const validationResponse = passwordValidator.validate(data);

    expect(validationResponse.result).toBe(false);
    expect(validationResponse.errors).toBeDefined();
    expect(validationResponse.errors.length).toEqual(2);
    expect(validationResponse.errors[0].message).toContain('between 5 and 15');
    expect(validationResponse.errors[1].message).toContain('at least one digit');
  });

  it('should know that "Mom1234566778855" is invalid', () => {
    const data = "Mom1234566778855";
    const validationResponse = passwordValidator.validate(data);

    expect(validationResponse.result).toBe(false);
    expect(validationResponse.errors).toBeDefined();
    expect(validationResponse.errors.length).toEqual(1);
    expect(validationResponse.errors[0].message).toContain('between 5 and 15');
  });

  it('should know that "mom123A" is valid', () => {
    const data = "mom123A";
    const validationResponse = passwordValidator.validate(data);

    expect(validationResponse.result).toBe(true);
    expect(validationResponse.errors).toBeDefined();
    expect(validationResponse.errors.length).toEqual(0);
  });

})
