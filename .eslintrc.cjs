module.exports = {
    extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:@typescript-eslint/recommended-requiring-type-checking',
    ],
    root: true,
    ignorePatterns: ["/dist/**", "/build/*", "/node_modules/*", "/docs*"],
    rules: {
        semi: ["error", "always"],
        quotes: ["error", "double"],
        indent: ["error", "tab"],
        "@typescript-eslint/no-inferrable-types": "off",
    },
    parserOptions: {
        tsconfigRootDir: __dirname,
        project: ['./tsconfig.json'],
        sourceType: "module",
        ecmaVersion: 2022
    }
};