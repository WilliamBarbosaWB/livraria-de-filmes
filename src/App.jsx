import { Outlet } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <h2>Filmes Livraria</h2>
      <Outlet></Outlet>
    </div>
  );
}

export default App;
