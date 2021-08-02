import React from "react";
import { slide as Menu } from "react-burger-menu";
import { useMediaQuery } from "react-responsive";
import { SCREENS } from "../responsive";
import menuStyles from "./menuStyles";
import { Link } from "react-scroll";

function NavItems() {
  const isMobile = useMediaQuery({ maxWidth: SCREENS.sm });
  if (isMobile)
    return (
      <Menu right styles={menuStyles}>
        <div className="navbar-menu-toogled">
          <ul>
            <li>
              <Link
                smooth={true}
                to="home"
                offset={-110}
                className="nav-link"
                aria-current="page"
                href="#"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                smooth={true}
                to="about"
                offset={-110}
                className="nav-link"
                aria-current="page"
                href="#"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                smooth={true}
                to="about"
                offset={-110}
                className="nav-link"
                aria-current="page"
                href="#"
              >
                Games
              </Link>
            </li>
            <li>
              <Link
                smooth={true}
                to="contact"
                offset={-110}
                className="nav-link"
                aria-current="page"
                href="#"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </Menu>
    );

  return (
    <div className="navbar-menu">
      <ul>
        <li>
          <Link
            smooth={true}
            to="home"
            offset={-110}
            className="nav-link"
            aria-current="page"
            href="#"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            smooth={true}
            to="about"
            offset={-110}
            className="nav-link"
            aria-current="page"
            href="#"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            smooth={true}
            to="games"
            offset={-60}
            className="nav-link"
            aria-current="page"
            href="#"
          >
            Games
          </Link>
        </li>
        <li>
          <Link
            smooth={true}
            to="contact"
            offset={-110}
            className="nav-link"
            aria-current="page"
            href="#"
          >
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default NavItems;
