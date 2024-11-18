import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Registration from "./pages/Registration";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import PrivateRoutes from "./routes/PrivateRoutes";

const App = () => {
  return (
    <Routes>
      <Route element={<PrivateRoutes />}>
        <Route path="/" element={<Homepage />} />
        <Route path="/me" element={<Profile />} />
      </Route>
      <Route path="/registration" element={<Registration />} />
      <Route path="/login" element={<Login />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
