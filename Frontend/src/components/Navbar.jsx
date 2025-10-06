import React from "react";
import { Link } from "react-router-dom";
import CreatePage from "../pages/CreatePage";
import { FaPlus } from "react-icons/fa6";

function Navbar() {
  return (
    <nav className="navbar bg-base-300 mb-4 shadow-lg">
      <div className="max-w-7xl px-2 mx-auto w-full">
        <div className="flex justify-between items-center">
          <h3>NoteApp</h3>

          <div className="flex gap-4 items-center btn btn-primary">
            <FaPlus />
            <Link to="/create" className="">
              Create Note
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
