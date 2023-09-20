
const isTimeFormat = (time: string): boolean => time.match(/^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/) !== null;

export class MilitatyTimeValidator {
  static validate(timeRange: string): boolean {
    const timesArray = timeRange.split(' - ');
    const hasTwoTimes = timesArray.length === 2;
    const areTimesDifferent = timesArray[0] !== timesArray[1];
    const areAllTimesValid = timesArray.every((time) => isTimeFormat(time));

    return hasTwoTimes && areTimesDifferent && areAllTimesValid;
  }
}
