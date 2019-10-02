{
  "parser": "babel-eslint",
  "plugins": [
      "react",
      "react-native",
      "react-hooks"
  ],
  "parserOptions": {
      "ecmaFeatures": {
          "ecmaVersion": 6,
          "jsx": true,
          "modules": true
      }
  },
  "extends": [
      "eslint:recommended",
      "plugin:react/recommended",
      "airbnb"
  ],
  "rules": {
      "indent": [
          "error",
          4,
          {
              "SwitchCase": 1
          }
      ],
      "import/no-extraneous-dependencies": 0,
      "no-underscore-dangle": [
          "error",
          {
              "allow": [
                  "_root"
              ]
          }
      ],
      "react/jsx-indent-props": [
          "error",
          4
      ],
      "react/jsx-indent": [
          "error",
          4
      ],
      "arrow-body-style": "warn",
      "react/no-multi-comp": [
          "error",
          {
              "ignoreStateless": true
          }
      ],
      "react/jsx-filename-extension": [
          1,
          {
              "extensions": [
                  ".js"
              ]
          }
      ],
      "no-shadow": "off",
      "import/no-named-as-default": "off",
      "max-len": "off",
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn"
  },
  "globals": {
      "fetch": false,
      "jest": false,
      "test": false,
      "expect": false,
      "describe": false,
      "beforeEach": false,
      "afterEach": false,
      "window": false,
      "__DEV__": false
  },
  "settings": {
      "import/resolver": {
          "node": {
              "extensions": [
                  ".js"
              ],
              "paths": [
                  "src"
              ]
          }
      }
  }
}