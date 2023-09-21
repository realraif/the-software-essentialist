
const splitParenthesesReg = /(\([^)]+\))/;
const isWrappedParenthesesRegex = /^\((.*)\)$/;

export class BooleanCalculator {

  static validateSingleValue(input: string): boolean {
    const hasFalse = input.toLocaleLowerCase().includes('false');
    const hasNot = input.includes('NOT');
    return !hasFalse && !hasNot || hasFalse && hasNot;
  }

  static validateInput(input: string): boolean {
    const parenthesesArray = input.split(splitParenthesesReg);

    const conditionWithouParentheses = parenthesesArray.map((subCondition) => {
        if (isWrappedParenthesesRegex.test(subCondition)) {
          const strippedString = subCondition.substring(1, subCondition.length-1)
          return BooleanCalculator.validateInput(strippedString); 
        } else {
          return subCondition
        }
      }).join(' ');

    const orArray = conditionWithouParentheses.split(' OR ');
    
    const isTrue = orArray.some((orItem) => {
      const andArray = orItem.split(' AND ');
      return andArray.every((andItem) => {
        return BooleanCalculator.validateSingleValue(andItem);
      });
    });

    return isTrue;
  }

}
