import ganghu from '@ganghu/eslint-config'

export default ganghu(
  {
    typescript: {
      overrides: {
        'no-console': 'warn',
      },
    },
    vue: true,
  },
)
