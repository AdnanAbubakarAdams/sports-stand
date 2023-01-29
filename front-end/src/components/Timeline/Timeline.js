import React from 'react'; 
import { useNavigate } from 'react-router-dom';
import { userContext } from "../../Providers/UserProvider";
import { signOut } from '../../Services/Firebase';
import { useContext } from 'react';


const Timeline = () => {
  // const { applicationUser, displayName, photoURL, signOut } = useContext(AuthContext);

  return (
    <nav className="bg-gray-800 flex items-center justify-between flex-wrap p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <img src="/images/logoGS.png" alt="logo" className="h-8" />
        <span className="font-semibold text-xl tracking-tight">Brand</span>
      </div>
      <div className="block lg:hidden">
        <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
          <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
        </button>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow">
          <img src={applicationUser.profilephoto ? applicationUser.profilephoto : photoURL} className="h-8 rounded-full mr-4" alt={displayName} />
          <span className="block mt-4 lg:inline-block lg:mt-0 text-white">
            {applicationUser.verified ? (
              <i className="fas fa-circle-check text-green-500"></i>
            ) : null}
            {displayName.split(" ").shift()}
          </span>
        </div>
        <div className="text-sm">
          <button className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">Sign Out</button>
          <i className="fas fa-envelope text-white mx-4"></i>
          <i className="fas fa-bell text-white"></i>
        </div>
      </div>
    </nav>
  );
};


export default Timeline