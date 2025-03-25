import ganghu from '@ganghu/eslint-config'
import pluginGanghu from './src'

export default ganghu(
  {
    typescript: true,
  },
  {
    name: 'ganghu',
    plugins: {
      ganghu: pluginGanghu,
    },
    rules: {
      'ganghu/if-newline': 'error',
    },
  },
)
