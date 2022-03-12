import "./App.scss";
import Drawer from "./components/Drawer";
import AppBar from "./components/Appbar";
import Profile from "./components/Profile";

function App() {
  return (
    <div className="App">
      <Drawer />
      <div className="components">
        <AppBar />
        <Profile />
      </div>
    </div>
  );
}

export default App;
