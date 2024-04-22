import { FaEye } from "react-icons/fa";
import { MdDelete, MdOutlineModeEdit } from "react-icons/md";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';


const Product = ({ coffee, handleDelete }) => {
  const { _id: id, coffeeName, chef, photoURL, price } = coffee || {};

  return (
    <div className="bg-[#F5F4F1] rounded-xl flex flex-col md:flex-row items-center hover:shadow-lg transition-all p-4">
      <figure className="w-[192.23px] h-[239px] overflow-hidden">
        <img src={photoURL} alt="" className="hover:scale-105 transition-all" />
      </figure>
      <div className="flex-1 text-xl">
        <p>
          <span className="text-xl text-[#5C5B5B] font-semibold">Name :</span>{" "}
          <span className="text-[#5C5B5BE6]"> {coffeeName}</span>
        </p>
        <p>
          <span className="text-xl text-[#5C5B5B] font-semibold">Chef :</span>{" "}
          <span className="text-[#5C5B5BE6]"> {chef}</span>
        </p>
        <p>
          <span className="text-xl text-[#5C5B5B] font-semibold">Price :</span>{" "}
          <span className="text-[#5C5B5BE6]"> {price} Taka</span>
        </p>
      </div>
      <div className="flex flex-row md:flex-col gap-5 m-11">
        <Link to={`/details/${id}`} className="p-2 text-white bg-[#D2B48C] rounded-md">
          <FaEye />
        </Link>
        <Link to={`/update-coffee/${id}`} className="p-2 text-white bg-[#3C393B;] rounded-md">
          <MdOutlineModeEdit />
        </Link>
        <button onClick={() => handleDelete(id)} className="p-2 text-white bg-[#EA4744] rounded-md">
          <MdDelete />
        </button>
      </div>
    </div>
  );
};

Product.propTypes = {
  coffee: PropTypes.object.isRequired,
  handleDelete: PropTypes.func.isRequired,
};
export default Product;
