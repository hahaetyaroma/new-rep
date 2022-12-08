module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ["standard-with-typescript", "next/core-web-vitals", "prettier"],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module"
  },
  plugins: ["prettier", "react"],
  rules: {
    "prettier/prettier": "error"
  }
};
