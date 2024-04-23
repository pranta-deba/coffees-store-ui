import { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignUp = () => {
    const [passShow, setPassShow] = useState(false);
    const [conPassShow, setConPassShow] = useState(false);
    const [signUpLoader, setSignUpLoader] = useState(false);
    const { createUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const handleCreateUser = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const confirm_password = e.target.confirm_password.value;
        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
            Swal.fire({
                title: "Invalid email address",
                icon: "warning"
            });
            return;
        }
        if (password.length < 6) {
            Swal.fire({
                title: "Password at least 6 characters",
                icon: "warning"
            });
            return;
        }
        if (password !== confirm_password) {
            Swal.fire({
                title: "Password and confirm password not match",
                icon: "warning"
            });
            return;
        }
        setSignUpLoader(true);
        createUser(email, password)
            .then(result => {
                console.log(result.user);
                fetch("https://coffees-store-server.vercel.app/user",
                    {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({ email, password, createdAt: result?.user?.metadata?.creationTime, role: false })
                    })
                    .then(res => res.json())
                    .then(data => {
                        if (data.insertedId) {
                            toast.success('Registration successfully.', {
                                position: "bottom-left",
                                autoClose: 2000,
                                hideProgressBar: false,
                                closeOnClick: true,
                                pauseOnHover: true,
                                draggable: true,
                                progress: undefined,
                                theme: "light",
                                transition: Bounce,
                            });
                            e.target.reset();
                            setTimeout(() => {
                                setSignUpLoader(false);
                                navigate("/");
                            }, 2000)
                        }
                    })
            })
            .catch(error => {
                console.log(error.message);
                setSignUpLoader(false);
            });

    }

    return (
        <div className="my-8 products-bg">
            <div className="flex justify-center">
                <div className="w-full max-w-md space-y-4  dark:bg-gray-50 dark:text-gray-800 shadow-lg p-3 md:p-14 bg-[#F4F3F0] rounded-lg">
                    <h1 className="text-2xl font-bold text-center rancho">Create a account</h1>
                    <form onSubmit={handleCreateUser} className="space-y-6">
                        <div>
                            <label htmlFor="email" className="block text-left mb-3 text-md font-semibold">Email</label>
                            <input
                                type="email"
                                placeholder="Enter a email address"
                                name="email"
                                id="email"
                                className="w-full bg-white p-3 raleway  border-2 border-transparent focus:border-[#E3B577] focus:rounded-md focus:shadow-md focus:shadow-[#E3B577]"
                                required
                            />
                        </div>
                        <div className="relative">
                            <label htmlFor="password" className="block text-left mb-3 text-md font-semibold">Password</label>
                            <input
                                type={passShow ? "text" : "password"}
                                placeholder="Enter a password"
                                name="password"
                                id="password"
                                className="w-full bg-white p-3 raleway  border-2 border-transparent focus:border-[#E3B577] focus:rounded-md focus:shadow-md focus:shadow-[#E3B577]"
                                required
                            />
                            {!passShow ? <span onClick={() => setPassShow(!passShow)} className="absolute right-3 bottom-[16px] cursor-pointer overflow-hidden z-10 bg-base-100 px-1 raleway text-sm">Show</span> :
                                <span onClick={() => setPassShow(!passShow)} className="absolute right-3 bottom-[16px] cursor-pointer overflow-hidden z-10 bg-base-100 px-1 raleway text-sm">Hide</span>}
                        </div>
                        <div className="relative">
                            <label htmlFor="confirm_password" className="block text-left mb-3 text-md font-semibold">Confirm Password</label>
                            <input
                                type={conPassShow ? "text" : "password"}
                                placeholder="Enter a password"
                                name="confirm_password"
                                id="confirm_password"
                                className="w-full bg-white p-3 raleway  border-2 border-transparent focus:border-[#E3B577] focus:rounded-md focus:shadow-md focus:shadow-[#E3B577]"
                                required
                            />
                            {!conPassShow ? <span onClick={() => setConPassShow(!conPassShow)} className="absolute right-3 bottom-[16px] cursor-pointer overflow-hidden z-10 bg-base-100 px-1 raleway text-sm">Show</span> :
                                <span onClick={() => setConPassShow(!conPassShow)} className="absolute right-3 bottom-[16px] cursor-pointer overflow-hidden z-10 bg-base-100 px-1 raleway text-sm">Hide</span>}
                        </div>
                        <div className="flex items-center gap-1">
                            <input
                                type="checkbox"
                                name="checkbox"
                                id="checkbox"
                                className="checkbox checkbox-sm bg-white p-3 raleway  border border-black focus:border-[#E3B577] focus:rounded-md focus:shadow-md focus:shadow-[#E3B577]"
                                required
                            />
                            <label htmlFor="checkbox">Agree to <span className="text-blue-500">terms and conditions</span></label>
                        </div>
                        <button type="submit" className="rancho rounded-full bg-[#D2B48C] border-2 border-[#331A15] px-5 py-2 text-2xl btn w-full">
                            {!signUpLoader ? "Sign Up" :
                                <span className="loading loading-dots loading-md"></span>}
                        </button>
                    </form>
                    <div className="flex justify-center">
                        <p className="text-md text-center sm:px-6 dark:text-gray-600 raleway">Already account?
                            <NavLink to="/sign_in" className="underline dark:text-gray-800"> Sign In</NavLink>
                        </p>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default SignUp;