module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'header-max-length': [1, 'always', 72],
    'type-enum': [2, 'always', ['feat', 'fix', 'chore', 'refactor', 'ci', 'build']],
  },
};
