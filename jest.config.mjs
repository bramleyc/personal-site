import nextJest from "next/jest.js"

const createJestConfig = nextJest({ dir: "./" })

const config = {
  testEnvironment: "jest-environment-jsdom",
  setupFilesAfterEnv: ["<rootDir>/test/setupTests.ts"],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
    "^.+\\.(css|sass|scss)$": "identity-obj-proxy"
  },
  transformIgnorePatterns: ["node_modules/(?!(react-markdown)/)"],
  testPathIgnorePatterns: [
    "<rootDir>/.next/",
    "<rootDir>/node_modules/",
    "<rootDir>/out/",
    "<rootDir>/playwright/"
  ]
}

export default createJestConfig(config)
