import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Nav from './Components/Nav/Nav'
import Index from './Components/Pages/Index'
import Footer from './Components/Footer/Footer'
import Properties from './Components/Pages/Properties'
import PropertieDetails from './Components/Pages/PropertieDetails'
import Agents from './Components/Pages/Agents'
import Agencies from './Components/Pages/Agencies'
import Gallery from './Components/Pages/Gallery'
import Contact from './Components/Pages/Contact'


function App() {


  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route path='/' element={ <Index />} />
            <Route path='/propertie' element={ <Properties />} />
             <Route path='/property/:id' element={ <PropertieDetails />} />
              <Route path='/agents' element={ <Agents />} />
               <Route path='/agencies' element={ <Agencies />} />
               <Route path='/gallery' element={ <Gallery />} />
               <Route path='/contact' element={ <Contact />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
