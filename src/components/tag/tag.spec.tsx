import { render, fireEvent, screen } from "@testing-library/react"
import '@testing-library/jest-dom'
import Tag from "."
import { PokemonTypes } from "../../context/PokemonListContext"

const mockPokemonTypes: PokemonTypes[] = [{
  slot: 1,
  type: {
    name: "fire"
  }
},{
  slot: 2,
  type: {
    name: "fighting"
  }
}]

describe("Test Card component", () => {
  test("Should render name", () => {
    const { getAllByTestId } = render(<Tag key={1} types={mockPokemonTypes} />);
    const tags = getAllByTestId("TagElement")
    expect(tags.length).toEqual(2)
  })
})