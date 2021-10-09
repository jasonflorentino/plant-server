module.exports = {
  "env": {
    "node"    : true,
    "commonjs": true,
    "es2021"  : true,
  },
  "extends"      : "eslint:recommended",
  "parserOptions": {
    "ecmaVersion": 12,
  },
  "rules": {
    "array-bracket-newline": ["error", { "minItems": 5 }],
    "array-element-newline": ["error", { "minItems": 5 }],
    "capitalized-comments" : ["error", "always", { "ignoreConsecutiveComments": true }],
    "comma-dangle"         : ["error", {
      "arrays"   : "always-multiline",
      "objects"  : "always-multiline",
      "imports"  : "always-multiline",
      "exports"  : "always-multiline",
      "functions": "never",
    }],
    "indent"     : ["error", 2],
    "key-spacing": ["error", {
      "singleLine": {
        "beforeColon": false,
        "afterColon" : true,
      },
      "multiLine": {
        "beforeColon": false,
        "afterColon" : true,
        "align"      : "colon",
      },
    }],
    "linebreak-style"     : ["error", "unix"],
    "no-multi-assign"     : ["error"],
    "no-unused-vars"      : ["warn"],
    "object-curly-newline": ["error", {
      "minProperties": 3,
      "consistent"   : true, 
    }],
    "object-curly-spacing"   : ["error", "always", { "arraysInObjects": false }],
    "object-property-newline": ["error"],
    "quotes"                 : ["error", "double"],
    "semi"                   : ["error", "always"],
  },
};
  