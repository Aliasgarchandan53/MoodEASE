import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Services from './components/Services'

function App() {

  return (
    <>
      <Navbar/>
      <main>
        <div id="home">
          <Home/>
        </div>
        <div id="about">
          <About/>
        </div>
        <div id="services">
          <Services/>
        </div>
      </main>
    </>
  )
}

export default App
