import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import AuthenticationPage from "./pages/AuthenticationPage";
import { useUserAuthenticateContext } from "./hooks/useUserAuthenticateContext";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/ReactToastify.css'
import SetNewPassword from "./pages/SetNewPassword";

function App() {

  const {user} = useUserAuthenticateContext();

  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={user ? <Home /> : <Navigate to="/authenticate" />} />
          <Route path="/authenticate" element={!user ? <AuthenticationPage /> : <Navigate to="/" />} />
          <Route path="/forgot-password" element={!user ? <SetNewPassword /> : <Navigate to="/" />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      <ToastContainer autoClose={3000} position="top-center" />
    </div>
  );
}

export default App;
