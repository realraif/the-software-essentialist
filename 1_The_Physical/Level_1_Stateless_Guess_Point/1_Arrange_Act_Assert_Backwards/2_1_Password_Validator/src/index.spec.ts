
import { passwordValidator, CheckedPasswordResponse } from './index'


describe('password validator', () => {

  describe('knows that passwords under 5 or over 15 characters are out of range', () => {
    it.each(["Pas1", "Pas1234566778855"])(`knows that "%s" is invalid`, (data) => {
      let validationResponse: CheckedPasswordResponse = passwordValidator.validate(data);

      expect(validationResponse.result).toBeFalsy();
      expect(validationResponse.errors).toBeDefined();
      expect(validationResponse.errors.length).toBeGreaterThanOrEqual(1);
      expect(validationResponse.errors.some(error => error.type === "InvalidLengthError")).toBeTruthy();
    });
  });

  describe('knows that passwords without digits are invalid', () => {
    it.each(["Password", "mom"])(`knows that "%s" is invalid`, (data) => {
      let validationResponse: CheckedPasswordResponse = passwordValidator.validate(data);

      expect(validationResponse.result).toBeFalsy();
      expect(validationResponse.errors).toBeDefined();
      expect(validationResponse.errors.length).toBeGreaterThanOrEqual(1);
      expect(validationResponse.errors.some(error => error.type === "MissingDigitError")).toBeTruthy();
    });

  });

  describe('knows that passwords without upper cases are invalid', () => {
    it.each(["mom123", "dad123"])(`knows that "%s" is invalid`, (data) => {
      let validationResponse: CheckedPasswordResponse = passwordValidator.validate(data);

      expect(validationResponse.result).toBeFalsy();
      expect(validationResponse.errors).toBeDefined();
      expect(validationResponse.errors.length).toBeGreaterThanOrEqual(1);
      expect(validationResponse.errors.some(error => error.type === "NoUppercaseError")).toBeTruthy();
    });
  });
  
    describe('knows that passwords in range of 5 to 15 charachter with digits and upper cases are valid', () => {
      it.each(["mom123A", "dad123A"])(`knows that "%s" is valid`, (data) => {
        let validationResponse: CheckedPasswordResponse = passwordValidator.validate(data);
  
        expect(validationResponse.result).toBeTruthy();
        expect(validationResponse.errors).toBeDefined();
        expect(validationResponse.errors.length).toEqual(0);
      });
    });

  describe('cathches multiple errors', () => {
    it.each([
      ["pas", ["MissingDigitError", "NoUppercaseError", "InvalidLengthError"]],
      ["Pass", ["MissingDigitError", "InvalidLengthError"]],
      ["123", ["NoUppercaseError", "InvalidLengthError"]],
    ])(`knows that "%s" has multiple errors`, (password, expectedErrors) => {
      let validationResponse: CheckedPasswordResponse = passwordValidator.validate(password);
      let errorTypes = validationResponse.errors.map(error => error.type);

      expect(validationResponse.result).toBeFalsy();
      
      expect(validationResponse.errors).toBeDefined();
      expect(validationResponse.errors.length).toEqual(expectedErrors.length);
      expect(errorTypes.every(error => expectedErrors.includes(error))).toBeTruthy();
    });
  });
})
