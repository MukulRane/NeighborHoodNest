import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import BookingPage from "./pages/BookingPage/BookingPage";
import HomePage from './pages/Homepage/Homepage'
import LoginSignup from "./pages/Login-Signup/Login-Signup";

import {
  BrowserRouter as Router,
  Route,
  Navigate,
  Routes,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <main>
          <Routes>
            <Route path='/' exact element={<HomePage />} />
            <Route path='/loginSignup' exact element={<LoginSignup />} />
            <Route path='/bookNow' exact element={<BookingPage />} />
            <Route path="*" element={<Navigate to ="/" />}/>
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
