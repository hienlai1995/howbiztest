import { Routes, Route } from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import ControlAdminPage from "./Pages/ControlAdminPage";
import AddNew from "./componaints/AddNew/AddNew";
import "./App.css";
function App() {
  return (
    <>
      <Routes>
        <Route index element={<LoginPage />} />
        <Route path="/controladmin" element={<ControlAdminPage />} />
        <Route path="/controladmin/them-moi" element={<AddNew />} />
      </Routes>
    </>
  );
}

export default App;
