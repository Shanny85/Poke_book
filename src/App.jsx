import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import PokemonViewPage from "./pages/PokemonViewPage.jsx";

function App() {

  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<HomePage/>} />
              <Route path="pokemon/:id" element={<PokemonViewPage />} />
              <Route path="pokemon_view/:id" element={<PokemonViewPage />}/>
          </Routes>
      </BrowserRouter>
  )
}

export default App
