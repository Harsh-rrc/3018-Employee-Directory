module.exports = {
    preset: "ts-jest",
    testEnvironment: "node",
    setupFilesAfterEnv: ["<rootDir>/test/jest.setup.ts"],
    transform: {
    "^.+\\.ts$": "ts-jest"
  },
    moduleFileExtensions: ["ts", "js", "json"],
};