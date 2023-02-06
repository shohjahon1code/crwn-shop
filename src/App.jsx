import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./routes/About";
import Signup from "./routes/Signup";
import Main from "./routes/Main";
import Login from "./routes/Login";
import Contact from "./routes/Contact";
import SinglePage from "./routes/SinglePage";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route index element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products/:id" element={<SinglePage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
