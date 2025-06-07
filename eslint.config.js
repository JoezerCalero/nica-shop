import js from "@eslint/js";
import globals from "globals";
import pluginReact from "eslint-plugin-react";
import json from "@eslint/json";
import markdown from "@eslint/markdown";
import css from "@eslint/css";
import { defineConfig } from "eslint/config";
import eslintConfigPrettier from "eslint-config-prettier";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    plugins: { js },
    extends: ["eslint:recommended"],
    languageOptions: {
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
  },

  pluginReact.configs.flat.recommended,

  eslintConfigPrettier,
  eslintPluginPrettierRecommended,

  {
    files: ["**/*.json", "**/*.jsonc", "**/*.json5"],
    plugins: { json },
    languageOptions: {
      parser: json.parsers.json,
    },
    extends: ["plugin:json/recommended"],
  },

  {
    files: ["**/*.md"],
    plugins: { markdown },
    languageOptions: {
      parser: markdown.parsers.markdown,
    },
    extends: ["plugin:markdown/recommended"],
  },

  {
    files: ["**/*.css"],
    plugins: { css },
    languageOptions: {
      parser: css.parsers.css,
    },
    extends: ["plugin:css/recommended"],
  },
]);
