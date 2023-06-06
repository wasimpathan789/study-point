import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RiMenu3Fill } from "react-icons/Ri";
import { MdOutlineClose } from "react-icons/Md";



// RiMenu3Fill

const Navbar = () => {
  const [data, setData] = useState([]);
  const [searchInput, setSearchInput] = useState('');

  const [open, setOpen] = useState(false);

  const hamburgerHandler = () => {
    setOpen(!open);
  }
  return (
    <nav className="flex justify-between items-center relative bg-purple-400 w-full lg:py-2 py-4 px-6 ">
      <div className=" flex items-center gap-4 ">
        <div>
          <h1 className="text-white  text-2xl">Study Point</h1>
        </div>
        <div className=" ">
          <Link to={"add"} className="text-white font-semibold text-lg ml-4 ">
            {" "}
            Add Member
          </Link>
          {/* <Link to={'new'} className='text-white  text-lg ml-4 '> Addr</Link> */}
          <Link to={"all"} className="text-white  text-lg ml-4 ">
            {" "}
            All Member
          </Link>
          <Link className="ml-8" to={"search"}>
            {" "}
            {/* Search */}
            <input type="text" />
          </Link>
        </div>
      </div>
      <div className=" xs:block min-[680px]:hidden  " onClick={hamburgerHandler}>
        {open ?   <MdOutlineClose  style={{fontSize: "30px"}}/> :   <RiMenu3Fill style={{fontSize: "30px"}}/>  }
    

        
      </div>
    </nav>
  );
};

export default Navbar;
