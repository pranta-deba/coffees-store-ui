import Footer from "../components/Footer";
import Header from "../components/Header";
import errorImg from "../assets/404/404.gif";
import { NavLink } from "react-router-dom";
import { IoChevronBack } from "react-icons/io5";
const Error404 = () => {
  return (
    <>
      <Header />
      <div className="max-w-[1550px] w-[80%] mx-auto flex flex-col justify-center items-center">
        <NavLink
          to={-1}
          className="flex items-center gap-1 justify-center rancho my-5 text-[#374151] text-3xl"
        >
          <IoChevronBack /> Back to home
        </NavLink>
        <img src={errorImg} alt="" />
      </div>
      <Footer />
    </>
  );
};

export default Error404;
