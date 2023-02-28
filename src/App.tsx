import { CssBaseline } from "@mui/material";
import "./App.css";
import Sidebar from "./scenes/global/Sidebar";
import Topbar from "./scenes/global/Topbar";

const App = () => {
  return (
    <>
      <CssBaseline />
      <div className="app">
        <main className="content">
          <h1>Admin Dashboard</h1>
          <Topbar />
          <Sidebar />
        </main>
      </div>
    </>
  );
};

export default App;
