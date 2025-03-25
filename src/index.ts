import type { ESLint } from 'eslint'
import { version } from '../package.json'
import ifNewline from './rules/if-newline'

const plugin: ESLint.Plugin = {
  meta: {
    name: 'ganghu',
    version,
  },
  rules: {
    'if-newline': ifNewline,
  },
}

export default plugin
