import {BrowserRouter, Router, Route} from 'react-router-dom';
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import Dashboard from "./components/Dashboard";
import SendMoney from "./components/Send";


function App() {

  return (
    <BrowserRouter>
      <Router>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/signin" element={<Signin />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/send" element={<SendMoney />} />
      </Router>
    </BrowserRouter>
  )
}



export default App
