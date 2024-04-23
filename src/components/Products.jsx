import { BsCupHot } from "react-icons/bs";
import Product from "./Product";
import { NavLink } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../provider/AuthProvider";


const Products = () => {
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(true);
  const { role, cart, setCart } = useContext(AuthContext);
  useEffect(() => {
    fetch("https://coffees-store-server.vercel.app/coffee")
      .then(res => res.json())
      .then(data => { setData(data); setLoader(false) });
  }, [])

  // delete
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://coffees-store-server.vercel.app/coffee/${id}`, {
          method: "DELETE"
        })
          .then(res => res.json())
          .then(deleted => {
            if (deleted.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your coffee has been deleted.",
                icon: "success"
              });
              setData(data.filter(coffee => coffee._id !== id));
            }
          })
      }
    });
  }

  // cart 
  const handleCart = (coffee) => {
    const getLocal = JSON.parse(localStorage.getItem('cart')) || [];
    const check = getLocal.find(item => item._id == coffee._id) || null;
    if (check === null) {
      getLocal.push(coffee);
      localStorage.setItem('cart', JSON.stringify(getLocal));
      setCart(cart + 1);
      Swal.fire({
        title: "Added to cart!",
        text: "Your coffee has been added to cart.",
        icon: "success"
      });
    } else {
      Swal.fire({
        title: "Already in cart!",
        text: "Your coffee is already in cart.",
        icon: "warning"
      });
    }
  }
  return (
    <div className="products-bg mt-8">
      <div className="max-w-[1550px] w-[80%] mx-auto">
        <div className="flex flex-col justify-center items-center gap-3">
          <h4 className="raleway text-xl">--- Sip & Savor ---</h4>
          <h1 className="rancho text-5xl text-center font-normal text-[#331A15]">
            Our Popular Products
          </h1>
          {role && <NavLink to="/add-coffee" className="flex gap-1 items-center text-white bg-[#E3B577] border-2 border-[#331A15] rounded-md py-2 px-4 btn text-2xl font-normal rancho hover:text-[#331A15]">
            Add Coffee <BsCupHot className="text-[#331A15]" />
          </NavLink>}
        </div>
        {loader ? <div className="flex justify-center items-center p-24">
          <p>Loading...</p>
        </div> : <div className="grid grid-cols-1 lg:grid-cols-2 justify-center items-center gap-6 mt-9 raleway">
          {
            data.map(coffee => <Product key={coffee._id} coffee={coffee} handleDelete={handleDelete} handleCart={handleCart} />)
          }
        </div>}
      </div>
    </div>
  );
};

export default Products;
