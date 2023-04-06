import { PokemonProvider } from "./context/PokemonListContext"
import Home from "./pages/home"

function App() {
  return (
    <PokemonProvider>
      <Home />
    </PokemonProvider>
  )
}

export default App
