module.exports = {
    extends: ['airbnb', 'plugin:prettier/recommended', 'prettier/react'],
    parser: 'babel-eslint',
    rules: {
        'import/prefer-default-export': 'off',
        'no-console': 'off',
        'prefer-destructuring': 'off',
        'prefer-template': 'off',
        'react/destructuring-assignment': 'off'
    }
};
