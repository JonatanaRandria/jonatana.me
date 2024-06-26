import './App.css'
import Header from './components/Navbar'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {


  return (
    <>

    <Router>
        <Routes>
          <Route path="/" element={ <Header/>}>
          </Route>
        </Routes>
          
      
      </Router>
    </>
  )
}

export default App
