/**
 * It maps through the RightNavMenuItem array and returns the appropriate component based on the title
 * of the object
 * @returns A list of items that are being mapped over.
 */
import Link from "next/link";
import React, { Fragment, useEffect } from "react";
//import { User } from "react-feather";
import { RightNavMenuItem } from "../../../data/menu";
import { useDispatch, useSelector } from "react-redux";
//import Cart from "./rightNavComponents/Cart";
import Currency from "./rightNavComponents/Currency";
import Language from "./rightNavComponents/Language";
import UserDropdown from "./rightNavComponents/UserDropdown";
import {NavLink} from 'reactstrap';
import { useHistory } from "react-router-dom";

const RightNav = () => {
  const history = useHistory();
  const { currentUser } = useSelector((state) => state.auth.currentUser)
  const dispatch = useDispatch()

  const handleLogout = () => {
    history.push({
      pathname: "/",
      state: { message: "You have been logout" },
    });
  };
  
  return (
    <ul className="header-right">
      <li className="right-menu">
        <ul className="nav-menu">
          {RightNavMenuItem.map((value, i) => (
            <Fragment key={i}>
              {value.title === "language" && <Language value={value} />}
             {/* {value.title === "cart" && <Cart />} */}
              {value.title === "currency" && <Currency value={value} />}
              {value.title === "user" && (
                <li className="dropdown">
                    <UserDropdown />
                </li>
              )}
            </Fragment>
          ))}
        </ul>
      </li>
    </ul>
  );
};

export default RightNav;
