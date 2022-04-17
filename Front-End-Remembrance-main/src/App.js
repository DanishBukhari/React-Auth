// COMPONENTS
import WelcomePage from './Components/WelcomePage';
import SignUp from './Components/SignUp';
import Login from './Components/Login';
import Dashboard from './Components/Dashboard';
import CreatePerson from './Components/CreatePerson';
// CSS
import './App.css';
// Router Imports
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element = {<WelcomePage />}/>
          <Route path="/signup" element = {<SignUp />}/>
          <Route path="/login" element = {<Login />}/>
          <Route path="/dashboard" element = {<Dashboard />}/>
          <Route path="/createperson" element = {<CreatePerson />}/>

        </Routes>
      </Router>
    </div>
  );
}

export default App;
