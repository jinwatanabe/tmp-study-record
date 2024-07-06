export default {
    testEnvironment: "jsdom",
    moduleNameMapper: {
      '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
      "\\.(css|scss)$": "./__mocks__/styleMock.js",
    },
    transform: {
      '^.+\\.[tj]sx?$': 'babel-jest'
    },
    setupFilesAfterEnv: ["./jest.setup.js"],
  };