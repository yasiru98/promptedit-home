import pluginVue from "eslint-plugin-vue";
import vueTsEslintConfig from "@vue/eslint-config-typescript";

// Flat config, presets first so our overrides win at the bottom.
// pluginVue handles Vue SFC parsing, vueTsEslintConfig wires up TypeScript.
export default [
  { ignores: ["dist/**", "dist-ssr/**"] },

  ...pluginVue.configs["flat/recommended"],
  ...vueTsEslintConfig(),

  {
    files: ["**/*.{ts,tsx,vue}"],
    rules: {
      // TS already catches this more accurately, base rule breaks on ambient types
      "no-undef": "off",

      "no-unreachable": "error",
      "no-redeclare": "error",
      "no-duplicate-imports": "error",

      // log is flagged, warn and error are fine to ship
      "no-console": ["warn", { allow: ["warn", "error"] }],
      "no-debugger": "error",

      // base rule doesn't understand TS, swap for the aware version
      // underscore prefix marks something as intentionally unused
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
      ],

      // forces "import type" for types, helps bundlers tree-shake
      "@typescript-eslint/consistent-type-imports": [
        "warn",
        { prefer: "type-imports" },
      ],

      // mutating props directly breaks Vue reactivity, throw hard error
      "vue/no-mutating-props": "error",
    },
  },
];
