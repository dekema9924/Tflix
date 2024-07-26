import Header from "./components/Header"
import { Route, Routes } from "react-router-dom"
import Movies from "./components/Movies"

function App() {

  return (
    <>
      <Header/>
      <Routes>
          <Route path="/home"/>
          <Route path="/explore" />
          <Route path="/movies" element={<Movies/>}/>
          <Route path="/tvshows"/>
      </Routes>
    </>
  )
}

export default App
