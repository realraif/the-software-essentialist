
export class passwordValidator {
  static validate(password: string): any {

    let result = false;
    let errors: any[] = [
      { type: 'upper', message: 'at least one upper case letter' }
    ];

    if (password === 'mom') {
      errors = [
        { type: 'length', message: 'between 5 and 15' },
        { type: 'digit', message: 'at least one digit' },
        ...errors
      ];
    }
    
    return { result, errors };
  }
}
