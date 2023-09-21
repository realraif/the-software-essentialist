
export class BooleanCalculator {

  static validateInput(input: string): boolean {
    const isTrue = !input.includes('False');

    return isTrue;
  }

}
