import { createESLintRule } from '../utils'

export const RULE_NAME = 'import-duplicate'
type MessageIds = 'importDuplicate'
type Options = []

export default createESLintRule<Options, MessageIds>({
  name: RULE_NAME,
  meta: {
    type: 'problem',
    docs: {
      description: 'Fix duplication in imports',
    },
    fixable: 'code',
    schema: [],
    messages: {
      importDuplicate: 'Expect newline after if',
    },
  },
  defaultOptions: [],
  create: (context) => {
    return {
      ImportDeclaration(node) {
        if (node.specifiers.length <= 1)
          return

        const names = new Set<string>()
        node.specifiers.forEach((specifier) => {
          const id = specifier.local.name
          if (names.has(id)) {
            context.report({
              node,
              loc: {
                start: specifier.loc.end,
                end: specifier.loc.start,
              },
              messageId: 'importDuplicate',
              fix(fixer) {
                const s = specifier.range[0]
                let e = specifier.range[1]
                if (context.sourceCode.text[e] === ',')
                  e += 1
                return fixer.removeRange([s, e])
              },
            })
          }
          names.add(id)
        })
      },
    }
  },
},
)
