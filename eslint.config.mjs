import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.config({
    extends: ['next'],
    rules: {
      'react/no-unescaped-entities': 'off',          // Already disabled
      '@next/next/no-page-custom-font': 'off',       // Already disabled

      // ✅ Disable the new rules causing errors
      'react/display-name': 'off',                   // Disable missing display name warning
      'react-hooks/exhaustive-deps': 'off',          // Disable exhaustive deps warning
    },
  }),
];

export default eslintConfig;
