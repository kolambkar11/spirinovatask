import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { Bars3Icon, BellIcon } from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/20/solid";

const userNavigation = [
  { name: "Your profile", href: "#" },
  { name: "Sign out", href: "#" },
];

export default function Topnav(props) {
  let setSidebarOpen = props.setSidebarOpen;

  return (
    <>
      <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
        <button
          type="button"
          onClick={() => setSidebarOpen(true)}
          className="-m-2.5 p-2.5 text-gray-700 lg:hidden"
        >
          <span className="sr-only">Open sidebar</span>
          <Bars3Icon aria-hidden="true" className="h-6 w-6" />
        </button>

        {/* Separator */}
        <div aria-hidden="true" className="h-6 w-px bg-gray-900/10 lg:hidden" />

        <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
          <form action="#" method="GET" className="relative flex flex-1">
            <label htmlFor="search-field" className="sr-only">
              Search
            </label>
            <MagnifyingGlassIcon
              aria-hidden="true"
              className="pointer-events-none absolute inset-y-0 left-0 h-full w-5 text-gray-400"
            />
            <input
              id="search-field"
              name="search"
              type="search"
              placeholder="Search..."
              className="block h-full w-full border-0 py-0 pl-8 pr-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm"
            />
          </form>
          <div className="flex items-center gap-x-4 lg:gap-x-6">
            <button
              type="button"
              className="-m-2.5 p-2.5 text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only">View notifications</span>
              <BellIcon aria-hidden="true" className="h-6 w-6" />
            </button>

            {/* Separator */}
            <div
              aria-hidden="true"
              className="hidden lg:block lg:h-6 lg:w-px lg:bg-gray-900/10"
            />

            {/* Profile dropdown */}
            <Menu as="div" className="relative">
              <MenuButton className="-m-1.5 flex items-center p-1.5">
                <span className="sr-only">Open user menu</span>
                <img
                  alt=""
                  src="https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  className="h-8 w-8 rounded-full bg-gray-50"
                />
                <span className="hidden lg:flex lg:items-center">
                  <span
                    aria-hidden="true"
                    className="ml-4 text-sm font-semibold leading-6 text-gray-900"
                  >
                    Daren Joe
                  </span>
                  <ChevronDownIcon
                    aria-hidden="true"
                    className="ml-2 h-5 w-5 text-gray-400"
                  />
                </span>
              </MenuButton>
              <MenuItems
                transition
                className="absolute right-0 z-10 mt-2.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
              >
                {userNavigation.map((item) => (
                  <MenuItem key={item.name}>
                    <a
                      href={item.href}
                      className="block px-3 py-1 text-sm leading-6 text-gray-900 data-[focus]:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  </MenuItem>
                ))}
              </MenuItems>
            </Menu>
          </div>
        </div>
      </div>
    </>
  );
}