module.exports = {
  'extends': [
    'eslint:recommended'
  ],
  'ecmaFeatures': {
    'modules': true,
    'destructuring': true,
    'forOf': true,
    'jsx': true
  },
  'env': {
    'node': true,
    'es6': true
    //'jquery': true
    //'browser': true,
  },
  'globals': {
    // 'angular': true
  },
  'rules': {
    'no-unused-vars': [ 0, {
      'vars': 'local'
    } ],
    'no-console': 0,
    'quotes': [
      2,
      'single'
    ],
    'indent': [
      2,
      2
    ],
    'semi': [
      2,
      'always'
    ]
  }
};
