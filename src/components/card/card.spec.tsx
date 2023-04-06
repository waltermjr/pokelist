import { render, fireEvent, screen } from "@testing-library/react"
import '@testing-library/jest-dom'
import Card from "."

const mockPokemon = {
  name: "Name Test",
  types: [],
  order: 1,
  id: 1,
  sprites: {
    front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
    other: {
      dream_world: {
        front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/4.svg"
      }
    }
  }
}

describe("Test Card component", () => {
  test("Should render name", () => {
    const { getByText } = render(<Card key={1} pokemon={mockPokemon} />);
    expect(getByText(mockPokemon.name)).toBeInTheDocument()
  })

  test("Should modal is opened", () => {
    const { getByText } = render(<Card key={1} pokemon={mockPokemon} />);
    fireEvent.click(screen.getByText(mockPokemon.name))
    expect(getByText("Pokedex Entry")).toBeInTheDocument()
  })
})