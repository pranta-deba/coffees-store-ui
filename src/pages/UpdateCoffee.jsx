import { useEffect, useRef } from "react";
import { IoChevronBack } from "react-icons/io5";
import { NavLink, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
    const data = useLoaderData();
    const { _id: id, coffeeName, chef, supplier, taste, category, details, photoURL, price } = data || {};
    const focusRef = useRef();
    useEffect(() => {
        if (focusRef.current) {
            focusRef.current.focus();
        }
    }, [data])

    const handleUpdateCoffee = e => {
        e.preventDefault();
        const coffeeName = e.target.coffeeName.value;
        const chef = e.target.chef.value;
        const supplier = e.target.supplier.value;
        const taste = e.target.taste.value;
        const category = e.target.category.value;
        const details = e.target.details.value;
        const photoURL = e.target.photoURL.value;
        const price = e.target.price.value;
        const updatedCoffee = {
            coffeeName,
            chef,
            supplier,
            taste,
            category,
            details,
            photoURL,
            price,
        };
        fetch(`https://coffees-store-server.vercel.app/coffee/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedCoffee)
        })
            .then((response) => response.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: "Coffee updated successfully",
                        icon: "success"
                    });
                    e.target.reset();
                } else {
                    Swal.fire({
                        icon: "error",
                        title: "Something went wrong, please try again later!",
                    });
                }
            });
    }
    return (
        <div className="products-bg mb-8 md:mb-20 md:pb-12">
            <div className="max-w-[1550px] w-[95%] md:w-[80%] mx-auto">
                <div>
                    <NavLink
                        to={-1}
                        className="flex items-center gap-1  rancho my-5 text-[#374151] text-3xl"
                    >
                        <IoChevronBack /> Back to home
                    </NavLink>
                </div>
                <div className="text-center p-3 md:p-14 bg-[#F4F3F0] rounded-lg">
                    <h1 className="rancho text-3xl font-semibold">Update Existing Coffee Details</h1>
                    <p className="max-w-[870px] mx-auto raleway text-sm mb-11">It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
                    <form onSubmit={handleUpdateCoffee} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label htmlFor="name" className="block text-left mb-3 text-xl font-semibold">Name</label>
                            <input
                                type="text"
                                placeholder="Enter coffee name"
                                name="coffeeName"
                                id="name"
                                ref={focusRef}
                                defaultValue={coffeeName}
                                className="w-full bg-white p-3 raleway  border-2 border-transparent focus:border-[#E3B577] focus:rounded-md focus:shadow-md focus:shadow-[#E3B577]"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="chef" className="block text-left mb-3 text-xl font-semibold">Chef</label>
                            <input
                                type="text"
                                placeholder="Enter coffee chef"
                                name="chef"
                                defaultValue={chef}
                                id="chef"
                                className="w-full bg-white p-3 raleway  border-2 border-transparent focus:border-[#E3B577] focus:rounded-md focus:shadow-md focus:shadow-[#E3B577]"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="supplier" className="block text-left mb-3 text-xl font-semibold">Supplier</label>
                            <input
                                type="text"
                                placeholder="Enter coffee supplier"
                                name="supplier"
                                defaultValue={supplier}
                                id="supplier"
                                className="w-full bg-white p-3 raleway  border-2 border-transparent focus:border-[#E3B577] focus:rounded-md focus:shadow-md focus:shadow-[#E3B577]"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="taste" className="block text-left mb-3 text-xl font-semibold">Taste</label>
                            <input
                                type="text"
                                placeholder="Enter coffee taste"
                                name="taste"
                                defaultValue={taste}
                                id="taste"
                                className="w-full bg-white p-3 raleway  border-2 border-transparent focus:border-[#E3B577] focus:rounded-md focus:shadow-md focus:shadow-[#E3B577]"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="category" className="block text-left mb-3 text-xl font-semibold">Category</label>
                            <input
                                type="text"
                                placeholder="Enter coffee category"
                                name="category"
                                defaultValue={category}
                                id="category"
                                className="w-full bg-white p-3 raleway  border-2 border-transparent focus:border-[#E3B577] focus:rounded-md focus:shadow-md focus:shadow-[#E3B577]"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="details" className="block text-left mb-3 text-xl font-semibold">Details</label>
                            <input
                                type="text"
                                placeholder="Enter coffee details"
                                name="details"
                                defaultValue={details}
                                id="details"
                                className="w-full bg-white p-3 raleway  border-2 border-transparent focus:border-[#E3B577] focus:rounded-md focus:shadow-md focus:shadow-[#E3B577]"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="photoURL" className="block text-left mb-3 text-xl font-semibold">Photo</label>
                            <input
                                type="text"
                                placeholder="Enter photo URL"
                                name="photoURL"
                                defaultValue={photoURL}
                                id="photoURL"
                                className="w-full bg-white p-3 raleway  border-2 border-transparent focus:border-[#E3B577] focus:rounded-md focus:shadow-md focus:shadow-[#E3B577]"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="price" className="block text-left mb-3 text-xl font-semibold">Price</label>
                            <input
                                type="number"
                                placeholder="Enter a price"
                                name="price"
                                defaultValue={price}
                                id="price"
                                className="w-full bg-white p-3 raleway  border-2 border-transparent focus:border-[#E3B577] focus:rounded-md focus:shadow-md focus:shadow-[#E3B577]"
                                required
                            />
                        </div>
                        <button type="submit" className="md:col-span-2 rancho rounded-full bg-[#D2B48C] border-2 border-[#331A15] px-5 py-2 text-2xl btn">
                            Update Coffee Details
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateCoffee;