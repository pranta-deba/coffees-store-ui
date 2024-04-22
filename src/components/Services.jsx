import icon1 from "../assets/icons/1.png";
import icon2 from "../assets/icons/2.png";
import icon3 from "../assets/icons/3.png";
import icon4 from "../assets/icons/4.png";

const Services = () => {
  return (
    <div className="bg-[#ECEAE3]">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7 justify-center items-center py-9 max-w-[1550px] w-[80%] mx-auto text-center">
        <div className="flex flex-col justify-center items-center">
          <img src={icon1} alt="" />
          <h3 className="text-3xl font-normal rancho text-[#331A15]">
            Awesome Aroma
          </h3>
          <p className="raleway text-base font-normal text-[#1B1A1A]">
            You will definitely be a fan of the design & aroma of your coffee
          </p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <img src={icon2} alt="" />
          <h3 className="text-3xl font-normal rancho text-[#331A15]">
            High Quality
          </h3>
          <p className="raleway text-base font-normal text-[#1B1A1A]">
            We served the coffee to you maintaining the best quality
          </p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <img src={icon3} alt="" />
          <h3 className="text-3xl font-normal rancho text-[#331A15]">
            Pure Grades
          </h3>
          <p className="raleway text-base font-normal text-[#1B1A1A]">
            The coffee is made of the green coffee beans which you will love
          </p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <img src={icon4} alt="" />
          <h3 className="text-3xl font-normal rancho text-[#331A15]">
            Proper Roasting
          </h3>
          <p className="raleway text-base font-normal text-[#1B1A1A]">
            Your coffee is brewed by first roasting the green coffee beans
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
