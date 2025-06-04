/** @type {import('jest').Config} */
module.exports = {
  testEnvironment: 'jsdom', 
 setupFilesAfterEnv: [
   "<rootDir>/jest.setup.js"
],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1', 
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy', 
    '^next/image$': '<rootDir>/__mocks__/next-image.js', 
  },
  testPathIgnorePatterns: ['/node_modules/', '/.next/'], 
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
  },
};