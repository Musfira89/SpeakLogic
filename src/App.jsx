import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Home from "./components/Home";
import Books from "./pages/Books";
import Problem from "./pages/Problems";
import Solution from "./pages/Solution";
import Store from "./pages/Store";
import Forum from "./pages/Forum";
import Software from "./pages/Software";
import FAQ from "./pages/FAQ";
import Help from "./pages/Help";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import CategoryPage from "./pages/CategoryPage";

function AppWrapper() {
  const location = useLocation();
  const path = location.pathname;

  const hideNavbar =
    path === "/" ||
    path === "/login" ||
    path === "/signup" ||
    path.startsWith("/category/"); 

  return (
    <>
      {!hideNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<Books />} />
        <Route path="/problem" element={<Problem />} />
        <Route path="/solution" element={<Solution />} />
        <Route path="/store" element={<Store />} />
        <Route path="/forums" element={<Forum />} />
        <Route path="/softwares" element={<Software />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/help" element={<Help />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/category/:category" element={<CategoryPage />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppWrapper />
    </Router>
  );
}

export default App;
