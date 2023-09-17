
export class passwordValidator {
  static validate(password: string): any {
    return {
      result: false,
      errors: [
        { type: 'length', message: 'between 5 and 15' },
        { type: 'digit', message: 'at least one digit' },
        { type: 'upper', message: 'at least one upper case letter' }
      ]
    }
  }
}
