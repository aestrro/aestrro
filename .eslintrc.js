module.exports = {
    root: true,
    parser: "babel-eslint",
    extends: [
        'eslint:recommended',
        'plugin:prettier/recommended'
    ],
    globals: {
        "process": true,
    },
    plugins: [ "react","prettier" ],
    rules: {
        "no-undef": "warn",
        "no-console": 0,
        "no-unused-vars": 0,
        "no-class-assign": 0,
        "no-func-assign": 0,
        "no-inner-declarations": 0,
        "no-case-declarations": 0,
        "no-redeclare": "error",
        "no-dupe-args": "warn",
        "no-prototype-builtins": 0,
        "prettier/prettier": "warn",
        "react/prop-types": 0,
        "react/jsx-no-duplicate-props": "warn",
        "react/react-in-jsx-scope": "warn",
        "react-native/no-inline-styles": 0,
        "react-hooks/exhaustive-deps": 0,
        "react/no-unescaped-entities": 0
    }
}
