import Header from "./components/Header"
import { Route, Routes } from "react-router-dom"
import Home from "./components/Home/Home"
import AllMovies from "./components/Movies/AllMovies"
import Allshows from "./components/TvShows/Allshows"
import Details from "./components/Movies/Details"
import ShowDetails from "./components/TvShows/ShowDetails"

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
          <Route path="/tvdetails/:id" element={<ShowDetails/>}/>

      </Routes>
    </>
  )
}

export default App
