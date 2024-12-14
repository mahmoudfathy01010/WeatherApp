let ignoredPatterns = ['/node_modules/', '<rootDir>/__tests__/FileMock.js'];

module.exports = {
  verbose: true,
  testEnvironment: 'node',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  testMatch: ['<rootDir>/__tests__/**/*.js', '**/?(*.)(spec|test).js?(x)'],
  testPathIgnorePatterns: ignoredPatterns,
  moduleNameMapper: {
    '^.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__tests__/FileMock.js',
  },
  setupFiles: ['./node_modules/react-native-gesture-handler/jestSetup.js'],
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?react-native|react-navigation)/',
  ],
  preset: 'react-native',
  coverageReporters: ['text', 'text-summary', 'html', 'lcov', 'json-summary'],

  collectCoverageFrom: [
    '**/*.{js,jsx,tsx,ts}',
    '!**/index.js',
    '!**/*.styles.ts',
    '!**/node_modules/**',
    '!**/__tests__/**',
    '!**/coverage/**',
    '!jest.config.js',
    '!.eslintrc.js',
    '!.prettierrc.js',
    '!metro.config.js',
    '!App/I18n/**',
    '!App/Themes/**',
    '!App/Containers/AppNavigation/**',
    '!e2e/**',
    '!react-native.config.js',
    '!.vscode/.react/*.{js,jsx,tsx}',
    '!**/*.config.js',
    '!__tests__/FileMock.js',
  ],

  modulePaths: ['<rootDir>'],
};
