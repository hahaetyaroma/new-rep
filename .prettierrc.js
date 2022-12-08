module.exports = {
  $schema: "https://json.schemastore.org/prettierrc",
  tabWidth: 2,
  printWidth: 80,
  // semi: false,
  // useTabs: true,
  singleQuote: false,
  bracketSpacing: true,
  bracketSameLine: false,
  singleAttributePerLine: true,
  arrowParens: "always",
  trailingComma: "none",
  quoteProps: "as-needed",
  endOfLine: "lf",
  overrides: [
    {
      files: ".*rc",
      options: {
        parser: "json"
      }
    }
  ],
  importOrder: [
    "^node:(.*)$",
    "^(react|next(.*))$",
    "<THIRD_PARTY_MODULES>",
    "^~/(.*)$",
    "^(.*)(sass|css|scss)$",
    "^components/(.*)$",
    "^[./]"
  ],
  importOrderSeparation: true,
  importOrderCaseInsensitive: true,
  importOrderSortSpecifiers: true,
  importOrderParserPlugins: [
    "classProperties",
    "decorators-legacy",
    "jsx",
    "typescript"
  ]
};
