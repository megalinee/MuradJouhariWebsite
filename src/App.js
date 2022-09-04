import { BrowserRouter, Routes, Route } from "react-router-dom";

// Other Pages
import HomePage from "./HomePage";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}



export default App;
