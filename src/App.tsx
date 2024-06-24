import "./App.css"
import { CarnetInamujer } from "./components/CarnetInamujer"
import { Header } from "./components/Header"
function App() {

  return (
    <>
      <Header />
      <h1 className="text-3xl font-bold text-center">Generador de carnet</h1>
      <CarnetInamujer />
    </>
  )
}

export default App
