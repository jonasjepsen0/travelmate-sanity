import { Routes, Route } from 'react-router-dom'
import { Header } from './components/Header/Header'
import { Footer } from './components/Footer/Footer'
import { Home } from './pages/Home'
import { Countries } from './pages/Countries'
import { Cities } from './pages/Cities'
import { CityDetails } from './pages/CityDetails'
import { Places } from './pages/Places'
import { About } from './pages/About'
import { Search } from './pages/Search'

export const App = () => {
  return (
    <>
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/countries" element={<Countries />} />
          <Route path="/cities" element={<Cities />} />
          <Route path="/cities/:id" element={<CityDetails />} />
          <Route path="/places" element={<Places />} />
          <Route path="/about" element={<About />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </main>

      <Footer />
    </>
  )
}
