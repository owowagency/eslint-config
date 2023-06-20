module.exports = {
    extends: [
        '@owowagency/eslint-config-basic',
        'plugin:cypress/recommended',
    ],
    rules: {
        'cypress/no-unnecessary-waiting': 'warn',
    },
};
