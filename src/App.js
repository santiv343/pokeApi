import { Route, Routes } from "react-router";
import "./App.css";
import Home from "./components/Home";
import Detail from "./components/Detail";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Detail />} path="/pokemon/:id" />
      </Routes>
    </div>
  );
}

export default App;
