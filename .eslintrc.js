module.exports = {
  "env": {
    "node":     true,
    "commonjs": true,
    "es2021":   true
  },
  "extends":       "eslint:recommended",
  "parserOptions": {
    "ecmaVersion": 12
  },
  "rules": {
    "array-bracket-newline": ["error", { "minItems": 5 }],
    "array-element-newline": ["error", { "minItems": 5 }],
    "capitalized-comments":  ["error", "always", { "ignoreConsecutiveComments": true }],
    "indent":                ["error", 2],
    "key-spacing":           ["error", {
      "multiLine": {
        "beforeColon": false,
        "afterColon":  true
      },
      "align": {
        "beforeColon": false,
        "afterColon":  true,
        "on":          "value"
      }
    }],
    "linebreak-style":      ["error", "unix"],
    "no-multi-assign":      ["error"],
    "no-unused-vars":       ["warn"],
    "object-curly-newline": ["error", {
      "minProperties": 2,
      "consistent":    true 
    }],
    "object-curly-spacing":    ["error", "always", { "arraysInObjects": false }],
    "object-property-newline": ["error"],
    "quotes":                  ["error", "double"],
    "semi":                    ["error", "always"]
  }
};
  