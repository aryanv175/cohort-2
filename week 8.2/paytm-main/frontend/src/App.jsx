import {BrowserRouter, Router, Route} from 'react-router-dom';
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Dashboard from "./pages/Dashboard";
import SendMoney from "./pages/Send";


function App() {

  return (
    <BrowserRouter>
      <Router> 
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/signin" element={<SignIn/>} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/send" element={<SendMoney />} />
      </Router>
    </BrowserRouter>
  )
}




export default App
