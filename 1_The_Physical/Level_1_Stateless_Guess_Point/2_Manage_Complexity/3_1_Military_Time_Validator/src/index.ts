
export class MilitatyTimeValidator {
  static validate(timeRange: string): boolean {
    let timesArray = timeRange.split(' - ');
    
    return timesArray.length === 2;
  }
}
