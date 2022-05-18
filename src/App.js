import { Route, Routes } from "react-router-dom";
import Homepage from "./Homepage/Homepage";
import RequireAuth from "./RequireAuth";
import SgninPage from "./Signinpage/Signinpage";


function App() {
  return (
    <div >

      <Routes>
        <Route path="/" element={<SgninPage />}></Route>
        <Route path="/home" element={<RequireAuth><Homepage /></RequireAuth>}></Route>
      </Routes>
    </div>
  );
}

export default App;
