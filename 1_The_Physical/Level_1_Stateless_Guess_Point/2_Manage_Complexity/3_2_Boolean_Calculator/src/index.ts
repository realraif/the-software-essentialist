
export class BooleanCalculator {

  static validateInput(input: string): boolean {
    const orArray = input.split(' OR ');
    const isTrue = orArray.some((orItem) => !orItem.includes('False'));

    return isTrue;
  }

}
