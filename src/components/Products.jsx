import { BsCupHot } from "react-icons/bs";
import Product from "./Product";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";


const Products = () => {
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    fetch("http://localhost:5000/coffee")
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
        fetch(`http://localhost:5000/coffee/${id}`, {
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
  return (
    <div className="products-bg mt-8">
      <div className="max-w-[1550px] w-[80%] mx-auto">
        <div className="flex flex-col justify-center items-center gap-3">
          <h4 className="raleway text-xl">--- Sip & Savor ---</h4>
          <h1 className="rancho text-5xl text-center font-normal text-[#331A15]">
            Our Popular Products
          </h1>
          <NavLink to="/add-coffee" className="flex gap-1 items-center text-white bg-[#E3B577] border-2 border-[#331A15] rounded-md py-2 px-4 btn text-2xl font-normal rancho hover:text-[#331A15]">
            Add Coffee <BsCupHot className="text-[#331A15]" />
          </NavLink>
        </div>
        {loader ? <div className="flex justify-center items-center p-24">
          <p>Loading...</p>
        </div> : <div className="grid grid-cols-1 lg:grid-cols-2 justify-center items-center gap-6 mt-9 raleway">
          {
            data.map(coffee => <Product key={coffee._id} coffee={coffee} handleDelete={handleDelete} />)
          }
        </div>}
      </div>
    </div>
  );
};

export default Products;
