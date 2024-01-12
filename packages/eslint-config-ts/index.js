module.exports = {
    extends: [
        'plugin:import/typescript',
        'plugin:@typescript-eslint/recommended',
        '@owowagency/eslint-config-basic',
    ],
    settings: {
        'import/resolver': {
            node: { extensions: ['.js', '.jsx', '.mjs', '.ts', '.tsx', '.d.ts'] },
        },
    },
    rules: {
        'no-undef': 'off',
        'import/named': 'off',

        // TS
        '@typescript-eslint/ban-ts-comment': ['error', { 'ts-ignore': 'allow-with-description' }],
        '@typescript-eslint/type-annotation-spacing': ['error', {}],
        '@typescript-eslint/consistent-type-imports': [
            'error',
            { prefer: 'type-imports', disallowTypeAnnotations: false },
        ],
        '@typescript-eslint/prefer-ts-expect-error': 'error',
        '@typescript-eslint/no-require-imports': 'error',

        // Override JS
        'no-useless-constructor': 'off',
        indent: 'off',
        '@typescript-eslint/indent': 'off',
        'no-invalid-this': 'off',
        '@typescript-eslint/no-invalid-this': 'off',
        'no-redeclare': 'off',
        '@typescript-eslint/no-redeclare': 'error',
        'no-use-before-define': 'off',
        '@typescript-eslint/no-use-before-define': [
            'error',
            { functions: false, classes: false, variables: true },
        ],
        'brace-style': 'off',
        '@typescript-eslint/brace-style': ['error', '1tbs', { allowSingleLine: false }],
        'comma-dangle': 'off',
        '@typescript-eslint/comma-dangle': ['error', 'always-multiline'],
        'object-curly-spacing': 'off',
        '@typescript-eslint/object-curly-spacing': ['error', 'always'],
        semi: 'off',
        '@typescript-eslint/semi': ['error', 'always'],
        quotes: 'off',
        '@typescript-eslint/quotes': 'off',
        'space-before-blocks': 'off',
        '@typescript-eslint/space-before-blocks': ['error', 'always'],
        'space-before-function-paren': 'off',
        '@typescript-eslint/space-before-function-paren': [
            'error',
            {
                anonymous: 'always',
                named: 'never',
                asyncArrow: 'always',
            },
        ],
        'space-infix-ops': 'off',
        '@typescript-eslint/space-infix-ops': 'error',
        'keyword-spacing': 'off',
        '@typescript-eslint/keyword-spacing': ['error', { before: true, after: true }],
        'comma-spacing': 'off',
        '@typescript-eslint/comma-spacing': ['error', { before: false, after: true }],
        'no-extra-parens': 'off',
        '@typescript-eslint/no-extra-parens': ['error', 'functions'],
        'no-dupe-class-members': 'off',
        '@typescript-eslint/no-dupe-class-members': 'error',
        'no-loss-of-precision': 'off',
        '@typescript-eslint/no-loss-of-precision': 'error',
        'lines-between-class-members': 'off',
        '@typescript-eslint/member-delimiter-style': 'off',
        '@typescript-eslint/lines-between-class-members': [
            'error',
            'always',
            { exceptAfterSingleLine: true },
        ],
        // off
        '@typescript-eslint/consistent-indexed-object-style': 'off',
        '@typescript-eslint/naming-convention': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/explicit-member-accessibility': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/triple-slash-reference': 'off',
        // handled by unused-imports/no-unused-imports
        '@typescript-eslint/no-unused-vars': 'off',
        '@typescript-eslint/no-inferrable-types': 'off',
    },
};
