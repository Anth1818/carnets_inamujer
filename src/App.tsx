import "./App.css"
import { Route, Routes } from "react-router-dom";
import { PageCarnet } from "./pages/PageCarnet";
import { PageVerification } from "./pages/PageVerification";
function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<PageCarnet />} />
        <Route path="/carnet" element={<PageCarnet />} />
        <Route path="/carnet/verification/:id" element={<PageVerification />} />
      </Routes>
    </>
  )
}

export default App
