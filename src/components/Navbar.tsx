import { assets } from "../assets/assets";
import { NavLink } from "react-router-dom";

const STYLE = "flex flex-col items-center gap-1";

const PROPS = [
  { label: "HOME", href: "/" },
  { label: "COLLECTION", href: "/collection" },
  { label: "ABOUT", href: "/about" },
  { label: "CONTACT", href: "/contact" },
];

const Navbar = () => {
  return (
    <header>
      <div className="flex items-center justify-between py-5 font-medium">
        <NavLink to="/">
          <img src={assets.logo} className="w-36" alt="logo" />
        </NavLink>
        <nav>
          <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
            {PROPS.map((prop) => (
              <li key={prop.label}>
                <NavLink to={prop.href} className={STYLE}>
                  <p>{prop.label}</p>
                  <hr className="w-2/4 border-none h-[1.5px] bg-gray-700" />
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
