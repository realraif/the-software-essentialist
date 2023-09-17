
export class passwordValidator {
  static validate(password: string): any {

    let result = true;
    let errors: any[] = [];

    if (password.length < 5 || password.length > 15) {
      result = false;
      errors.push({ type: 'length', message: 'between 5 and 15' });
    }
    if (!/\d/.test(password)) {
      result = false;
      errors.push({ type: 'digit', message: 'at least one digit' });
    }
    if (!/[A-Z]/.test(password)) {
      result = false;
      errors.push({ type: 'upper', message: 'at least one upper case letter' });
    }
    
    return { result, errors };
  }
}
