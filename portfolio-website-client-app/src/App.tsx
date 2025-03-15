
import './App.css'
import Dashboard from './components/dashboard';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  
  return (
  <Router>
    <Routes>
      <Route path="/" element={<Dashboard/>}></Route>
    </Routes>
  </Router>
  )
}
export default App;