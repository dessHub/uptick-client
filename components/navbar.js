import { ChevronDownIcon } from '@chakra-ui/icons';
import { Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { useState } from 'react';

function NavLink({ to, children }) {
  return (
    <a
      href={to}
      className={`flex items-center justify-center h-20 px-2 mx-0 w-28 hover:bg-blue-900 hover:text-blue-200 hover:border-t-blue-200 hover:border-t`}
    >
      {children}
    </a>
  );
}
function MobileNav({ open, setOpen }) {
  return (
    <div
      className={`absolute top-0 left-0 h-screen w-screen bg-blue-800 transform ${
        open ? '-translate-x-0' : '-translate-x-full'
      } transition-transform duration-300 ease-in-out filter drop-shadow-md `}
    >
      <div className="flex items-center justify-center ml-4 filter drop-shadow-md bg-blue-800 h-20">
        {' '}
        {/*logo container*/}
        <a className="text-xl font-semibold" href="/" onClick={setOpen}>
          UPTICK
        </a>
      </div>
      <div className="flex flex-col ml-4">
        <a className="text-xl font-medium my-4" href="/about" onClick={setOpen}>
          About
        </a>
        <a
          className="text-xl font-normal my-4"
          href="/contact"
          onClick={setOpen}
        >
          Contact
        </a>
        <a className="text-xl font-medium my-4" href="/about" onClick={setOpen}>
          Manage Account
        </a>
        <a
          className="text-xl font-normal my-4"
          href="/contact"
          onClick={setOpen}
        >
          Sign Out
        </a>
      </div>
    </div>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  function handleToggle() {
    setTimeout(() => {
      setOpen(!open);
    }, 100);
  }

  return (
    <nav className="flex filter drop-shadow-md bg-blue-800 text-blue-300 px-4 h-20 items-center">
      <MobileNav open={open} setOpen={handleToggle} />
      <div className="w-3/12 flex items-center">
        <a
          className="text-2xl font-semibold h-20 px-2 flex items-center hover:bg-blue-900 hover:text-blue-200"
          href="/"
        >
          <span>UPTICK</span>
        </a>
      </div>
      <div className="w-9/12 flex justify-end items-center ">
        <div
          className="z-50 flex relative w-8 h-8 flex-col justify-between items-center text-blue-300 md:hidden"
          onClick={handleToggle}
          role="button"
          aria-hidden="true"
        >
          {/* hamburger button */}
          <span
            className={`h-1 w-full bg-blue-300 rounded-lg transform transition duration-300 ease-in-out ${
              open ? 'rotate-45 translate-y-3.5' : ''
            }`}
          />
          <span
            className={`h-1 w-full bg-blue-300 rounded-lg transition-all duration-300 ease-in-out ${
              open ? 'w-0' : 'w-full'
            }`}
          />
          <span
            className={`h-1 w-full bg-blue-300 rounded-lg transform transition duration-300 ease-in-out ${
              open ? '-rotate-45 -translate-y-3.5' : ''
            }`}
          />
        </div>

        <div className="hidden md:flex">
          <NavLink to="/contact">CONTACT</NavLink>
          <NavLink to="/about">ABOUT</NavLink>
          <div className="flex items-center justify-center h-20 px-2 mx-0 w-28 hover:bg-blue-900 hover:text-blue-200 hover:border-t-blue-200 hover:border-t">
            <Menu>
              <MenuButton className="bg-blue-800">
                Oscar <ChevronDownIcon />
              </MenuButton>
              <MenuList backgroundColor="#1e40af">
                <MenuItem className="bg-blue-800 hover:bg-blue-900">
                  Manage Account
                </MenuItem>
                <MenuItem className="hover:bg-blue-900">Sign Out</MenuItem>
              </MenuList>
            </Menu>
          </div>
        </div>
      </div>
    </nav>
  );
}
