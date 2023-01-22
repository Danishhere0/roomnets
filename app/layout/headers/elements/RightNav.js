/**
 * It maps through the RightNavMenuItem array and returns the appropriate component based on the title
 * of the object
 * @returns A list of items that are being mapped over.
 */
import Link from "next/link";
import React, { Fragment } from "react";
import { User } from "react-feather";
import { RightNavMenuItem } from "../../../data/menu";
import { useDispatch, useSelector } from "react-redux";
//import Cart from "./rightNavComponents/Cart";
import Currency from "./rightNavComponents/Currency";
import Language from "./rightNavComponents/Language";
import { LOGOUTUSER } from "../../../redux/action";
import { useHistory, Redirect } from "react-router";
import {NavLink} from 'reactstrap';

const RightNav = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const currentUser = useSelector(({ user }) => user.currentUser);
  const handleLogout = () => {
    history.push({
      pathname: "/",
      state: { message: "You have been logout" },
    });
    dispatch(LOGOUTUSER());
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
                  <NavLink to="/login">
                    <User />
                  </NavLink>
                </li>
              )}
               {currentUser ? (
                    <ul className="admin-info color-white-a">
                      <li>
                        <NavLink to="">{currentUser.user.firstName}</NavLink>
                      </li>
                      <li>
                        <a onClick={handleLogout}>Log Out</a>
                      </li>
                    </ul>
                  ) : (
                    <ul className="admin-info color-white-a">
                      <li>
                        <NavLink to="/login">Sign In</NavLink>
                      </li>
                      <li>
                        <NavLink to="/register">Sign Up</NavLink>
                      </li>
                    </ul>
                  )}
            </Fragment>
          ))}
        </ul>
      </li>
    </ul>
  );
};

export default RightNav;
