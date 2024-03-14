import { Route, Routes } from "react-router-dom";
import CoursePage from "./pages/CoursePage";

function App() {
  return (
    <Routes>
      <Route index element={<CoursePage />}></Route>
    </Routes>
  );
}

export default App;
