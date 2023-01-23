/**
 * It renders a navbar with a list of menu items
 * @returns A navbar with a dropdown menu and a mega menu.
 */
import Link from "next/link";
import React, { Fragment, useState, useEffect, useReducer } from "react";
import { MainNavMenuItems } from "../../../data/menu";
//import DropdownMenus from "./mainNavComponents/DropdownMenus";
import MegaMenu from "./mainNavComponents/MegaMenu";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { SETCOUNTRY } from "../../../redux/action";
import { useHistory } from "react-router-dom";

const MainNav = ({ center, icon }) => {
  const [openNavbar, setOpenNavbar] = useState(false);
  const [isOpen, setIsOpen] = useState();
  const [isOpenChild, setIsOpenChild] = useState();
  const [isOpenNestedChild, setIsOpenNestedChild] = useState();

  const [countryData, setCountryData] = useState([]);
  const dispatch = useDispatch();
  const history = useHistory();
  const country = useSelector((state) => state.countryReducer);

  const handleCountry = (code) => {
    const Setcountry = async () => dispatch(SETCOUNTRY(code));
    Setcountry().then(() =>
      setTimeout(() => {
        window.location.reload();
      }, 2000)
    );
    Setcountry();
  };

  const getGeoInfo = () => {
    axios
      .get("https://ipapi.co/json/")
      .then((response) => {
        let data = response.data;
        if (
          data.country_code === "NG" ||
          data.country_code === "GB" ||
          data.country_code === "US" ||
          data.country_code === "GH" ||
          data.country_code === "IE" ||
          data.country_code === "KE" ||
          data.country_code === "DE" ||
          data.country_code === "ZA"
        ) {
          //get country code from api then set it to default if the user has not
          // selected a country of his choice from drop down
          //otherwise use user defined country setting
          if (!country) {
            handleCountry(data.country_code);
          }
          // console.log(data.country_code);
        } else {
          if (!country) {
            handleCountry("NG");
          }
        }
      })
      .catch((error) => {
        console.log(error);
        if (!country) {
          handleCountry("NG");
        }
      });
  };

  useEffect(() => getGeoInfo(), []);

  useEffect(() => {
    const fetchAboutCountry = async () => {
      try {
        const res4  = await axios.get(`${process.env.API_URL}/Countries`);
        setCountryData(res4.data.userData);
        //console.log('Country Data:' + res4.data.userData);
      } catch (err) {
        console.error('Country Data  Error is: '+ err);
      }
    };
    fetchAboutCountry();
  }, []);

  return (
    <nav>
      <div className="main-navbar">
        <div id="mainnav">
          {/* open navbar button in mobile size */}
          <div className="toggle-nav">
            <i className="fa fa-bars sidebar-bar" onClick={() => setOpenNavbar(true)}></i>
          </div>
          <ul className={`nav-menu ${openNavbar ? "open" : ""}`}>
            {/* close navbar button in mobile size */}
            <li className="back-btn">
              <div className="mobile-back text-end">
                <span onClick={() => setOpenNavbar(false)}>Back</span>
                <i aria-hidden="true" className="fa fa-angle-right ps-2"></i>
              </div>
            </li>
            <li className="nav-link menu-title">
                <Link href="/home">
                   HOME
                </Link>
            </li>
            <li className="">
                <Link href="/post_ad/">
                   Post Ad
                </Link>
            </li>
            <li className="">
                <Link href="/browse_ad/">
                   Browse
                </Link>
            </li>
            <li className="">
                <Link href="/about/">
                   ABOUT
                </Link>
            </li>
            <li className="">
                <Link href="/faq">
                   FAQ
                </Link>
            </li>
            <li className="">
                <Link href="/blogs/">
                   BLOG
                </Link>
            </li>
            <li className="">
                <Link href="/contact/contact-us">
                   CONTACT
                </Link>
            </li>
            
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                // href="#"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Location
                <img
                  style={{
                    width: "30px",
                    objectFit: "contain",
                  }}
                  src={
                    country === "NG"
                      ? "/images/flags/ng.png"
                      : country === "US"
                      ? "/images/flags/us.png"
                      : country === "IE"
                      ? "/images/flags/ie.png"
                      : country === "KE"
                      ? "/images/flags/ke.png"
                      : country === "GH"
                      ? "/images/flags/ghana.png"
                      : country === "ZA"
                      ? "/images/flags/sa.png"
                      : country === "GB"
                      ? "/images/flags/uk.png"
                      : null
                  }
                />
              </a>
              <ul className="dropdown-menu shadow">
                {countryData.map((data, i) => (
                  <li key={i} onClick={() => handleCountry({...data.country_name})}>
                    <a className="dropdown-item">{data.country_name}</a>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
          {center && (
            <div className="brand-logo">
              <Link href="/home/index">
                <img src="/logo512.png" alt="" className="img-fluid for-light" />
                <img src="/logo512.png" alt="" className="img-fluid for-dark" />
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default MainNav;
