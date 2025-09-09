module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  moduleNameMapper: {
    "^@bewise/ui/(.*)$": "<rootDir>src/$1",
  },
};
