import js from "@eslint/js"
import { FlatCompat } from "@eslint/eslintrc"
import { createRequire } from "node:module"
import path from "node:path"
import { fileURLToPath } from "node:url"

const require = createRequire(import.meta.url)
const __dirname = path.dirname(fileURLToPath(import.meta.url))

const compat = new FlatCompat({
  baseDirectory: __dirname
})

const nextLikeConfig = {
  extends: [
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:@next/next/recommended"
  ],
  plugins: ["import", "react", "jsx-a11y"],
  rules: {
    "import/no-anonymous-default-export": "warn",
    "react/no-unknown-property": "off",
    "react/react-in-jsx-scope": "off",
    "react/prop-types": "off",
    "jsx-a11y/alt-text": [
      "warn",
      {
        elements: ["img"],
        img: ["Image"]
      }
    ],
    "jsx-a11y/aria-props": "warn",
    "jsx-a11y/aria-proptypes": "warn",
    "jsx-a11y/aria-unsupported-elements": "warn",
    "jsx-a11y/role-has-required-aria-props": "warn",
    "jsx-a11y/role-supports-aria-props": "warn",
    "react/jsx-no-target-blank": "off",
    "@next/next/no-img-element": "off"
  },
  parser: require.resolve("eslint-config-next/parser.js"),
  parserOptions: {
    requireConfigFile: false,
    sourceType: "module",
    allowImportExportEverywhere: true,
    babelOptions: {
      presets: ["next/babel"],
      caller: {
        supportsTopLevelAwait: true
      }
    }
  },
  overrides: [
    {
      files: ["**/*.ts?(x)"],
      parser: "@typescript-eslint/parser",
      parserOptions: {
        sourceType: "module"
      }
    }
  ],
  settings: {
    react: {
      version: "detect"
    },
    "import/parsers": {
      [require.resolve("@typescript-eslint/parser")]: [
        ".ts",
        ".mts",
        ".cts",
        ".tsx",
        ".d.ts"
      ]
    },
    "import/resolver": {
      [require.resolve("eslint-import-resolver-node")]: {
        extensions: [".js", ".jsx", ".ts", ".tsx"]
      },
      [require.resolve("eslint-import-resolver-typescript")]: {
        alwaysTryTypes: true
      }
    }
  },
  env: {
    browser: true,
    node: true
  }
}

const jestGlobals = {
  afterAll: "readonly",
  afterEach: "readonly",
  beforeAll: "readonly",
  beforeEach: "readonly",
  describe: "readonly",
  expect: "readonly",
  it: "readonly",
  jest: "readonly",
  test: "readonly"
}

const config = [
  {
    ignores: [
      ".next/**",
      "node_modules/**",
      "out/**",
      "test-results/**",
      "coverage/**"
    ]
  },
  js.configs.recommended,
  ...compat.config(nextLikeConfig),
  {
    files: [
      "**/__tests__/**/*.{js,jsx,ts,tsx}",
      "**/*.test.{js,jsx,ts,tsx}"
    ],
    languageOptions: {
      globals: jestGlobals
    }
  }
]

export default config
