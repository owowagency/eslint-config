module.exports = {
    overrides: [
        {
            files: ['*.vue'],
            parser: 'vue-eslint-parser',
            parserOptions: {
                parser: '@typescript-eslint/parser',
            },
            rules: {
                'no-unused-vars': 'off',
                'no-undef': 'off',
                '@typescript-eslint/no-unused-vars': 'off',
            },
        },
    ],
    extends: [
        'plugin:vue/vue3-recommended',
    ],
    rules: {
        'vue/attributes-order': ['error', { alphabetical: true }],
        'vue/html-indent': ['error', 4],
        'vue/multi-word-component-names': 'off',
        'vue/no-v-html': 'off',
        'vue/padding-line-between-tags': 'error',
        'vue/component-tags-order': ['error', { order: ['script', 'template', 'style'] }],
    },
};
