import Auth from '../pages/Auth';
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App(): JSX.Element {

  return (
    <>
      <div>
        <Router>
          <Routes>
            <Route path='/auth' element={< Auth />} />
          </Routes>
        </Router>
      </div>
    </>
  )
}

export default App
