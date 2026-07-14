import { render } from "@testing-library/react"
import RumInit from "@/components/RumInit"
import { initRum } from "@/lib/rum"

jest.mock("@/lib/rum", () => ({ initRum: jest.fn() }))

describe("RumInit", () => {
  it("initialises RUM on mount and renders nothing", () => {
    const { container } = render(<RumInit />)

    expect(initRum).toHaveBeenCalled()
    expect(container).toBeEmptyDOMElement()
  })
})
