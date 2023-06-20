module.exports = {
    extends: [
        '@owowagency/eslint-config-cypress-basic',
        '@owowagency/eslint-config-ts',
    ],
    rules: {
        'cypress/no-unnecessary-waiting': 'warn',
    },
};
