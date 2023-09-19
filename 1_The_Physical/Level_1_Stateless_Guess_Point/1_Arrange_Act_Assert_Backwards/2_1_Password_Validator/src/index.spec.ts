
import { passwordValidator, CheckedPasswordResponse } from './index'


describe('password validator', () => {

  describe('knows that passwords under 5 or over 15 characters are out of range', () => {
    it.each(["Pas1", "Pas1234566778855"])(`knows that "%s" is invalid`, (data) => {
      let validationResponse: CheckedPasswordResponse = passwordValidator.validate(data);

      expect(validationResponse.result).toBeFalsy();
      expect(validationResponse.errors).toBeDefined();
      expect(validationResponse.errors.length).toBeGreaterThanOrEqual(1);
    });
  });

  describe('knows that passwords without digits are invalid', () => {
    it.each(["Password", "mom"])(`knows that "%s" is invalid`, (data) => {
      let validationResponse: CheckedPasswordResponse = passwordValidator.validate(data);

      expect(validationResponse.result).toBeFalsy();
      expect(validationResponse.errors).toBeDefined();
      expect(validationResponse.errors.length).toBeGreaterThanOrEqual(1);
    });

  });

  describe('knows that passwords without upper cases are invalid', () => {
    it.each(["mom123", "dad123"])(`knows that "%s" is invalid`, (data) => {
      let validationResponse: CheckedPasswordResponse = passwordValidator.validate(data);

      expect(validationResponse.result).toBeFalsy();
      expect(validationResponse.errors).toBeDefined();
      expect(validationResponse.errors.length).toBeGreaterThanOrEqual(1);
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
      ["pas", [{type: "NoUppercaseError"}, {type: "MissingDigitError"}, {type: "InvalidLengthError"}]],
      ["Pass", [{type: "MissingDigitError"}, {type: "InvalidLengthError"}]],
      ["123", [{type: "NoUppercaseError"}, {type: "InvalidLengthError"}]],
    ])(`knows that "%s" has multiple errors`, (password, errors) => {
      let validationResponse: CheckedPasswordResponse = passwordValidator.validate(password);

      expect(validationResponse.result).toBeFalsy();
      
      expect(validationResponse.errors).toBeDefined();
      expect(validationResponse.errors.length).toEqual(errors.length);
    });
  });
})
