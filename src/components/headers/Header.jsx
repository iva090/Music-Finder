import { NavLink } from "react-router";
import BurgerMenu from "./BurgerMenu";
import Logo from "../../images/Logo.png";

export default function Header() {
  const navLinkClasses = ({ isActive }) =>
    `px-4 py-2 rounded-lg transition-all duration-300 font-medium ${
      isActive
        ? "bg-purple-800 text-white shadow-lg shadow-purple-900/20"
        : "text-gray-400 hover:text-white hover:bg-[#282828]"
    }`;

  return (
    <header className="sticky top-0 z-[100] w-full bg-[#121212]/90 backdrop-blur-md border-b border-purple-800/50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-center relative">
        <nav className="hidden md:flex items-center gap-2">
          <NavLink to="/" end className={navLinkClasses}>
            Songs
          </NavLink>
          <NavLink to="/favorites" end className={navLinkClasses}>
            Favorites
          </NavLink>
          <img src={Logo} className="h-10 items-left" />
          <NavLink to="/contact" end className={navLinkClasses}>
            Contact Us
          </NavLink>
          <NavLink to="/about" end className={navLinkClasses}>
            About
          </NavLink>
        </nav>
        <div className="md:hidden absolute sticky">
          <BurgerMenu />
        </div>
      </div>
    </header>
  );
}
