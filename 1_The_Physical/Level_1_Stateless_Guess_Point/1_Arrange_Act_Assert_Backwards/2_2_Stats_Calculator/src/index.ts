
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

function findAverage(series: number[]): number {
  if (series.length === 0) return 0;
  
  return series.reduce((acc, curr) => acc + curr, 0) / series.length;
}

export class StatsCalculator {

  static processSeries(series: number[]): CalcResponse {
    const min = findMin(series);
    const max = findMax(series);
    const count = series.length;
    const average = findAverage(series);

    return {
      min,
      max,
      count,
      average
    }
  }

}
