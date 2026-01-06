import { Menu, Portal } from '@skeletonlabs/skeleton-react'
import { MenuIcon } from 'lucide-react';

export default function BurgerMenu() {
  return (
    <Menu>
      <Menu.Trigger className="btn p-2 hover:bg-white/10 rounded-full transition-colors">
        <MenuIcon className="text-white" />
      </Menu.Trigger>
      
      <Portal>
        <Menu.Positioner className="z-[100]">
          <Menu.Content className="card p-2 bg-[#181818] border border-purple-800 shadow-2xl min-w-[200px]">
            <Menu.Item value="songs" className="hover:bg-purple-800 p-2 rounded cursor-pointer">
              <Menu.ItemText>Songs</Menu.ItemText>
            </Menu.Item>
            <Menu.Item value="favorites" className="hover:bg-purple-800 p-2 rounded cursor-pointer">
              <Menu.ItemText>Favorites</Menu.ItemText>
            </Menu.Item>
            <Menu.Separator className="border-t border-purple-800/50 my-1" />
            <Menu.Item value="about" className="hover:bg-purple-800 p-2 rounded cursor-pointer">
              <Menu.ItemText>About</Menu.ItemText>
            </Menu.Item>
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu>
  );
}