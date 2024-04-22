import cap1 from "../assets/cups/1.png";
import cap2 from "../assets/cups/2.png";
import cap3 from "../assets/cups/3.png";
import cap4 from "../assets/cups/4.png";
import cap5 from "../assets/cups/5.png";
import cap6 from "../assets/cups/6.png";
import cap7 from "../assets/cups/7.png";
import cap8 from "../assets/cups/8.png";

const Following = () => {
  return (
    <div className="mt-12">
      <div className="max-w-[1550px] w-[80%] mx-auto ">
        <div className="flex flex-col justify-center items-center gap-3">
          <h4 className="raleway text-xl text-center">Follow Us Now</h4>
          <h1 className="rancho text-5xl font-normal text-[#331A15]">
            Follow on Instagram
          </h1>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center items-center gap-6 mt-9">
          <figure className="overflow-hidden rounded-xl">
            <img className="hover:scale-110 transition-all" src={cap1} alt="" />
          </figure>
          <figure className="overflow-hidden rounded-xl">
            <img className="hover:scale-110 transition-all" src={cap2} alt="" />
          </figure>
          <figure className="overflow-hidden rounded-xl">
            <img className="hover:scale-110 transition-all" src={cap3} alt="" />
          </figure>
          <figure className="overflow-hidden rounded-xl">
            <img className="hover:scale-110 transition-all" src={cap4} alt="" />
          </figure>
          <figure className="overflow-hidden rounded-xl">
            <img className="hover:scale-110 transition-all" src={cap5} alt="" />
          </figure>
          <figure className="overflow-hidden rounded-xl">
            <img className="hover:scale-110 transition-all" src={cap6} alt="" />
          </figure>
          <figure className="overflow-hidden rounded-xl">
            <img className="hover:scale-110 transition-all" src={cap7} alt="" />
          </figure>
          <figure className="overflow-hidden rounded-xl">
            <img className="hover:scale-110 transition-all" src={cap8} alt="" />
          </figure>
        </div>
      </div>
    </div>
  );
};

export default Following;
