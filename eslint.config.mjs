import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";
import daStyle from 'eslint-config-dicodingacademy';

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs}"], plugins: { js },
    daStyle,
    extends: ["js/recommended"], languageOptions: { globals: { ...globals.browser, ...globals.node } }
  },
]);
