"use client";

import React from "react";
import {
  FaHome,
  FaUser,
  FaGraduationCap,
  FaBriefcase,
  FaBook,
  FaEnvelope,
} from "react-icons/fa";

import Link from "next/link";
import { usePathname } from "next/navigation";

export const Sidebar = () => {
  const router = usePathname();

  const menuItems = [
    { name: "Inicio", href: "/home", icon: <FaHome /> },
    { name: "Sobre mí", href: "/about-me", icon: <FaUser /> },
    { name: "Curriculum", href: "/curriculum", icon: <FaGraduationCap /> },
    { name: "Portafolio", href: "/portfolio", icon: <FaBriefcase /> },
    { name: "Blog", href: "/blog", icon: <FaBook /> },
    { name: "Contactos", href: "/contact", icon: <FaEnvelope /> },
  ];

  return (
    <div>
      {/* Menu layout */}
      <nav className="layout__menu">
        <ul className="menu__list">
          {menuItems.map((item) => (
            <li className="menu__option_" key={item.href}>
              <Link
                href={item.href}
                className={`menu__link ${
                  router === item.href ? "menu__link--active" : ""
                }`}
              >
                <div className="menu__icon">{item.icon}</div>
                <span className="menu__overlay">{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

{
  /*
import React from "react";

import {
    FaHome,
    FaUser,
    FaGraduationCap,
    FaBriefcase,
    FaBook,
    FaEnvelope,
    FaYoutube,
    FaLinkedin,
    FaInstagram,
  } from "react-icons/fa";

  import Link from 'next/link'


export const Sidebar = () => {
  return (
    <div>

      <nav className="layout__menu">
        <ul className="menu__list">
          <li className="menu__option_">
            <a href="home" className="menu__link ">
            <Link href="">
            
            </Link>
              <div className="menu__icon">
                <FaHome />
              </div>

              <span className="menu__overlay">Home</span>
            </a>
          </li>
          <li className="menu__option_">
            <a href="/about-me" className="menu__link menu__link--active">
              <div className="menu__icon">
                <FaUser />
              </div>

              <span className="menu__overlay">Sobre mi</span>
            </a>
          </li>
          <li className="menu__option_">
            <a href="curriculum" className="menu__link">
              <div className="menu__icon">
                <FaGraduationCap />
              </div>
              <span className="menu__overlay">Curriculum</span>
            </a>
          </li>
          <li className="menu__option_">
            <a href="portfolio" className="menu__link">
              <div className="menu__icon">
                <FaBriefcase />
              </div>
              <span className="menu__overlay">Portafolio</span>
            </a>
          </li>
          <li className="menu__option_">
            <a href="blog" className="menu__link">
              <div className="menu__icon">
                <FaBook />
              </div>
              <span className="menu__overlay">Blog</span>
            </a>
          </li>
          <li className="menu__option_">
            <a href="contact" className="menu__link">
              <div className="menu__icon">
                <FaEnvelope />
              </div>
              <span className="menu__overlay">Contactos</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

    

    */
}
