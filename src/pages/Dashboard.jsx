import { FaSitemap, FaUsers } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";
import usersLogo from "../assets/users.jpg";
import { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";

const Dashboard = () => {
    const allUsers = useLoaderData();
    const [coffees, setCoffees] = useState([]);
    useEffect(() => {
        fetch('https://coffees-store-server.vercel.app/coffee')
            .then((res) => res.json())
            .then(data => setCoffees(data))
    }, [])
    return (
        <div className="products-bg mb-12">
            <div>
                <div className="h-full">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 p-4 gap-4">
                        <div className="header-bg dark:bg-gray-800 shadow-lg rounded-md flex items-center justify-between p-3  dark:border-gray-600 text-white font-medium group">
                            <div className="flex justify-center items-center w-14 h-14 bg-white rounded-full transition-all duration-300 transform group-hover:rotate-12">
                                <FaUsers className="text-black text-3xl" />
                            </div>
                            <div className="text-right">
                                <p className="text-2xl">{allUsers.length}</p>
                                <p>Users</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-4 mx-4">
                        <div className="w-full overflow-hidden rounded-lg shadow-xs">
                            <div className="w-full overflow-x-auto">
                                <table className="w-full">
                                    <thead>
                                        <tr className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
                                            <th className="px-4 py-3">Name</th>
                                            <th className="px-4 py-3">Email</th>
                                            <th className="px-4 py-3">Time</th>
                                            <th className="px-4 py-3">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
                                        {
                                            allUsers.map(user => (
                                                <tr key={user._id} className="bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-900 text-gray-700 dark:text-gray-400">
                                                    <td className="px-4 py-3">
                                                        <div className="flex items-center text-sm">
                                                            <div className="relative hidden w-8 h-8 mr-3 rounded-full md:block">
                                                                <img className="object-cover w-full h-full rounded-full" src={user?.photoURL || usersLogo} alt="" loading="lazy" />
                                                                <div className="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                                                            </div>
                                                            <div>
                                                                <p className="font-semibold">{user?.displayName || "unknown"} </p>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="px-4 py-3 text-sm">{user?.email}</td>
                                                    <td className="px-4 py-3 text-sm">{user?.createdAt}</td>
                                                    <td className="px-4 py-3 text-xs">
                                                        <button className="p-2 text-white bg-[#EA4744] rounded-md">
                                                            <MdDelete />
                                                        </button>
                                                    </td>
                                                </tr>
                                            ))
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 p-4 gap-4">
                        <div className="header-bg dark:bg-gray-800 shadow-lg rounded-md flex items-center justify-between p-3  dark:border-gray-600 text-white font-medium group">
                            <div className="flex justify-center items-center w-14 h-14 bg-white rounded-full transition-all duration-300 transform group-hover:rotate-12">
                                <FaSitemap className="text-black text-3xl" />
                            </div>
                            <div className="text-right">
                                <p className="text-2xl">{coffees.length}</p>
                                <p>Coffee</p>
                            </div>
                        </div>
                    </div>
                    <div className="mt-4 mx-4">
                        <div className="w-full overflow-hidden rounded-lg shadow-xs">
                            <div className="w-full overflow-x-auto">
                                <table className="w-full">
                                    <thead>
                                        <tr className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
                                            <th className="px-4 py-3">coffeeName</th>
                                            <th className="px-4 py-3">chef</th>
                                            <th className="px-4 py-3">price</th>
                                            <th className="px-4 py-3">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
                                        {
                                            coffees.map(coffee => (
                                                <tr key={coffee._id} className="bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-900 text-gray-700 dark:text-gray-400">
                                                    <td className="px-4 py-3">
                                                        <div className="flex items-center text-sm">
                                                            <div className="relative hidden w-8 h-8 mr-3 rounded-full md:block">
                                                                <img className="object-cover w-full h-full rounded-full" src={coffee?.photoURL} alt="" loading="lazy" />
                                                                <div className="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                                                            </div>
                                                            <div>
                                                                <p className="font-semibold">{coffee?.coffeeName}</p>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="px-4 py-3 text-sm">{coffee?.chef}</td>
                                                    <td className="px-4 py-3 text-sm">{coffee?.price} TK</td>
                                                    <td className="px-4 py-3 text-xs">
                                                        <button className="p-2 text-white bg-[#EA4744] rounded-md">
                                                            <MdDelete />
                                                        </button>
                                                    </td>
                                                </tr>
                                            ))
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;