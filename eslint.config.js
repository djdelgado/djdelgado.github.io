import parser from '@typescript-eslint/parser';
import plugin from '@typescript-eslint/eslint-plugin';
import prettier from 'eslint-config-prettier';

export default [
  { ignores: ['node_modules', 'dist', 'docs'] },
  {
    files: ['src/**/*.{ts,tsx}'],
    languageOptions: {
      parser,
      parserOptions: { project: ['./tsconfig.json'] },
    },
    plugins: { '@typescript-eslint': plugin },
    rules: {
      ...prettier.rules,
    },
  },
];
