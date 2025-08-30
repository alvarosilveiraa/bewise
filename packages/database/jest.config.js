module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  moduleNameMapper: {
    "^@bewise/common/(.*)$": "<rootDir>src/$1",
  },
};
