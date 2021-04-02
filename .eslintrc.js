module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
    node: true
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2020,
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json']
  },
  plugins: ['react-hooks', 'react', '@typescript-eslint', 'jsx-a11y', 'import', 'prettier', 'unused-imports'],
  settings: {
    react: {
      version: 'detect'
    }
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    // 'plugin:import/errors',
    // 'plugin:import/warnings',
    'plugin:import/typescript'
  ],
  rules: {
    // 'no-unused-vars': 'off',
    'react/prop-types': 'off',
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        specialLink: ['hrefLeft', 'hrefRight'],
        aspects: ['invalidHref', 'preferButton']
      }
    ],
    'import/no-named-as-default': [1],
    'import/no-named-as-default-member': [1],
    'import/no-duplicates': [1],
    'import/named': [2],
    'import/namespace': [2],
    'import/default': [2],
    'import/export': [2],
    'import/order': ['error'],
    '@typescript-eslint/no-unused-vars': 'off',
    'unused-imports/no-unused-imports-ts': 'warn'
  }
}
