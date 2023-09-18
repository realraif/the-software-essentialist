
import { passwordValidator, CheckedPasswordResponse } from './index'

describe('password validator', () => {

  it.each(["mom", "Mona", "mom123", "mom123a", "Mom1234566778855"])
  (`should know that "%s" is invalid`, (data) => {
    let validationResponse: CheckedPasswordResponse = passwordValidator.validate(data);

    expect(validationResponse.result).toBeFalsy();
    expect(validationResponse.errors).toBeDefined();
    expect(validationResponse.errors.length).toBeGreaterThanOrEqual(1);
  });

  it.each(["mom123", "mom123a"])
  ('should know that "%s" lacks upper cases', (data) => {
    let validationResponse: CheckedPasswordResponse = passwordValidator.validate(data);

    expect(validationResponse.result).toBeFalsy();
    expect(validationResponse.errors).toBeDefined();
    expect(validationResponse.errors.length).toEqual(1);
    expect(validationResponse.errors[0].message).toContain('at least one upper case letter');
  });

  it('should know that "mom" contains all errors', () => {
    const data = "mom";
    let validationResponse: CheckedPasswordResponse = passwordValidator.validate(data);

    expect(validationResponse.result).toBeFalsy();
    expect(validationResponse.errors).toBeDefined();
    expect(validationResponse.errors.length).toEqual(3);
    expect(validationResponse.errors[0].message).toContain('between 5 and 15');
    expect(validationResponse.errors[1].message).toContain('at least one digit');
    expect(validationResponse.errors[2].message).toContain('at least one upper case letter');
  });

  it('should know that "Mona" contains two errors', () => {
    const data = "Mona";
    let validationResponse: CheckedPasswordResponse = passwordValidator.validate(data);

    expect(validationResponse.result).toBeFalsy();
    expect(validationResponse.errors).toBeDefined();
    expect(validationResponse.errors.length).toEqual(2);
    expect(validationResponse.errors[0].message).toContain('between 5 and 15');
    expect(validationResponse.errors[1].message).toContain('at least one digit');
  });

  it('should know that "Mom1234566778855" exceeds the maximum length', () => {
    const data = "Mom1234566778855";
    let validationResponse: CheckedPasswordResponse = passwordValidator.validate(data);

    expect(validationResponse.result).toBeFalsy();
    expect(validationResponse.errors).toBeDefined();
    expect(validationResponse.errors.length).toEqual(1);
    expect(validationResponse.errors[0].message).toContain('between 5 and 15');
  });

  it('should know that "mom123A" is valid', () => {
    const data = "mom123A";
    let validationResponse: CheckedPasswordResponse = passwordValidator.validate(data);

    expect(validationResponse.result).toBeTruthy();
    expect(validationResponse.errors).toBeDefined();
    expect(validationResponse.errors.length).toEqual(0);
  });

})
