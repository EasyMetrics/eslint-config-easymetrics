const HapiCapitalizeModules = require('hapi-capitalize-modules');
const HapiForYou = require('hapi-for-you');
const HapiScopeStart = require('hapi-scope-start');
const NoArrowception = require('no-arrowception');

module.exports = {
  extends: [
    './rules/imports',
    './rules/possible-errors',
    './rules/best-practices',
    './rules/variables',
    './rules/node',
    './rules/stylistic-issues',
    './rules/es2015',
  ].map(require.resolve),
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module',
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
    },
  },
  rules: {
    strict: 'error',
    'hapi-capitalize-modules': HapiCapitalizeModules,
    'hapi-for-you': HapiForYou,
    'hapi-scope-start': HapiScopeStart,
    'no-arrowception': NoArrowception,
  },
};
