
export class BooleanCalculator {

  static validateSingleValue(input: string): boolean {
    const hasFalse = input.includes('False');
    const hasNot = input.includes('NOT');
    return !hasFalse && !hasNot || hasFalse && hasNot;
  }


  static validateInput(input: string): boolean {
    const orArray = input.split(' OR ');
    
    const isTrue = orArray.some((orItem) => {
      const andArray = orItem.split(' AND ');
      return andArray.every((andItem) => {
        return BooleanCalculator.validateSingleValue(andItem);
      });
    });

    return isTrue;
  }

}
