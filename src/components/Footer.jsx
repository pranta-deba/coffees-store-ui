import { FaFacebook, FaLinkedin } from "react-icons/fa";
import logo from "../assets/more/logo1.png";
import { AiFillTwitterCircle } from "react-icons/ai";
import { RiInstagramFill } from "react-icons/ri";
import { IoMdCall } from "react-icons/io";
import { MdOutlineMailOutline } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
const Footer = () => {
  return (
    <div className="footer-bg pt-14">
      <div className="max-w-[1550px] w-[80%] mx-auto flex flex-col md:flex-row justify-center items-center gap-16">
        <div className="space-y-3 flex-1">
          <figure>
            <img src={logo} alt="" className="w-16" />
          </figure>
          <h1 className="rancho text-[#331A15] text-3xl font-bold">
            Espresso Emporium
          </h1>
          <p className="text-xl raleway">
            Always ready to be your friend. Come & Contact with us to share your
            memorable moments, to share with your best companion.
          </p>
          <div className="flex gap-3">
            <button className="text-4xl text-[#331A15]">
              <FaFacebook />
            </button>
            <button className="text-4xl text-[#331A15]">
              <AiFillTwitterCircle />
            </button>
            <button className="text-4xl text-[#331A15]">
              <RiInstagramFill />
            </button>
            <button className="text-4xl text-[#331A15]">
              <FaLinkedin />
            </button>
          </div>
          <h3 className="rancho text-[#331A15] text-2xl font-bold pt-4">
            Get in Touch
          </h3>
          <p className="flex items-center gap-1 raleway">
            <span className="text-[#331A15] font-semibold text-xl">
              <IoMdCall />
            </span>
            +88 01533 333 333
          </p>
          <p className="flex items-center gap-1 raleway">
            <span className="text-[#331A15] font-semibold text-xl">
              <MdOutlineMailOutline />
            </span>
            info@gmail.com
          </p>
          <p className="flex items-center gap-1 raleway">
            <span className="text-[#331A15] font-semibold text-xl">
              <IoLocationSharp />
            </span>
            72, Wall street, King Road, Comilla
          </p>
        </div>
        <div className="flex-1">
          <h3 className="rancho text-[#331A15] text-2xl font-bold mb-4">
            Get in Touch
          </h3>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full bg-white p-3 raleway  border-2 border-transparent focus:border-[#E3B577] focus:rounded-md focus:shadow-md focus:shadow-[#E3B577]"
              required
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full bg-white p-3 raleway  border-2 border-transparent focus:border-[#E3B577] focus:rounded-md focus:shadow-md focus:shadow-[#E3B577]"
              required
            />
            <textarea
              name=""
              placeholder="Message"
              className="w-full resize-y bg-white p-3 raleway  border-2 border-transparent focus:border-[#E3B577] focus:rounded-md focus:shadow-md focus:shadow-[#E3B577]"
              required
            ></textarea>
            <button className="rancho rounded-full border-2 border-[#331A15] px-5 py-2 text-2xl btn">
              Send Message
            </button>
          </form>
        </div>
      </div>
      <div className="footer-bg2 py-5 mt-7 text-white">
        <p className="rancho text-center text-xl">
          Copyright {" " + new Date().getFullYear() + " "}! All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
