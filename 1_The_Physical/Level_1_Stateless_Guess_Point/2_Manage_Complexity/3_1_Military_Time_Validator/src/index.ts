
export class MilitatyTimeValidator {
  static validate(timeRange: string): boolean {
    const timesArray = timeRange.split(' - ');
    const hasTwoTimes = timesArray.length === 2;
    const areTimesDifferent = timesArray[0] !== timesArray[1];
    const isTimeFormat = timesArray.every((time) => {
      return time.match(/^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/);
    });

    return hasTwoTimes && isTimeFormat && areTimesDifferent;
  }
}
