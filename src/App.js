import './App.css';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Contactlist from './components/Contactlist';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";

function App() {
  
  return (
    <Router>
    
    <div className="App">
      <Routes>
          <Route path="/" element={<SignIn/>}/>
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/contactpage" element={<Contactlist/>}/>
         
        </Routes>
        {/* <Contactlist/> */}
        {/* <SignIn/>
        <SignUp/> */}
    </div>
    
      </Router>  
     
     
  );
}

export default App;
