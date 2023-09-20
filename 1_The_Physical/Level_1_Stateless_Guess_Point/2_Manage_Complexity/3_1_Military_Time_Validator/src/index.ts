
export class MilitatyTimeValidator {
  static validate(timeRange: string): boolean {

    return timeRange.includes('-');
  }
}
