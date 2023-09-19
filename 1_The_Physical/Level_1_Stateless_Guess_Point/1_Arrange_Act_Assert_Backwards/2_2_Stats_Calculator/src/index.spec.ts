import { StatsCalculator } from './index';

/*
  process a sequence of integer numbers to determine the following statistics:

  Finds the minimum value in the sequence
  [0, 1, 2]
  [-1, 0, 100, 12]

  Finds the maximum value in the sequence

  Finds the number of elements in the sequence

  Calculates the average value of the sequence

  returns 0 for all values if the sequence is empty

*/

describe('stats calculator', () => {

  it('returns 0 for all values if the sequence is empty', () => {
    let series: number[] = [];
    let result = StatsCalculator.processSeries(series);
    
    expect(result.min).toBe(0);
    expect(result.max).toBe(0);
    expect(result.count).toBe(0);
    expect(result.average).toBe(0);
  });

})
