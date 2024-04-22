import Banner from "../components/Banner";
import Following from "../components/Following";
import Products from "../components/Products";
import Services from "../components/Services";

const Home = () => {
  return (
    <div className="mb-12">
      <Banner />
      <Services />
      <Products />
      <Following />
    </div>
  );
};

export default Home;
