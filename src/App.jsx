import './App.css'
import component from "../src/components/index.js"
function App() {

  return (
    <>
      <component.Navbar/>
      <main>
        <div id="home">
          <component.Home/>
        </div>
        <div id="about">
          <component.About/>
        </div>
        <div id="services">
          <component.Services/>
        </div>
        <div id="doctors">
          <component.Doctors/>
        </div>
        <div id="blog">
          <component.Blogs />
        </div>
      </main>
      <component.Footer />
    </>
  )
}

export default App
