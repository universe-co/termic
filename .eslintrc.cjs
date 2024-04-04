// https://eslint.org/docs/user-guide/configuring
module.exports = {
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking'
    ],
    root: true,
    ignorePatterns: ["/dist/**", "/build/*", "/node_modules/*", "/docs*"],
    rules: {
        semi: ["error", "always"],
        quotes: ["error", "double"],
        indent: ["error", "tab"],
        "@typescript-eslint/no-inferrable-types": "off",
        "@typescript-eslint/naming-convention": ["error",
            {
                "selector": "variable", "format": ["snake_case", "camelCase", "PascalCase"], "leadingUnderscore": "allow"
            }
        ]
    },
    parserOptions: {
        tsconfigRootDir: __dirname,
        project: ['./tsconfig.json'],
        sourceType: "module",
        ecmaVersion: 2022
    }
};
