import React from "react";

const Sidebar = () => {
  return (
    <>
      <aside className="sidebar">
        <div className="logo">
          <a>
            Brand<b>Colors</b>
          </a>
        </div>
        <div className="description">
          The biggest collection of official brand color codes around. Curated
          by @brandcolors and friends.
        </div>
        <nav className="menu">
          <ul>
            <li>
              <a>About BrandColors</a>
            </li>
          </ul>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
