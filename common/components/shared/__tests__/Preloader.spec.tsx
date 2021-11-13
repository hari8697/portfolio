import React from "react"
import { render, screen } from "@testing-library/react"

import Preloader from "@/components/shared/Preloader"

describe("Preloader", () => {
  it("Displays the preloader on load", () => {
    let context = render(<Preloader />)
    const { getByTestId } = context
    expect(getByTestId("preloader")).not.toBeNull()
  })

  it("Hides the preloader when threejs images are loaded", () => {
    const setPreloaderBool = jest.fn().mockName("setPreloaderBool")
    const threeImagesBools = [true, true, true]

    let context = render(
      <Preloader
        setPreloaderBool={setPreloaderBool}
        threeImagesBools={threeImagesBools}
      />
    )
    const { getByTestId } = context

    expect(setPreloaderBool).toHaveBeenCalled()
  })
})
