import React from 'react';
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-base-100 shadow-md">
      <div className="container mx-auto p-4">
        <nav className="flex justify-between items-center">
          <div className="flex-none">
            <h1 className="text-2xl font-bold">Computational Toolkits</h1>
          </div>
          <div className="flex align-items-center">
            <ul className="menu menu-horizontal p-0">
              <li><Link to="/about" className="btn btn-ghost">About</Link></li>
              <li><Link to="/contact" className="btn btn-ghost">Contact</Link></li>
            </ul>
            <label className="flex cursor-pointer gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" /></svg>
              <input type="checkbox" value="synthwave" className="toggle theme-controller" />
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
            </label>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;