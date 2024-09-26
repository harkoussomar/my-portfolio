import { useState } from "react";

export default function NavElement({ navItem,activeItem,onActiveItem }) {
    const { href, iconClass, label } = navItem;
    

  return (
    <li className="nav__item" onClick={() => onActiveItem(label)}>
      <a
        href={href}
        className={activeItem === label ? "nav__link active-link" : "nav__link"}
      >
        <i className={iconClass}></i>
        {label}
      </a>
    </li>
  );
}
