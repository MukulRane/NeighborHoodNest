import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import ServicesListing from "./pages/ServicesListing/ServicesListing";
import HomePage from "./pages/Homepage/Homepage";
import LoginSignup from "./pages/Login-Signup/Login-Signup";
import ServiceProviderPage from "./pages/ServiceProviderPage/ServiceProviderPage";
import MyAccountPage from "./pages/MyAccountPage/MyAccountPage";
import ServiceProviderAccountPage from "./pages/MyAccountPage/ServiceProviderAccountPage";
import { AppProvider } from "./AppContext";

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
        <AppProvider>
          <Navbar />
          <main>
            <Routes>
              <Route path="/" exact element={<HomePage />} />
              <Route path="/loginSignup" exact element={<LoginSignup />} />
              <Route path="/myAccount" exact element={<MyAccountPage />} />
              <Route path="/serviceProviderAccount" exact element={<ServiceProviderAccountPage />} />
              <Route
                path="/servicesListing"
                exact
                element={<ServicesListing />}
              />
              <Route
                path="/serviceProviders"
                exact
                element={<ServiceProviderPage />}
              />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </main>
        </AppProvider>
      </Router>
    </div>
  );
}

export default App;
