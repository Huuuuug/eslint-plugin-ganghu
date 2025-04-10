import { run } from '../_test'
import rule, { RULE_NAME } from './if-newline'

const valid = [
  `if (true)
  console.log('hello')
  `,
  `if (true) {
  console.log('hello')
  }`,
]

const invalid = [
  [`if (true) console.log(\'hello\')`, `if (true) \nconsole.log(\'hello\')`],
]

run({
  name: RULE_NAME,
  rule,
  valid,
  invalid: invalid.map(i => ({
    code: i[0],
    output: i[1],
    errors: [{ messageId: 'missingIfNewline' }],
  })),
})
