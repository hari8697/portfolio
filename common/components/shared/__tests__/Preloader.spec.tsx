import React from "react"
import { render, screen } from "@testing-library/react"

import Preloader from "@/components/shared/Preloader"

describe("Preloader", () => {
  const setPreloaderBool = jest.fn().mockName("setPreloaderBool")
  const threeImagesBools = [true, true, true]
  let context
  beforeEach(() => {
    context = render(
      <Preloader
        setPreloaderBool={setPreloaderBool}
        threeImagesBools={threeImagesBools}
      />
    )
  })

  it("Displays the preloader on load", () => {
    const { getByTestId } = context
    expect(getByTestId("preloader")).not.toBeNull()
  })

  it("Hides the preloader when threejs images are loaded", () => {
    expect(setPreloaderBool).toHaveBeenCalled()
  })
})
