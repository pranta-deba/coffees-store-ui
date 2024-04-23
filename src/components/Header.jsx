import { Link } from "react-router-dom";
import logo from "../assets/more/2.png";
import usersLogo from "../assets/users.jpg";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { MdDelete } from "react-icons/md";

const Header = () => {
  const { user, logOut, role, cartValue, total, handleCartDelete} = useContext(AuthContext);

  const handleLogOut = () => {
    logOut().then(() => {
    }).catch((error) => {
      console.log(error.message);
    });
  }


  return (
    <header className="navbar header-bg text-white px-4">
      <div className="flex-1 flex items-center rancho gap-4">
        <img src={logo} alt="" className="w-[55px]" />
        <Link to="/" className="text-4xl font-normal">HoT CoFFee</Link>
      </div>
      <div className="flex-none gap-4">
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <div className="indicator">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
              <span className="badge badge-sm indicator-item">{cartValue.length}</span>
            </div>
          </div>
          <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-[#E3B577] text-black raleway shadow raleway">
            <div className="card-body">
              <span className="font-bold text-lg rancho">{cartValue.length} Items</span>
              <span className="flex items-center gap-1">Subtotal: <span className="font-bold rancho">{total}</span> taka</span>
              <div className="card-actions">
                {
                  cartValue.map((item, idx) => (
                    <div key={idx} className="w-full flex gap-2 bg-[#F5F4F1] p-2 rounded-lg">
                      <img src={item.photoURL} alt="" className="w-[15px]" />
                      <p>{item.coffeeName}</p>
                      <button onClick={()=>handleCartDelete(item._id)} className="text-2xl text-red-500"><MdDelete /></button>
                    </div>
                  ))
                }
                <button className="btn btn-block">View cart</button>
              </div>
            </div>
          </div>
        </div>

        {user ? <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img alt="" src={usersLogo} />
            </div>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-[#E3B577] text-black raleway font-semibold rounded-box w-52 py-4 space-y-3">
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            {role && <li><Link to="/dashboard">Dashboard</Link></li>}
            <li><a onClick={handleLogOut}>Logout</a></li>
          </ul>
        </div>
          :
          <Link to="/sign_in" className="rancho text-2xl font-normal bg-[#E3B577] text-black btn outline-none hover:bg-transparent hover:text-white border-2 border-transparent hover:border-white ">Sign In</Link>}
      </div>
    </header>
  );
};

export default Header;
