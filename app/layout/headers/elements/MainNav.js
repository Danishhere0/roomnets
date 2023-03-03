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
import { useHistory } from "react-router-dom";
import { useRouter } from "next/router";
import useOutsideDropdown from "../../../utils/useOutsideDropdown";
import { countryChanger } from '../../../slices/action-creators';
import { getCookie } from 'cookies-next';


const MainNav = ({ center, icon }) => {
  const { ref, isComponentVisible, setIsComponentVisible } = useOutsideDropdown(false);
  const [openNavbar, setOpenNavbar] = useState(false);
  const [isOpen, setIsOpen] = useState();
  const [isOpenChild, setIsOpenChild] = useState();
  const [isOpenNestedChild, setIsOpenNestedChild] = useState();

  const [countryData, setCountryData] = useState([]);
  const dispatch = useDispatch();
  const history = useHistory();
  //const { country_code } = useSelector((state) => state.countryReducer.country_code);
  const country_code = getCookie("selCountryCode") ? getCookie("selCountryCode") : "NG";

  console.log("Country info is"+country_code);

  const handleCountry = (code) => {
    const Setcountry = async () => dispatch(countryChanger(code));
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
          if (!country_code) {
            handleCountry(data.country_code);
          }
          // console.log(data.country_code);
        } else {
          if (!country_code) {
            handleCountry("NG");
          }
        }
      })
      .catch((error) => {
        console.log(error);
        if (!country_code) {
          handleCountry("NG");
        }
      });
  };

  useEffect(() => getGeoInfo(), []);

  const regionBanners =
  country_code === "KE"
    ? "Banners_KE"
    : country_code === "US"
    ? "Banners_US"
    : country_code === "NG"
    ? "Banners_NG"
    : country_code === "IE"
    ? "Banners_IE"
    : country_code === "ZA"
    ? "Banners_ZA"
    : country_code === "GB"
    ? "Banners_GB"
    : country_code === "GH"
    ? "Banners_GH"
    : "";

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
                <Link href="/userpanel/">
                   Post Ad
                </Link>
            </li>
            <li ref={ref} className={`dropdown user ${isComponentVisible && "active"}`}>
              <ul className={`nav-submenu ${isComponentVisible && "open"}`}>
                  <li>
                    <a href="browse_rooms" className="dropdown-item">Browse Room</a>
                  </li>
                  <li>
                    <a href="browse_apartments" className="dropdown-item">Browse Apartment</a>
                  </li>
              </ul>
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
            <li ref={ref} className={`dropdown user ${isComponentVisible && "active"}`}>
              <a>
                Location &nbsp;
                <img
                  style={{
                    width: "30px",
                  }}
                  src={
                    country_code === "NG"
                      ? "/assets/images/flags/ng.png"
                      : country_code === "US"
                      ? "/assets/images/flags/us.png"
                      : country_code === "IE"
                      ? "/assets/images/flags/ie.png"
                      : country_code === "KE"
                      ? "/assets/images/flags/ke.png"
                      : country_code === "GH"
                      ? "/assets/images/flags/ghana.png"
                      : country_code === "ZA"
                      ? "/assets/images/flags/sa.png"
                      : country_code === "GB" || country_code === "UK"
                      ? "/assets/images/flags/uk.png"
                      : null
                  }
                />
              </a>
              <ul className={`nav-submenu ${isComponentVisible && "open"}`}>
                {countryData.map((data, i) => (
                  <li key={i} onClick={() => handleCountry(data.country_code)}>
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
