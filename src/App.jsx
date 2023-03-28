import { Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Protected from "./auth/Protected";
import Home from "./components/Home";
import Feed from "./components/Feed";
import Setting from "./components/Setting";

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            <Protected>
              <Dashboard />
            </Protected>
          }
        >
          <Route index element={<Home />} />
          <Route path="/dashboard/feed" element={<Feed />} />
          <Route path="/dashboard/setting" element={<Setting />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
