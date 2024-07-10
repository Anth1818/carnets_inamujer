import "./App.css"
import { Route, Routes } from "react-router-dom";
import { PageCarnet } from "./pages/PageCarnet";
import { PageVerification } from "./pages/PageVerification";
import { Page404 } from "./pages/Page404";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<PageCarnet />} />
        <Route path="/carnet" element={<PageCarnet />} />
        <Route path="/carnet/verification/:id" element={<PageVerification />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </>
  )
}

export default App
