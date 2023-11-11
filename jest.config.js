module.exports = {
	reporters: ['default'],
  setupFilesAfterEnv: ['./jest.setup.js'],
  testEnvironment: 'jest-environment-jsdom',
  testMatch: ['**/_tests/**/*.js?(x)', '**/?(*.)+(spec|test).js?(x)'],
  transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(js|jsx)$'],
  moduleFileExtensions: ['js', 'mjs', 'cjs', 'jsx', 'ts', 'tsx', 'json', 'node'],
  collectCoverage: true,
  testResultsProcessor: 'jest-sonar-reporter',
  collectCoverageFrom: ['src/**/*.js?(x)', '**/_tests/**/*.(test|spec).js'],
  coverageReporters: ['lcov', 'text'],
  coverageDirectory: 'coverage',
};
