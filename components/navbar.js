import Link from "next/link";
import ThemeChanger from "./DarkSwitch";
import Image from "next/image";
import { Disclosure } from "@headlessui/react";
import { useState } from "react";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState(null);

  const handleHover = (index) => {
    setActiveLink(index);
  };

  const handleLeave = () => {
    setActiveLink(null);
  };

  const navigation = [
    { name: "Home", link: "/" },
    {
      name: "About Us",
      link: "#",
      subLinks: [
        { name: "Mission and Vision", link: "/mission-vision" },
        { name: "Our Values", link: "/our-values" },
        { name: "Our Team", link: "/team" },
        { name: "What Makes Us Different", link: "/what-makes-us-diffirent" },
      ],
    },
    {
      name: "Admission",
      link: "#",
      subLinks: [
        { name: "Our Fee", link: "/fee" },
        { name: "Student Registration", link: "/registration" },
      ],
    },

    {
      name: "Our School",
      link: "#",
      subLinks: [
        { name: "Overview", link: "/overview" },
        { name: "Curriculum", link: "/curriculum" },
        { name: "Our Community", link: "/our-community" },
      ],
    },
    {
      name: "Blog",
      link: "/blog",
    },
    {
      name: "Practical Informations",
      link: "#",

      subLinks: [
        { name: "Academic Calander", link: "/academic-calendar" },
        { name: "Uniform", link: "uniform" },
        { name: "Facilities", link: "facilities" },
      ],
    },
  ];

  return (
    <div className="w-full">
      <nav className="container relative flex flex-wrap items-center justify-between p-8 mx-auto lg:justify-between xl:px-0">
        {/* Logo */}

        {/* Mobile Menu */}
        <Disclosure>
          {({ open }) => (
            <>
              <div className="flex flex-wrap items-center justify-between w-full lg:w-auto">
                <Link href="/">
                  <p className="flex items-center space-x-2 text-2xl font-medium text-indigo-500 dark:text-gray-100">
                    <Image
                      src="/img/h.png"
                      alt="H"
                      width="96"
                      height="96"
                      className="w-12"
                    />
                    <span style={{ color: "darkblue" }}>Hope Academy</span>
                  </p>
                </Link>

                <Disclosure.Button
                  aria-label="Toggle Menu"
                  className="px-2 py-1 ml-auto text-gray-500 rounded-md lg:hidden hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:text-gray-300 dark:focus:bg-trueGray-700"
                >
                  <svg
                    className="w-6 h-6 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    {open && (
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                      />
                    )}
                    {!open && (
                      <path
                        fillRule="evenodd"
                        d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                      />
                    )}
                  </svg>
                </Disclosure.Button>

                <Disclosure.Panel className="flex flex-col w-full my-5 lg:hidden">
                  {navigation?.map((item, index) => (
                    <div key={index}>
                      <Link href={item.link}>
                        <p
                          className={`block px-2 py-2 text-gray-800 dark:text-gray-200 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none ${
                            activeLink === index && "font-bold"
                          }`}
                          onMouseEnter={() => handleHover(index)}
                          // onMouseLeave={handleLeave}
                        >
                          {item.name}
                        </p>
                      </Link>
                      {activeLink === index && item.subLinks && (
                        <ul
                          style={{ minWidth: "250px" }}
                          className="flex flex-col py-2 pl-4"
                        >
                          {item.subLinks.map((subItem, subIndex) => (
                            <li key={subIndex}>
                              <Link href={subItem.link}>
                                <p className="block px-2 py-2 text-gray-800 dark:text-gray-200 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none">
                                  {subItem.name}
                                </p>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </Disclosure.Panel>
              </div>
            </>
          )}
        </Disclosure>

        {/* Main Navigation - Desktop */}
        <ul className="hidden space-x-16 lg:flex">
          {navigation?.map((item, index) => (
            <li
              key={index}
              className="relative"
              onMouseEnter={() => handleHover(index)}
              onMouseLeave={handleLeave}
            >
              <Link href={item.link}>
                <p className="text-gray-800 dark:text-gray-200 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none">
                  {item.name}
                </p>
              </Link>
              {activeLink === index && item.subLinks && (
                <ul
                  style={{ minWidth: "250px" }}
                  className="flex flex-col absolute py-2"
                >
                  {item.subLinks.map((subItem, subIndex) => (
                    <li key={subIndex}>
                      <Link href={subItem.link}>
                        <p className="block px-2 py-2 text-gray-800 dark:text-gray-200 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none">
                          {subItem.name}
                        </p>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

        <div className="hidden mr-3 space-x-4 lg:flex nav__item">
          <ThemeChanger />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
