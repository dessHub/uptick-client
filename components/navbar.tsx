import { ChevronDownIcon } from '@chakra-ui/icons';
import { Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { useState } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

function NavLink({ to, children }) {
  return (
    <Link href={to}>
      <a
        className={`flex items-center justify-center h-20 px-2 mx-0 w-28 hover:bg-blue-900 hover:text-blue-200 hover:border-t-blue-200 hover:border-t`}
      >
        {children}
      </a>
    </Link>
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
        {/* logo container*/}
        <Link href="/">
          <a className="text-xl font-semibold" onClick={setOpen}>
            UPTICK
          </a>
        </Link>
      </div>
      <div className="flex flex-col ml-4">
        <a className="text-xl font-medium my-4" href="/loans" onClick={setOpen}>
          Loans
        </a>
        <a
          className="text-xl font-medium my-4"
          href="/remittance"
          onClick={setOpen}
        >
          Remittance
        </a>
        <a className="text-xl font-normal my-4" href="/users" onClick={setOpen}>
          Users
        </a>
        <a className="text-xl font-medium my-4" href="/" onClick={setOpen}>
          Manage Account
        </a>
        <a className="text-xl font-normal my-4" href="/" onClick={setOpen}>
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
        <Link href="/">
          <a
            className="text-2xl font-semibold h-20 px-2 flex items-center hover:bg-blue-900 hover:text-blue-200"
            href="/"
          >
            <span>UPTICK</span>
          </a>
        </Link>
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
          <NavLink to="/loans">Loans</NavLink>
          <NavLink to="/remittance">Remittance</NavLink>
          <NavLink to="/users">Users</NavLink>
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

NavLink.propTypes = {
  children: PropTypes.node,
  to: PropTypes.string,
};

MobileNav.propTypes = {
  open: PropTypes.bool,
  setOpen: PropTypes.func,
};
