import SideBar from "./components/SideBar";
import './App.css';

function App() {
  return (
    <div className="main-container">
      <SideBar />
      <div className="container">
        some content
      </div>
    </div>
  );
}

export default App;
