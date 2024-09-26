import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import Dashboard from "./pages/Dashboard";
import NotFoundPage from "./pages/NotFoundPage";
import ForgotPassword from "./pages/ForgotPassword";

function App() {
  console.log("App rendering"); // Debugging log

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/forgot" element={<ForgotPassword />} />
        <Route path="*" element={<NotFoundPage />} />{" "}
        {/* Catch all unmatched routes */}
      </Routes>
    </Router>
  );
}

export default App;
