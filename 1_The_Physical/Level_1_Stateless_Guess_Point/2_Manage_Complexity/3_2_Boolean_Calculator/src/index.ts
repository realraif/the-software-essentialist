
export class BooleanCalculator {

  static validateInput(input: string): boolean {
    const orArray = input.split(' OR ');
    const isTrue = orArray.some((orItem) => {
      const hasFalse = orItem.includes('False');
      const hasNot = orItem.includes('NOT');
      return !hasFalse && !hasNot || hasFalse && hasNot;
    });

    return isTrue;
  }

}
