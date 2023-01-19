import Link from "next/link";
import React from "react";
const MainMenuNow = () => {
    return (
      <ul className="header-right">
        <li className="right-menu">
          <ul className="nav-menu">
              <li className="dropdown">
                <Link href="/pages/other-pages/login">
                  
                </Link>
              </li>
          </ul>
        </li>
      </ul>
    );
  };
  
  export default MainMenuNow;