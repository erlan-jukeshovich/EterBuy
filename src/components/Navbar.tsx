import { useEffect, useState } from "react";
import { assets } from "../assets/assets";
import { NavLink, Link } from "react-router-dom";

interface NavLinkItem {
  readonly label: string;
  readonly to: string;
}

const NAV_LINKS: NavLinkItem[] = [
  { label: "HOME", to: "/" },
  { label: "COLLECTION", to: "/collection" },
  { label: "ABOUT", to: "/about" },
  { label: "CONTACT", to: "/contact" },
] as const;

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    document.body.style.overflow = visible ? "hidden" : "unset";
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setVisible(false);
    };

    window.addEventListener("keydown", handleEsc);
    return () => {
      window.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "unset";
    };
  }, [visible]);

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
            {NAV_LINKS.map(({ label, to }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  className="group flex flex-col items-center gap-1 cursor-pointer hover:-translate-y-1 transition-transform duration-300"
                >
                  <span>{label}</span>
                  <span
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

          <button
            aria-label="Open profile menu"
            className="group relative text-left"
          >
            <img
              src={assets.profile_icon}
              className="w-5 cursor-pointer group-hover:scale-110 transition-transform"
            />
            <div className="group-hover:block hidden absolute dropdown-menu right-[-15px] pt-4">
              <div
                role="menu"
                className="flex flex-col items-baseline gap-2 w-50  py-3 px-5 bg-slate-100 text-gray-500 rounded"
              >
                <button
                  role="menuitem"
                  className="cursor-pointer hover:text-black transition-color duration-300"
                >
                  MY PROFILE
                </button>
                <button
                  role="menuitem"
                  className="cursor-pointer hover:text-black transition-color duration-300"
                >
                  ORDERS
                </button>
                <button
                  role="menuitem"
                  className="cursor-pointer hover:text-black transition-color duration-300"
                >
                  LOGOUT
                </button>
              </div>
            </div>
          </button>

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
            onClick={() => setVisible(!visible)}
            className="sm:hidden p-1"
            aria-label="open menu"
            aria-expanded={visible}
            aria-controls="mobile-menu"
          >
            <img src={assets.menu_icon} className="w-5 cursor-pointer" />
          </button>
        </div>
        {/* Sidebar menu for smaller screen */}
        <div
          id="mobile-menu"
          className={`fixed inset-y-0 left-0  overflow-hidden z-50 bg-white shadow-2xl transition-transform duration-300 ease-in-out ${visible ? "translate-x-0" : "-translate-x-full"} w-full sm:w-80`}
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
              <p>BACK</p>
            </div>
            {NAV_LINKS.map(({ label, to }) => (
              <NavLink
                onClick={() => setVisible(false)}
                className="py-2 pl-6"
                to={to}
              >
                {label}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
