import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home/Home";
import JobsPage from "./pages/Jobs/JobsPage";

const App = () => (
  <>
    <Navbar />
    <div className="pt-16">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jobs" element={<JobsPage />} />
      </Routes>
    </div>
  </>
);

export default App;
