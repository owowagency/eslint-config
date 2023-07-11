module.exports = {
    extends: [
        '@owowagency/eslint-config-basic',
        'plugin:cypress/recommended',
        'prettier',
    ],
    plugins: ['no-only-tests'],
    rules: {
        'cypress/no-unnecessary-waiting': 'warn',
        'no-only-tests/no-only-tests': 'error',
    },
};
