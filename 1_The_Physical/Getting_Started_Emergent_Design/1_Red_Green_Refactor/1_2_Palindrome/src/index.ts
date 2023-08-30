
export const palindromeChecker = (str: string): boolean => {
  str = str.toLocaleLowerCase().replace(/\s/g, '');
  const revereStr = str.split('').reverse().join('');
  return str === revereStr;
}
