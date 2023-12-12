import { NavLink } from "react-router-dom";
import profile from "../../assets/profile-image/alif.jpg"


const Navbar = () => {

  const navbar = (
    <>
      <li><NavLink to={"/"}>home</NavLink></li>
      <li><NavLink to={"/profile"}>Profile</NavLink></li>
      <li><NavLink to={"/about"}>About</NavLink></li>
    </>
  );
     
     return (
       <div className="max-w-screen-2xl mx-auto mt-10">
         <div className="navbar">
           <div className="navbar-start">
             <div className="dropdown ">
               <div
                 tabIndex={0}
                 role="button"
                 className="btn btn-ghost lg:hidden">
                 <svg
                   xmlns="http://www.w3.org/2000/svg"
                   className="h-5 w-5"
                   fill="none"
                   viewBox="0 0 24 24"
                   stroke="currentColor">
                   <path
                     strokeLinecap="round"
                     strokeLinejoin="round"
                     strokeWidth="2"
                     d="M4 6h16M4 12h8m-8 6h16"
                   />
                 </svg>
               </div>
               <ul
                 tabIndex={0}
                 className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                 {navbar}
               </ul>
             </div>
             <div className="avatar flex ml-[340px] lg:ml-0 md:ml-0 items-center gap-4">
               <div className="w-20 rounded-full">
                 <img src={profile} />
               </div>
               <h1 className="text-2xl font-medium">ALIF</h1>
             </div>
           </div>
           <div className="navbar-center hidden lg:flex">
             <ul className="menu menu-horizontal px-1">{navbar}</ul>
           </div>
         </div>
       </div>
     );
};

export default Navbar;