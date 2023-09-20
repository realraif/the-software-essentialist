import { MilitatyTimeValidator } from './index';

/*
Write a function (or a stateless class)
capable of validating whether a string time range
is a valid military time range or not.

validate that the string has a dash
"01:12 - 14:32" (yes)
"01:12" (no)
"01:12 14:32" (no)
"12:12 - 14:32" (yes)

validate that the string has a time format
"01:12 - 14:32" (yes)
"01:12 - 14:32:12" (no)
"01:12 - 14:32:12:12" (no)
")1 12 - 14:32" (no)

validate that the string has two times
"01:12 - 14:32" (yes)
"01:12" (no)
"01:12 - 14:32 - 15:32" (no)

validate that the first time is not the same as the second time
"01:12 - 14:32" (yes)
"01:12 - 01:12" (no)

validate that the 24 hour time is valid
"01:12 - 14:32" (yes)
"25:12 - 14:32" (no)
"01:12 - 24:32" (no)

validate that the minutes are valid
"01:12 - 14:32" (yes)
"01:60 - 14:32" (no)
"01:12 - 14:60" (no)

*/

describe('military time validator', () => {

  describe('validates that a string has a dash', () => {
    it.each([
      ["01:12 - 14:32", true],
      ["01:12", false],
      ["01:12 14:32", false],
    ])('knows that "%s" returns %s', (time, expected) => {
      const isTimeValid = MilitatyTimeValidator.validate(time);

      expect(isTimeValid).toBe(expected);
    });
  });

  describe('validates that a string has two times', () => {
    it.each([
      ["01:12 - 14:32", true],
      ["01:12", false],
      ["01:12 - 14:32 - 15:32", false],
    ])('knows that "%s" returns %s', (time, expected) => {
      const isTimeValid = MilitatyTimeValidator.validate(time);
      
      expect(isTimeValid).toBe(expected);
    });
  });

  describe('validates that a string has a time format', () => {
    it.each([
      ["01:12 - 14:32", true],
      ["01:12 - 14:32:12", false],
      ["01:12 - 14:32:12:12", false],
      [")1 12 - 14:32", false],
    ])('knows that "%s" returns %s', (time, expected) => {
      const isTimeValid = MilitatyTimeValidator.validate(time);

      expect(isTimeValid).toBe(expected);
    });
  });
  
  describe('validates that the first time is not the same as the second time', () => {
    it.each([
      ["01:12 - 14:32", true],
      ["01:12 - 01:12", false],
    ])('knows that "%s" returns %s', (time, expected) => {
      const isTimeValid = MilitatyTimeValidator.validate(time);

      expect(isTimeValid).toBe(expected);
    });
  });

  describe('validates that the 24 hour time is valid', () => {
    it.each([
      ["01:12 - 14:32", true],
      ["25:12 - 14:32", false],
      ["01:12 - 24:32", false],
    ])('knows that "%s" returns %s', (time, expected) => {
      const isTimeValid = MilitatyTimeValidator.validate(time);

      expect(isTimeValid).toBe(expected);
    });
  });

  it('knows that for "01:12 - 14:32" the minutes are valid', () => {
    const isTimeValid = MilitatyTimeValidator.validate("01:12 - 14:32");

    expect(isTimeValid).toBe(true);
  });

  it('knows that for "01:60 - 14:32" the minutes are not valid', () => {
    const isTimeValid = MilitatyTimeValidator.validate("01:60 - 14:32");

    expect(isTimeValid).toBe(false);
  });

})
