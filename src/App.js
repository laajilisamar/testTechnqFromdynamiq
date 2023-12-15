import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter,Routes,Route}from "react-router-dom";
import From  from "./form";
import Home  from "./home";
function App() {
  return (
    
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
       <Route path="/form" element={<From />} />
       </Routes>
    </BrowserRouter>
  );
}

export default App;

