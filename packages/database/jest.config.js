module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  moduleNameMapper: {
    "^@bewise/database/(.*)$": "<rootDir>src/$1",
  },
};
