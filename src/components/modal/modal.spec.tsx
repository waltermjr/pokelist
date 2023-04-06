import { render, fireEvent, screen } from "@testing-library/react"
import '@testing-library/jest-dom'
import Card from "../card"

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

const mockPokemonError = {
  name: "Name Test",
  types: [],
  order: 1,
  id: 99999855221521,
  sprites: {
    front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
    other: {
      dream_world: {
        front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/4.svg"
      }
    }
  }
}

describe("Test Modal component", () => {
  test("Should modal continuos opened", async() => {
    await render(<Card key={1} pokemon={mockPokemon} />);
    fireEvent.click(screen.getByText(mockPokemon.name))
    fireEvent.click(screen.getByTestId("content-modal"))
    expect(screen.getByTestId("content-modal")).toBeInTheDocument()
  })

  test("Should modal closed", async() => {
    await render(<Card key={1} pokemon={mockPokemon} />);
    fireEvent.click(screen.getByText(mockPokemon.name))
    const modalElement = screen.getByTestId("content-modal")
    fireEvent.click(screen.getByTestId("container-modal"))
    expect(modalElement).not.toBeInTheDocument()
  })
})