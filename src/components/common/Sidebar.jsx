import { useState } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  TransitionChild,
} from "@headlessui/react";
import {
  CalendarIcon,
  Cog6ToothIcon,
  DocumentDuplicateIcon,
  FolderIcon,
  HomeIcon,
  UsersIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { NavLink } from "react-router-dom";
const isActive = "bg-blue-700 text-white";
const navigation = [
  { name: "Dashboard", href: "/", icon: HomeIcon, current: true },
  {
    name: "Assets",
    href: "/assets",
    icon: UsersIcon,
    current: false,
  },
  {
    name: "Jobs",
    href: "/jobs",
    icon: FolderIcon,
    current: false,
  },
  {
    name: "Render",
    href: "/render",
    icon: CalendarIcon,
    current: false,
  },
  {
    name: "Reports",
    href: "/reports",
    icon: DocumentDuplicateIcon,
    current: false,
  },
];
const teams = [
  { id: 1, name: "Help", href: "#", initial: "H", current: false },
  { id: 2, name: "Setting", href: "#", initial: "S", current: false },
  { id: 3, name: "Support", href: "#", initial: "S", current: false },
  { id: 4, name: "Feedback", href: "#", initial: "F", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Sidebar(props) {
  let sidebarOpen = props.sidebarOpen;
  let setSidebarOpen = props.setSidebarOpen;
  return (
    <>
      <Dialog
        open={sidebarOpen}
        onClose={setSidebarOpen}
        className="relative z-50 lg:hidden"
      >
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-gray-900/80 transition-opacity duration-300 ease-linear data-[closed]:opacity-0"
        />

        <div className="fixed inset-0 flex">
          <DialogPanel
            transition
            className="relative mr-16 flex w-full max-w-xs flex-1 transform transition duration-300 ease-in-out data-[closed]:-translate-x-full"
          >
            <TransitionChild>
              <div className="absolute left-full top-0 flex w-16 justify-center pt-5 duration-300 ease-in-out data-[closed]:opacity-0">
                <button
                  type="button"
                  onClick={() => setSidebarOpen(false)}
                  className="-m-2.5 p-2.5"
                >
                  <span className="sr-only">Close sidebar</span>
                  <XMarkIcon
                    aria-hidden="true"
                    className="h-6 w-6 text-white"
                  />
                </button>
              </div>
            </TransitionChild>
            {/* Sidebar component, swap this element with another sidebar if you like */}
            <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-blue-950 px-6 pb-4">
              <div className="flex h-16 shrink-0 items-center">
                Spirinova Task
              </div>
              <nav className="flex flex-1 flex-col">
                <ul role="list" className="flex flex-1 flex-col gap-y-7">
                  <li>
                    <ul role="list" className="-mx-2 space-y-1">
                      {navigation.map((item) => (
                        <li key={item.name}>
                          <NavLink
                            to={item.href}
                            className={({ isActive }) =>
                              classNames(
                                isActive
                                  ? "bg-blue-700 text-white"
                                  : "text-gray-400 hover:bg-blue-700 hover:text-white",
                                "group flex gap-x-3 rounded-md p-2 text-sm  leading-6"
                              )
                            }
                          >
                            <item.icon
                              aria-hidden="true"
                              className={classNames(
                                item.current
                                  ? "text-white"
                                  : "text-gray-400 group-hover:text-white",
                                "h-6 w-6 shrink-0"
                              )}
                            />
                            {item.name}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  </li>
                </ul>
              </nav>
            </div>
          </DialogPanel>
        </div>
      </Dialog>

      {/* Static sidebar for desktop */}
      <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
        {/* Sidebar component, swap this element with another sidebar if you like */}
        <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-blue-950 px-6 pb-4">
          <div className="flex h-16 shrink-0 items-center">
            <h1 className="text-3xl text-white">Spirinova Task</h1>
          </div>
          <nav className="flex flex-1 flex-col">
            <ul role="list" className="flex flex-1 flex-col gap-y-7">
              <li>
                <ul role="list" className="-mx-2 space-y-1">
                  {navigation.map((item) => (
                    <li key={item.name}>
                      <NavLink
                        to={item.href}
                        className={({ isActive }) =>
                          classNames(
                            isActive
                              ? "bg-blue-700 text-white"
                              : "text-gray-400 hover:bg-blue-700 hover:text-white",
                            "group flex gap-x-3 rounded-md p-2 text-sm  leading-6"
                          )
                        }
                      >
                        <item.icon
                          aria-hidden="true"
                          className={classNames(
                            item.current
                              ? "text-white"
                              : "text-gray-400 group-hover:text-white",
                            "h-6 w-6 shrink-0"
                          )}
                        />
                        {item.name}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </li>
              <span className="w-full border border-b-0 border-stone-500"></span>
              <li>
                <ul role="list" className="-mx-2 mt-2 space-y-1">
                  {teams.map((team) => (
                    <li key={team.name}>
                      <a
                        href={team.href}
                        className={classNames(
                          team.current
                            ? "bg-blue-700 text-white"
                            : "text-gray-400 hover:bg-blue-700 hover:text-white",
                          "group flex gap-x-3 rounded-md p-2 text-sm  leading-6"
                        )}
                      >
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-indigo-400 bg-indigo-500 text-[0.625rem] font-medium text-white">
                          {team.initial}
                        </span>
                        <span className="truncate">{team.name}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}
