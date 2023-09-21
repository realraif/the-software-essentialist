
export class BooleanCalculator {

  static validateInput(input: string): boolean {
    const orArray = input.split(' OR ');
    
    const isTrue = orArray.some((orItem) => {
      const andArray = orItem.split(' AND ');

      return andArray.every((andItem) => {
        const hasFalse = andItem.includes('False');
        const hasNot = andItem.includes('NOT');
        return !hasFalse && !hasNot || hasFalse && hasNot;
      });
    });

    return isTrue;
  }

}
