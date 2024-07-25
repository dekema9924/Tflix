import Header from "./components/Header"
import { Route, Routes } from "react-router-dom"

function App() {

  return (
    <>
      <Header/>
      <Routes>
          <Route path="/"/>
          <Route path="/explore" />
          <Route path="/movies"/>
          <Route path="/tvshows"/>
      </Routes>
    </>
  )
}

export default App
