import { MilitatyTimeValidator } from './index';


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

  describe('validates that the minutes are valid', () => {
    it.each([
      ["01:12 - 14:32", true],
      ["01:60 - 14:32", false],
      ["01:12 - 14:72", false],
    ])('knows that "%s" returns %s', (time, expected) => {
      const isTimeValid = MilitatyTimeValidator.validate(time);

      expect(isTimeValid).toBe(expected);
    });
  });

  it('returns false for an empty string', () => {
    const isTimeValid = MilitatyTimeValidator.validate('');

    expect(isTimeValid).toBeFalsy();
  });

})
