import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Outlet />
      <ToastContainer />
    </div>
  );
}

export default App;
