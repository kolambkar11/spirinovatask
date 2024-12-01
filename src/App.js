import "./App.css";
import Dashboard from "./components/dashboard/Dashboard";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Notfound from "./components/common/Notfound";
import Navbar from "./components/common/Navbar";
import Assets from "./components/others/Assets";
import Jobs from "./components/others/Jobs";
import Render from "./components/others/Render";
import Reports from "./components/others/Reports";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route
            activeClassName="active_class"
            exact
            path="/"
            element={<Dashboard />}
          ></Route>
          <Route
            activeClassName="active_class"
            exact
            path="/assets"
            element={<Assets />}
          ></Route>
          <Route
            activeClassName="active_class"
            exact
            path="/jobs"
            element={<Jobs />}
          ></Route>
          <Route
            activeClassName="active_class"
            exact
            path="/render"
            element={<Render />}
          ></Route>
          <Route
            activeClassName="active_class"
            exact
            path="/reports"
            element={<Reports />}
          ></Route>
          <Route path="*" element={<Notfound />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
