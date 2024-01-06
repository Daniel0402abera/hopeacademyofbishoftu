'use client'
import React, { useState } from 'react';
import Link from "next/link";
import ThemeChanger from "./DarkSwitch";
import Image from "next/image";
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
        { name: "Our Fee", link: "/admission/fee" },
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
    { name: "Practical Informations", link: "#", 
  
    subLinks: [
      { name: "Academic Calander", link: "/practical-info/academic" },
      { name: "Uniform", link: "/practical-info/uniform" },
      { name: "Facilities", link: "/practical-info/facilities" },
    ],
  },
  ];
  return (
    <div className='w-full' style={{position: 'sticky',  background: 'white', top: 0, zIndex: '999'}}>
      <nav className="flex items-center justify-between px-12 py-6">
        {/* Logo */}
        <div className="ml-12">
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
        </div>


        
        
        {/* Main Navigation */}
        <ul className="hidden space-x-16 lg:flex">
          {navigation.map((item, index) => (
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
                <ul style={{minWidth: '250px'}} className="flex flex-col absolute py-2">
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

        {/* Theme Changer */}
        <div className="lg:block">
          <ThemeChanger />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
