const Banner = () => {
  return (
    <div className="banner-bg text-white min-h-[calc(100vh-115px)] grid grid-cols-1 lg:grid-cols-2 items-center justify-center px-4 lg:px-0">
      <div className="hidden md:flex"></div>
      <div className="space-y-6">
        <h1 className="rancho text-5xl">Would you like a Cup of Delicious Coffee?</h1>
        <p className="raleway text-base max-w-[624px]">
          Its coffee time - Sip & Savor - Relaxation in every sip! Get the
          nostalgia back!! Your companion of every moment!!! Enjoy the beautiful
          moments and make them memorable.
        </p>
        <button className="rancho text-2xl font-normal bg-[#E3B577] text-black btn outline-none rounded-none hover:bg-transparent hover:text-white border-2 border-transparent hover:border-white">Learn More</button>
      </div>
    </div>
  );
};

export default Banner;
