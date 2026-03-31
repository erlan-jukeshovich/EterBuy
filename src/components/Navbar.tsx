import { useState } from "react";
import { assets } from "../assets/assets";
import { NavLink, Link } from "react-router-dom";

interface NavLinkItem {
  readonly label: string;
  readonly href: string;
}

const NAV_LINKS: NavLinkItem[] = [
  { label: "HOME", href: "/" },
  { label: "COLLECTION", href: "/collection" },
  { label: "ABOUT", href: "/about" },
  { label: "CONTACT", href: "/contact" },
] as const;

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  return (
    <header>
      <div className="flex items-center justify-between py-5 font-medium max-w-[1280px] mx-auto">
        <Link to="/">
          <img
            src={assets.logo}
            className="w-36 hover:scale-110 transition-transform duration-300"
            alt="EterBuy logo"
          />
        </Link>
        <nav aria-label="Main Navigation">
          <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={label}>
                <NavLink
                  to={href}
                  className="group flex flex-col items-center gap-1 cursor-pointer hover:-translate-y-1 transition-transform duration-300"
                >
                  <span>{label}</span>
                  <hr
                    aria-hidden="true"
                    className="w-2/4 border-none h-[1.5px] bg-gray-700 opacity-0 group-[.active]:opacity-100 duration-300 scale-x-0 group-[.active]:scale-x-100 transition-all"
                  />
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-6">
          <button className="group" aria-label="search">
            <img
              src={assets.search_icon}
              className="w-5 cursor-pointer group-hover:scale-110 transition-transform"
              alt="search icon"
            />
          </button>

          <div className="group relative">
            <img
              src={assets.profile_icon}
              className="w-5 cursor-pointer group-hover:scale-110 transition-transform"
              alt="profile icon"
            />
            <div className="group-hover:block hidden absolute dropdown-menu right-[-15px] pt-4">
              <div className="flex flex-col gap-2 w-36  py-3 px-5 bg-slate-100 text-gray-500 rounded">
                <p className="cursor-pointer hover:text-black transition-color duration-300">
                  My Profile
                </p>
                <p className="cursor-pointer hover:text-black transition-color duration-300">
                  Orders
                </p>
                <p className="cursor-pointer hover:text-black transition-color duration-300">
                  Logout
                </p>
              </div>
            </div>
          </div>

          <Link to="/cart" className="relative group">
            <img
              src={assets.cart_icon}
              alt="cart-icon"
              className="w-5 min-w-5 group-hover:scale-110 transition-transform"
            />
            <span className="flex items-center justify-center absolute right-[-5px] bottom-[-5px] w-4 bg-black text-white aspect-square rounded-full text-[8px] group-hover:scale-110 transition-transform">
              12
            </span>
          </Link>
          <button
            onClick={() => setVisible(true)}
            className="sm:hidden p-1"
            aria-label="open menu"
          >
            <img src={assets.menu_icon} className="w-5 cursor-pointer" />
          </button>
        </div>
        {/* Sidebar menu for smaller screen */}
        <div
          className={`absolute top-0 left-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? "w-full" : "w-0"}`}
        >
          <div className="flex flex-col text-gray-600">
            <div
              onClick={() => setVisible(false)}
              className="flex items-center gap-4 p-5"
            >
              <img
                src={assets.dropdown_icon}
                alt="dropdown-icon"
                className="h-4 rotate-180"
              />
              <p>Back</p>
            </div>
            <NavLink
              onClick={() => setVisible(false)}
              className="py-2 pl-6 border-t"
              to="/"
            >
              HOME
            </NavLink>
            <NavLink
              onClick={() => setVisible(false)}
              className="py-2 pl-6 border-t"
              to="/collection"
            >
              COLLECTION
            </NavLink>
            <NavLink
              onClick={() => setVisible(false)}
              className="py-2 pl-6 border-t"
              to="/about"
            >
              ABOUT
            </NavLink>
            <NavLink
              onClick={() => setVisible(false)}
              className="py-2 pl-6 border-y"
              to="/contact"
            >
              CONTACT
            </NavLink>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
