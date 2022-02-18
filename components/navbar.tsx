import { Fragment } from 'react';
import Link from 'next/link';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { MenuIcon, PlusIcon, XIcon } from '@heroicons/react/outline';

const navigation = [
  { name: 'Dashboard', href: '/', current: false },
  { name: 'Users', href: '/users', current: false },
  { name: 'Loans', href: '/loans', current: false },
  { name: 'Remittance', href: '/remittance', current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Nav() {
  return (
    <Disclosure as="nav" className="bg-blue-800">
      {({ open }) => (
        <>
          <div className="border-solid border-1 mx-auto px-2 sm:px-6 z-20">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-blue-300 hover:bg-blue-900 hover:text-blue-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-200">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center mr-10 md:mr-1">
                  <Link href="/">
                    <a
                      className="text-2xl text-blue-200 font-semibold h-16 px-2 flex items-center hover:text-blue-200"
                      href="/"
                    >
                      <span>UPTICK</span>
                    </a>
                  </Link>
                </div>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex">
                    {navigation.map(item => (
                      <Link href={item.href} key={item.name}>
                        <a
                          className={classNames(
                            item.current
                              ? 'bg-blue-900 text-blue-200 border-t border-t-blue-200 hover:text-blue-300 hover:bg-blue-800  hover:border-t-blue-300'
                              : 'text-blue-300 hover:bg-blue-900 hover:text-blue-200',
                            'flex items-center justify-center hover:border-t px-3 py-2 text-sm font-medium h-16'
                          )}
                          aria-current={item.current ? 'page' : undefined}
                        >
                          {item.name}
                        </a>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <button
                  type="button"
                  className="flex items-center bg-sky-500 p-2 rounded-md text-slate-50 hover:text-blue-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                >
                  <PlusIcon className="w-5 mr-1" aria-hidden="true" />
                  <span className="text-md">Loan</span>
                </button>

                {/* Profile dropdown */}
                <Menu as="div" className="ml-3 relative">
                  <div>
                    <Menu.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                      <span className="text-xl text-blue-300 p-2">KK</span>
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-20">
                      <Menu.Item>
                        {({ active }) => (
                          <Link href="/">
                            <a
                              className={classNames(
                                active ? 'bg-gray-100' : '',
                                'block px-4 py-2 text-sm text-gray-700'
                              )}
                            >
                              My Profile
                            </a>
                          </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <Link href="/">
                            <a
                              className={classNames(
                                active ? 'bg-gray-100' : '',
                                'block px-4 py-2 text-sm text-gray-700'
                              )}
                            >
                              Sign out
                            </a>
                          </Link>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden absolute left-0 pt-3 h-screen w-screen bg-blue-800 z-10">
            <div className="px-0 pt-2 pb-3 space-y-1">
              {navigation.map(item => (
                <Link href={item.href} key={item.name}>
                  <a
                    className={classNames(
                      item.current
                        ? 'bg-blue-900 text-blue-200 hover:text-blue-300 hover:bg-blue-800'
                        : 'bg-blue-800 text-blue-300 hover:text-blue-300 hover:bg-blue-900 ',
                      'block px-3 py-2 rounded-md text-base font-medium'
                    )}
                    aria-current={item.current ? 'page' : undefined}
                  >
                    {item.name}
                  </a>
                </Link>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
