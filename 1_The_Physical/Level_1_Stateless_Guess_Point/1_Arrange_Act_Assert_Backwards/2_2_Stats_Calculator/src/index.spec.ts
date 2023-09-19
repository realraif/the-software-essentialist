import { StatsCalculator } from './index';


describe('stats calculator', () => {

  it('returns 0 for all values if the sequence is empty', () => {
    let series: number[] = [];
    let result = StatsCalculator.processSeries(series);

    expect(result.min).toBe(0);
    expect(result.max).toBe(0);
    expect(result.count).toBe(0);
    expect(result.average).toBe(0);
  });


  describe('finds the minimum value in the sequence', () => {

    it.each([
      [[0, 1, 2], 0],
      [[-1, 0, 100, 12], -1]
    ])('knows that the min value of %p is %i', (series: number[], expected: number) => {
      let result = StatsCalculator.processSeries(series);

      expect(result.min).toBe(expected);
    });

  });

  describe('finds the maximum value in the sequence', () => {
    it.each([
      [[0, 1, 2], 2],
      [[-1, 0, 100, 12], 100]
    ])('knows that the max value of %p is %i', (series: number[], expected: number) => {
      let result = StatsCalculator.processSeries(series);

      expect(result.max).toBe(expected);
    });
  });

  describe('finds the number of elements in the sequence', () => {
    it.each([
      [[0, 1, 2], 3],
      [[-1, 0, 100, 12], 4]
    ])('knows that the count of %p is %i', (series: number[], expected: number) => {
      let result = StatsCalculator.processSeries(series);

      expect(result.count).toBe(expected);
    });
  });

  describe('calculates the average value of the sequence', () => {
    it.each([
      [[0, 1, 2], 1],
      [[-1, 0, 100, 12], 27.75]
    ])('knows that the average of %p is %i', (series: number[], expected: number) => {
      let result = StatsCalculator.processSeries(series);

      expect(result.average).toBe(expected);
    });
  });

})
