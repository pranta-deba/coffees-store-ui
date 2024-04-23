import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
// import { useContext } from "react";
// import { AuthContext } from "./provider/AuthProvider";

function App() {
  // const { loading } = useContext(AuthContext);

  // if (loading) {
  //   return <div className="h-screen flex justify-center items-center">
  //     <span className="loading loading-dots loading-lg"></span>
  //   </div>
  // }


  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
