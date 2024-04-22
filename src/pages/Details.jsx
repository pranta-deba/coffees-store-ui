import { NavLink, useLoaderData } from "react-router-dom";
import { IoChevronBack } from "react-icons/io5";
const Details = () => {
    const data = useLoaderData();
    const { coffeeName, chef, supplier, taste, category, details, photoURL } = data || {};
    const tag = ["Rich", "Aromatic", "Smooth", "Balanced", "Complex", "Niceties"];

    return (
        <div className="p-3 mb-5">
            <div className="max-w-[1550px] w-[95%] md:w-[80%] mx-auto">
                <NavLink
                    to={-1}
                    className="flex items-center gap-1  rancho my-5 text-[#374151] text-3xl"
                >
                    <IoChevronBack /> Back to home
                </NavLink>
            </div>
            <div className="max-w-[1550px] w-[95%] md:w-[80%] mx-auto bg-[#F5F4F1] rounded-xl flex flex-col md:flex-row items-center justify-center hover:shadow-lg transition-all md:px-28 py-8 md:py-12">

                <figure className="overflow-hidden flex-1">
                    <img src={photoURL} alt="" className="md:w-[351px] hover:scale-105 transition-all" />
                </figure>

                <div className="flex-1 text-xl space-y-3">
                    <h1 className="text-[#331A15] text-4xl font-semibold rancho">{tag[Math.floor(Math.random() * tag.length)]}</h1>
                    <p>
                        <span className="text-xl text-[#5C5B5B] font-semibold">Name :</span>{" "}
                        <span className="text-[#5C5B5BE6]"> {coffeeName}</span>
                    </p>
                    <p>
                        <span className="text-xl text-[#5C5B5B] font-semibold">Chef :</span>{" "}
                        <span className="text-[#5C5B5BE6]"> {chef}</span>
                    </p>
                    <p>
                        <span className="text-xl text-[#5C5B5B] font-semibold">Supplier: </span>{" "}
                        <span className="text-[#5C5B5BE6]"> {supplier}</span>
                    </p>
                    <p>
                        <span className="text-xl text-[#5C5B5B] font-semibold">Taste: </span>{" "}
                        <span className="text-[#5C5B5BE6]"> {taste}</span>
                    </p>
                    <p>
                        <span className="text-xl text-[#5C5B5B] font-semibold">Category: </span>{" "}
                        <span className="text-[#5C5B5BE6]"> {category}</span>
                    </p>
                    <p>
                        <span className="text-xl text-[#5C5B5B] font-semibold">Details: </span>{" "}
                        <span className="text-[#5C5B5BE6]"> {details}</span>
                    </p>
                </div>

            </div>
        </div>
    );
};

export default Details;