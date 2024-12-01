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
            path="spirinovatask/"
            element={<Dashboard />}
          ></Route>
          <Route
            activeClassName="active_class"
            exact
            path="spirinovatask/assets"
            element={<Assets />}
          ></Route>
          <Route
            activeClassName="active_class"
            exact
            path="spirinovatask/jobs"
            element={<Jobs />}
          ></Route>
          <Route
            activeClassName="active_class"
            exact
            path="spirinovatask/render"
            element={<Render />}
          ></Route>
          <Route
            activeClassName="active_class"
            exact
            path="spirinovatask/reports"
            element={<Reports />}
          ></Route>
          <Route path="*" element={<Notfound />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
