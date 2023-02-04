import logo from './logo.svg';
import './App.css';
import Footer from "./components/Footer"
import About from "./components/About"
import Info from "./components/Info"
import Interests from "./components/Interests"

function App() {
  return (
    <div className="App">
   
      
      <Info className="info"/>
      <About className="about"/>
      <Interests className="interest"/>
      <Footer className="footer"/>
   
  
    </div>
  );
}

export default App;
