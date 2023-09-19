
export type CalcResponse = {
  min: number;
  max: number;
  count: number;
  average: number;
}

export class StatsCalculator {
  static processSeries(series: number[]): CalcResponse {

    return {
      min: 0,
      max: 0,
      count: 0,
      average: 0
    }
  }
}
