// import { Link } from "react-router-dom";

// export default function Nabvar() {
//     return (
//         <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
//             <div className="container flex flex-wrap items-center justify-between mx-auto">
//                 <Link to={'/'}><a className="flex items-center">
//                     <img src="https://flowbite.com/docs/images/logo.svg" className="h-6 mr-3 sm:h-9" alt="Flowbite Logo" />
//                     <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
//                 </a></Link>
//             </div>
//         </nav>
//     );
// }

// import { Link } from "react-router-dom";
// import { useOktaAuth } from "@okta/okta-react";

// const Navbar = () => {
//     const { oktaAuth, authState } = useOktaAuth();

//     const login = async () => oktaAuth.signInWithRedirect({ originalUri: "/" });

//     const logout = async () => oktaAuth.signOut();

//     return (
//         <div>
//             <Link to="/">
//                 <h2>SilverJoy Estate</h2>
//             </Link>
//             <ul>
//                 <li>
//                     <Link to="/profile">Profile</Link>
//                 </li>
//                 <li>
//                     {
//                         authState?.isAuthenticated ? (
//                             <button onClick={logout}>Logout</button>
//                         ) : (
//                             <button onClick={login}>Login</button>
//                         )
//                     }
//                 </li>
//             </ul>
//         </div>
//     )
// }
// export default Navbar;

import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav>
      <Link id='home-nav-link' to='/'>Home</Link>
      <Link id='protected-nav-link' to='/protected'>Protected</Link>
    </nav>
  );
};

export default Nav;