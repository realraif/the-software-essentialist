
type validationErrorType = 'InvalidLengthError' | 'MissingDigitError' | 'NoUppercaseError';

type ValidationError = {
  type: validationErrorType;
  message: string;
}

export type CheckedPasswordResponse = {
  result: boolean;
  errors: ValidationError[]
}


export class passwordValidator {
  static validate(password: string): CheckedPasswordResponse {

    let errors: any[] = [];

    let isBetween5And15 = (password.length >= 5 && password.length <= 15);
    let hasAtLeastOneDigit = /\d/.test(password);
    let hasAtLeastOneUppercase = /[A-Z]/.test(password);

    if (!isBetween5And15) {
      errors.push({ type: 'InvalidLengthError', message: 'password should be between 5 and 15 characters long' });
    }
    if (!hasAtLeastOneDigit) {
      errors.push({ type: 'MissingDigitError', message: 'password should have at least one digit' });
    }
    if (!hasAtLeastOneUppercase) {
      errors.push({ type: 'NoUppercaseError', message: 'password should have at least one upper case letter' });
    }
    
    return { 
      result: errors.length == 0,
      errors
    };
  }
}
