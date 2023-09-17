
import { passwordValidator } from './index'

/*

  validate password

  criteria:
Between 5 and 15 characters long
Contains at least one digit
Contains at least one upper case letter

examples:
mom -> false
mom123 -> false
mom123A -> true

Return an object
containing a boolean result
an errors key that contains an error message or type for all errors in occurrence.

example:
{
  result: false,
  errors: [
    { type: 'length', message: 'between 5 and 15' },
    { type: 'digit', message: 'at least one digit' },
    { type: 'upper', message: 'at least one upper case letter' }
  ]
}

*/

describe('password validator', () => {

  test('hello', () => {
    expect("between 5 and 15").toContain('5 and 15')
  })
})

