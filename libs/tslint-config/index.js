module.exports = {
  'rulesDirectory': [
    'codelyzer',
    'tslint-plugin-prettier'
  ],
  'rules': {
    'prettier/prettier': [
      2,
      {
        'singleQuote': true,
        'printWidth': 100
      }
    ],
    'arrow-return-shorthand': true,
    'binary-expression-operand-order': true,
    'callable-types': true,
    'class-name': true,
    'comment-format': [
      true,
      'check-space'
    ],
    'curly': true,
    'deprecation': {
      'severity': 'warn'
    },
    'forin': true,
    'handle-callback-err': [
      true,
      '^.*(e|E)rr'
    ],
    'interface-name': [
      true,
      'never-prefix'
    ],
    'interface-over-type-literal': true,
    'label-position': true,
    'member-access': false,
    'member-ordering': [
      true,
      {
        'order': [
          'static-field',
          'instance-field',
          'static-method',
          'instance-method'
        ]
      }
    ],
    'newline-before-return': true,
    'no-arg': true,
    'no-bitwise': true,
    'no-console': [
      true,
      'debug',
      'info',
      'time',
      'timeEnd',
      'trace'
    ],
    'no-construct': true,
    'no-debugger': true,
    'no-duplicate-super': true,
    'no-empty': false,
    'no-empty-interface': true,
    'no-eval': true,
    'no-inferrable-types': [
      true,
      'ignore-params'
    ],
    'no-invalid-this': true,
    'no-misused-new': true,
    'no-non-null-assertion': true,
    'no-shadowed-variable': true,
    'no-string-literal': false,
    'no-string-throw': true,
    'no-switch-case-fall-through': true,
    'no-unnecessary-initializer': true,
    'no-unused-expression': true,
    'no-use-before-declare': true,
    'no-var-keyword': true,
    'object-literal-sort-keys': false,
    'prefer-const': true,
    'radix': true,
    'triple-equals': [
      true,
      'allow-null-check'
    ],
    'unified-signatures': true,
    'valid-jsdoc': true,
    'variable-name': false,
    'directive-selector': [
      true,
      'attribute',
      'app',
      'camelCase'
    ],
    'component-selector': [
      true,
      'element',
      'app',
      'kebab-case'
    ],
    'no-output-on-prefix': true,
    'use-input-property-decorator': true,
    'use-output-property-decorator': true,
    'use-host-property-decorator': true,
    'no-input-rename': true,
    'no-output-rename': true,
    'use-life-cycle-interface': true,
    'use-pipe-transform-interface': true,
    'component-class-suffix': true,
    'directive-class-suffix': true
  },
  'extends': [
    'tslint:recommended',
    'tslint-eslint-rules',
    'tslint-config-prettier'
  ],
  'linterOptions': {
    'exclude': [
      ' /**/polyfills.ts'
    ]
  }
}
