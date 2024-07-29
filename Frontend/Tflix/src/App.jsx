import Header from "./components/Header"
import { Route, Routes } from "react-router-dom"
import Home from "./components/Home/Home"
import AllMovies from "./components/AllMovies"
import Allshows from "./components/Allshows"
import Details from "./components/Details"

function App() {

  return (
    <>
      <Header/>
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/explore" />
          <Route path="/movies" element={<AllMovies/>} />
          <Route path="/tvshows" element={<Allshows/>}/>
          <Route path="/details/:id" element={<Details/>}/>


      </Routes>
    </>
  )
}

export default App
