import { useState } from "react";
import "./header.css";

import NavElement from "./NavElement";

const navItems = [
  {
    href: "#home",
    iconClass: "uil uil-estate nav__icon",
    label: "Home",
  },
  {
    href: "#about",
    iconClass: "uil uil-user nav__icon",
    label: "About",
  },
  {
    href: "#skills",
    iconClass: "uil uil-file-alt nav__icon",
    label: "Skills",
  },
  {
    href: "#services",
    iconClass: "uil uil-briefcase-alt nav__icon",
    label: "Services",
  },
  {
    href: "#portfolio",
    iconClass: "uil uil-scenery nav__icon",
    label: "Portfolio",
  },
  {
    href: "#contact",
    iconClass: "uil uil-message nav__icon",
    label: "Contact",
  },
];

export default function Header() {
  /*================== Toggle Menu ==================*/
  const [showMenu, setShowMenu] = useState(false);

  /*================== Set Active Section ==================*/
  const [activeItem, setActiveItem] = useState("Home");

  /*================== Change Backgroun Header ==================*/
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    if (window.scrollY >= 80) header.classList.add("show-header");
    else header.classList.remove("show-header");
  });

  return (
    <header className="header">
      <nav className="nav container">
        <a href="index.html" className="nav__logo">
          Omar
        </a>

        <div className={showMenu ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list grid">
            {navItems.map((navItem, index) => (
              <NavElement
                navItem={navItem}
                activeItem={activeItem}
                onActiveItem={setActiveItem}
                key={index}
              />
            ))}
          </ul>
          {showMenu ? (
            <i
              className="uil uil-times nav__close"
              onClick={() => setShowMenu((show) => !show)}
            ></i>
          ) : (
            <></>
          )}
        </div>

        {!showMenu ? (
          <div
            className="nav__toggle"
            onClick={() => setShowMenu((show) => !show)}
          >
            <i className="uil uil-apps"></i>
          </div>
        ) : (
          <></>
        )}
      </nav>
    </header>
  );
}
