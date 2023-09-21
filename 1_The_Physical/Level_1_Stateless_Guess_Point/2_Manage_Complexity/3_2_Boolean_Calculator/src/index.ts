
const splitParenthesesReg = /(\([^)]+\))/;
const isWrappedParenthesesReg = /^\((.*)\)$/;
const isValidFormatReg = /^(\(*\s*(True|False|NOT|AND|OR)\s*\)*)+$/;


export class BooleanCalculator {

  static validateSingleValue(input: string): boolean {
    const hasFalse = input.toLocaleLowerCase().includes('false');
    const hasNot = input.includes('NOT');
    return !hasFalse && !hasNot || hasFalse && hasNot;
  }

  static validateParentheses(input: string): string {
    const parenthesesArray = input.split(splitParenthesesReg);

    const noParanthesesArray = parenthesesArray.map((subCondition) => {
        if (isWrappedParenthesesReg.test(subCondition)) {
          const strippedString = subCondition.substring(1, subCondition.length-1)
          return BooleanCalculator.validateExpression(strippedString); 
        } else {
          return subCondition
        }
      });

    return noParanthesesArray.join(' ');
  }

  static validateExpression(conditionalExpression: string): boolean {
    if (!isValidFormatReg.test(conditionalExpression)) {
      throw new Error('Invalid expression format');
    }

    const conditionWithouParentheses = BooleanCalculator.validateParentheses(conditionalExpression);
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
