import { expect } from "@jest/globals"
import "@testing-library/jest-dom"

const MAX_DEBUG_LINES = 20

expect.addSnapshotSerializer({
  test(value) {
    return typeof value === "string" && value.length > 0
  },
  print(value) {
    const stringValue = String(value)
    const lines = stringValue.split("\n")
    if (lines.length <= MAX_DEBUG_LINES) {
      return stringValue
    }
    return `${lines.slice(0, MAX_DEBUG_LINES).join("\n")}\n… (${lines.length - MAX_DEBUG_LINES} more lines)`
  }
})
