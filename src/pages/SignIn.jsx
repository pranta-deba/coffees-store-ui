import { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignIn = () => {
    const [passShow, setPassShow] = useState(false);
    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const [signInLoader, setSignInLoader] = useState(false);

    const handleSignIn = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
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
        setSignInLoader(true);
        signIn(email, password)
            .then(result => {
                fetch('https://coffees-store-server.vercel.app/user',{
                    method: "PATCH",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        email: result.user?.email,
                        lastSignInTime: result.user?.metadata?.lastSignInTime
                    })
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.modifiedCount > 0) {
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
                                setSignInLoader(false);
                                navigate("/");
                            }, 2000)
                        } else {
                            Swal.fire({
                                title: "Login failed.",
                                icon: "error"
                            });
                            setSignInLoader(false);
                        }
                    })
            })
            .catch(error => {
                console.log(error.message);
                setSignInLoader(false);
            })
    }

    return (
        <div className="my-8 products-bg">
            <div className="flex justify-center">
                <div className="w-full max-w-md space-y-3  dark:bg-gray-50 dark:text-gray-800 shadow-lg p-3 md:p-14 bg-[#F4F3F0] rounded-lg">
                    <h1 className="text-2xl font-bold text-center rancho">Please login</h1>
                    <form onSubmit={handleSignIn} className="space-y-6">
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
                        <button type="submit" className="rancho rounded-full bg-[#D2B48C] border-2 border-[#331A15] px-5 py-2 text-2xl btn w-full">
                        {!signInLoader ? "Sign In" :
                                <span className="loading loading-dots loading-md"></span>}
                        </button>
                    </form>
                    <div className="flex items-center pt-4 space-x-1">
                        <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
                        <p className="px-3 text-sm dark:text-gray-600 raleway">Login with</p>
                        <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
                    </div>
                    <div className="flex justify-center space-x-4">
                        <button aria-label="Log in with Google" className="p-3 flex items-center gap-1 border rounded-full px-6 btn raleway">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current text-blue-600">
                                <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                            </svg>
                            <span>
                                <span className="text-red-500">o</span>
                                <span className="text-yellow-500">o</span>
                                <span className="text-blue-600">g</span>
                                <span className="text-green-600">l</span>
                                <span className="text-red-500">e</span>
                            </span>
                        </button>
                    </div>
                    <div className="flex justify-center">
                        <p className="text-md text-center sm:px-6 dark:text-gray-600 raleway">Dont have an account?
                            <NavLink to="/sign_up" className="underline dark:text-gray-800"> Sign up</NavLink>
                        </p>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default SignIn;