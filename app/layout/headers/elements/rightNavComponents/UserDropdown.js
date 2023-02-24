import React from "react";
//import { DollarSign } from "react-feather";
import { useDispatch, useSelector } from "react-redux";
import { User } from "react-feather";
import Link from "next/link";
import { useRouter } from "next/router";
import useOutsideDropdown from "../../../../utils/useOutsideDropdown";
import { logoutUser } from "../../../../slices/action-creators";

const UserDropdown = ({ value }) => {
  const { ref, isComponentVisible, setIsComponentVisible } = useOutsideDropdown(false);
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.auth)
  const router = useRouter();
  const query = router.query;

  return (
    <li ref={ref} className={`dropdown user ${isComponentVisible && "active"}`}>
      <a>
        <User
          onClick={() => {
            setIsComponentVisible(!isComponentVisible);
          }}
        />
      </a>
      {currentUser ? (
        <ul className={`nav-submenu ${isComponentVisible && "open"}`}>
          <li>
              <Link href="">{currentUser?.userData?.user?.FirstName}</Link>
          </li>
          <li>
              <Link href="/userpanel/dashboard">My Pnale</Link>
          </li>
          <li>
              <a onClick={() => dispatch(logoutUser())}>Log Out</a>
          </li>
        </ul> 
        ) : (
        <ul className={`nav-submenu ${isComponentVisible && "open"}`}>
          <li key={1}>
              <Link href="/login">Sign In</Link>
          </li>
          <li key={2}>
              <Link href="/signup">Sign Up</Link>
          </li>
        </ul>
        )}
         
    </li>
  );
};

export default UserDropdown;