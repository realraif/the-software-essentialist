
export class MilitatyTimeValidator {
  static validate(timeRange: string): boolean {
    const timesArray = timeRange.split(' - ');
    const hasTwoTimes = timesArray.length === 2;
    const areTimesDifferent = timesArray[0] !== timesArray[1];
    const isTimeFormat = timesArray.every((time) => {
      return time.match(/^(\d{2}:\d{2})$/);
    });

    return hasTwoTimes && isTimeFormat && areTimesDifferent;
  }
}
