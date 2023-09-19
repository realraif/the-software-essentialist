
export type CalcResponse = {
  min: number;
  max: number;
  count: number;
  average: number;
}


function findMin(series: number[]): number {
  return series.reduce((acc, curr) => {
    if (curr < acc) {
      return curr;
    }
    return acc;
  }, 0);
}

function findMax(series: number[]): number {
  return series.reduce((acc, curr) => {
    if (curr > acc) {
      return curr;
    }
    return acc;
  }, 0);
}

export class StatsCalculator {

  static processSeries(series: number[]): CalcResponse {
    const min = findMin(series);
    const max = findMax(series);

    return {
      min,
      max,
      count: 0,
      average: 0
    }
  }

}
