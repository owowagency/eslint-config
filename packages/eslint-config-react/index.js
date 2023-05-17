module.exports = {
    extends: [
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        '@owowagency/eslint-config-ts',
    ],
    settings: {
        react: {
            version: 'detect',
        },
    },
    rules: {
        'react/react-in-jsx-scope': 'off',
        'react/jsx-tag-spacing': ['error', {
            closingSlash: 'never',
            beforeSelfClosing: 'proportional-always',
            afterOpening: 'never',
            beforeClosing: 'never',
        }],
        'react/jsx-indent-props': ['error', 4],
        'jsx-quotes': ['error', 'prefer-double'],
        'react/jsx-closing-tag-location': 'error',
        'react/jsx-curly-spacing': ['error', 'never', { allowMultiline: true }],
        'react/jsx-max-props-per-line': ['error', { maximum: 1, when: 'always' }],
        'react/jsx-first-prop-new-line': ['error', 'multiline-multiprop'],
        'react/jsx-sort-props': ['error', {
            ignoreCase: true,
            callbacksLast: false,
            shorthandFirst: false,
            shorthandLast: false,
            noSortAlphabetically: false,
            reservedFirst: true,
        }],
        'react/no-deprecated': ['error'],
        'react/self-closing-comp': 'error',
        'react/jsx-wrap-multilines': ['error', {
            declaration: 'parens-new-line',
            assignment: 'parens-new-line',
            return: 'parens-new-line',
            arrow: 'parens-new-line',
            condition: 'parens-new-line',
            logical: 'parens-new-line',
            prop: 'parens-new-line',
        }],
        'react/jsx-indent': ['error', 4],
        'react/jsx-newline': ['error'],
        'react/jsx-equals-spacing': ['error', 'never'],
    },
};
