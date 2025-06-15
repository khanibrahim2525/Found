import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faPiggyBank,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

const Header = ({ activePage, setActivePage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Changed "fund-summary" to "contributions" to match page ID
  const pages = [
    { id: "home", name: "Home" },
    { id: "members", name: "Members" },
    { id: "contributions", name: "Contributions" }, // Changed from "fund-summary"
    { id: "gallery", name: "Gallery" },
    { id: "contact", name: "Contact" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = (pageId) => {
    setActivePage(pageId);
    setIsMenuOpen(false); // Close menu when a link is clicked
  };

  return (
    <header className="header">
      <nav className="navbar">
        <div className="logo">
          <FontAwesomeIcon icon={faPiggyBank} />
          <span>R.C Batch 2007 Fund</span>
        </div>

        <button
          className="menu-toggle"
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen} // Accessibility improvement
        >
          <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
        </button>
        <div className={`menu-container ${isMenuOpen ? "open" : ""}`}>
          <ul className="nav-links">
            {pages.map((page) => (
              <li key={page.id}>
                <a
                  href={`#${page.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(page.id);
                  }}
                  className={activePage === page.id ? "active" : ""}
                >
                  {page.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
