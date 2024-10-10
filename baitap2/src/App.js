import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import Groups from "./page/Groups";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/groups" element={<Groups />} />
        <Route path="/" element={<Navigate to="/groups" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
