module.exports = {
  'env': {
    'browser': true,
    'node': true,
    'mocha': true,
    'amd': true
  },
  'extends': 'eslint:recommended',
  'rules': {
    'indent': [ 'error', 2 ],
    'linebreak-style': [ 'error', 'unix' ],
    'quotes': [ 'error', 'single' ],
    'semi': [ 'error', 'always' ],
    'no-console': false
  }
};
