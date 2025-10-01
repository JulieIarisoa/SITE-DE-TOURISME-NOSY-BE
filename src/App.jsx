import NavBar from "./components/NavBar.jsx"
import Section1 from "./components/Section1"
import Section2 from "./components/Section2"
import Section3 from "./components/Section3"
import Section4 from "./components/Section4"
import Section5 from "./components/Section5"
import Section6 from "./components/Section6"
import Apiconsomme from "./components/Apiconsomme"
import Footer from "./components/Footer"
import './App.css'

function App() {

  return (
    <>
      <div className="background-section">
        <NavBar />
        <Section1 />
      </ div>
      <Section2 /> 
      <Section3 />
      <Section5 />
      <Section6 />
      <Section4 />
      <Apiconsomme />
      <Footer />
    </>
  )
}

export default App
