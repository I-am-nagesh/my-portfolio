import { Link } from "react-router-dom";
import Footer from "../components/Footer";

import { FiMenu } from "react-icons/fi";
import {
  AiFillCloseCircle,
  AiOutlineUser,
  AiOutlineFundProjectionScreen,
} from "react-icons/ai";
import { FaHome } from "react-icons/fa";
import { MdOutlineContactPhone, MdOutlinePersonOutline } from "react-icons/md";
import { ImBlog } from "react-icons/im";

function Homelayout({ children }) {
  function changeWidth() {
    const drawerSide = document.getElementsByClassName("drawer-side");
    drawerSide[0].style.width = "auto";
  }

  function hideDrawer() {
    const element = document.getElementsByClassName("drawer-toggle");
    element[0].checked = false;

    const drawerSide = document.getElementsByClassName("drawer-side");
    drawerSide[0].style.width = "0";
  }

  return (
    <div className="min-h-[90vh]">
      <div className="drawer absolute left-0 z-50 w-full">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <label htmlFor="my-drawer">
            <FiMenu
              onClick={changeWidth}
              size={"32px"}
              className="font-bold text-white m-4"
            />
          </label>
        </div>
        <div className="drawer-side w-0">
          <label htmlFor="my-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-48 sm:w-80 bg-base-200 text-base-content relative">
            <li className="w-fit absolute right-2 z-50">
              <button onClick={hideDrawer}>
                <AiFillCloseCircle size={24} />
              </button>
            </li>
            <li>
              <Link to="/" className="text-xl text-white mt-10">
                <FaHome size={25} className="m-2" />
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-xl text-white">
                <MdOutlinePersonOutline size={25} className="m-2 " />
                About
              </Link>
            </li>
            <li>
              <Link to="/projects" className="text-xl text-white">
                <AiOutlineFundProjectionScreen size={25} className="m-2" />
                Projects
              </Link>
            </li>
            <li>
              <Link to="/resume" className="text-xl text-white">
                <AiOutlineUser size={25} className="m-2" />
                Resume
              </Link>
            </li>
            <li>
              <Link to="/contacts" className="text-xl text-white">
                <MdOutlineContactPhone size={25} className="m-2" />
                Contact
              </Link>
            </li>
            <li>
              <Link to="/blogs" className="text-xl text-white">
                <ImBlog size={25} className="m-2" />
                Blogs
              </Link>
            </li>
          </ul>
        </div>
      </div>
      {children}
      <Footer />
    </div>
  );
}
export default Homelayout;
