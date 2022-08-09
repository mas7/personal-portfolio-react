import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { MainNavbar } from "./components/Navbar";
import { Banner } from "./components/Banner";

function App() {
  return (
    <div className="App">
      <MainNavbar />
      <Banner />
    </div>
  );
}

export default App;
