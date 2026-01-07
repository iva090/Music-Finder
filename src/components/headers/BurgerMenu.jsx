import { Menu, Portal } from "@skeletonlabs/skeleton-react";
import { MenuIcon } from "lucide-react";
import { NavLink } from "react-router-dom";

export default function BurgerMenu() {
  const linkStyle = "block w-full h-full p-2";

  return (
    <Menu>
      <Menu.Trigger className="btn p-2 hover:bg-white/10 rounded-full transition-colors">
        <MenuIcon className="text-white" />
      </Menu.Trigger>

      <Portal>
        <Menu.Positioner className="z-[9999]">
          <Menu.Content className="card bg-[#181818] border border-purple-800 shadow-2xl min-w-[200px] overflow-hidden">
            
            <Menu.Item value="songs" className="hover:bg-purple-800 cursor-pointer p-0">
              <NavLink to="/" end className={linkStyle}>
                Songs
              </NavLink>
            </Menu.Item>

            <Menu.Item value="favorites" className="hover:bg-purple-800 cursor-pointer p-0">
              <NavLink to="/favorites" className={linkStyle}>
                Favorites
              </NavLink>
            </Menu.Item>

            <Menu.Item value="contact" className="hover:bg-purple-800 cursor-pointer p-0">
              <NavLink to="/contact" className={linkStyle}>
                Contact Us
              </NavLink>
            </Menu.Item>

            <Menu.Item value="about" className="hover:bg-purple-800 cursor-pointer p-0">
              <NavLink to="/about" className={linkStyle}>
                About
              </NavLink>
            </Menu.Item>

          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu>
  );
}