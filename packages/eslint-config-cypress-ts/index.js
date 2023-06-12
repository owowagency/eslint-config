module.exports = {
    extends: [
        '@owowagency/eslint-config-ts',
        'plugin:cypress/recommended',
    ],
    rules: {
        'cypress/no-unnecessary-waiting': 'warn',
    },
};
