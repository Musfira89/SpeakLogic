import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Books from "./pages/Books";
import Problem from "./pages/Problems";
import Solution from "./pages/Solution";
import Store from "./pages/Store";

function App() {
  return (
    <>
      <Router>
        <Routes>
          {/* Landing Page Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<Books />} />
          <Route path="/problem" element={<Problem />} />
          <Route path="/solution" element={<Solution />} />
          <Route path="/store" element={<Store />} />

          {/* <Route path="/apps" component={Apps} />
          <Route path="/softwares" component={Softwares} />
          <Route path="/store" component={Store} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
