/**
 * It takes the file from the input field and displays it in the image tag
 * @returns A Col component with a div inside of it.
 */
import React,{ useEffect, useState} from "react";
import { Camera } from "react-feather";
import { Col, Nav, NavItem, NavLink } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { getCookie } from "cookies-next";


const UserPanelSidebar = ({ activeTab, setActiveTab }) => {
  //const { currentUser } = useSelector((state) => state.auth?.currentUser);
  const [profileDetail, setProfileDetail] = useState([]);
  useEffect(() => {
    const fetch1 = async () => {
      const currentUser = JSON.parse(getCookie("currentUser"));
      const userDetail = currentUser.userData.user;
     // console.log("currentUser:"+currentUser.userData.userToken);
      setProfileDetail(userDetail);
    };

    fetch1();
  }, []);
  return (
    <Col lg='3'>
      <div className='sidebar-user sticky-cls'>
        <div className='user-profile'>
          <div className='media'>
            <div className='change-pic'>
              <img src='/assets/images/avatar/3.jpg' className='img-fluid update_img' alt='' />
              <div className='change-hover'>
                <button type='button' className='btn'>
                  <Camera />
                </button>
                <input
                  className='updateimg'
                  type='file'
                  name='img'
                  // onChange='readURL(this,0)'
                />
              </div>
            </div>
            <div className='media-body'>
              <h5>{profileDetail.firstName} {profileDetail?.lastName}</h5>
              <h6 className='font-roboto'>{profileDetail?.email}</h6>
              <h6 className='font-roboto mb-0'>{profileDetail?.mobileNumber}</h6>
            </div>
          </div>
          <div className='connected-social'>
            <h6>Connect with</h6>
            <ul className='agent-social'>
              <li>
                <a href='https://www.facebook.com/' className='facebook'>
                  <i className='fab fa-facebook-f'></i>
                </a>
              </li>
              <li>
                <a href='https://twitter.com/' className='twitter'>
                  <i className='fab fa-twitter'></i>
                </a>
              </li>
              <li>
                <a href='https://account.google.com' className='google'>
                  <i className='fab fa-google'></i>
                </a>
              </li>
              <li>
                <a href='https://www.linkedin.com/' className='linkedin'>
                  <i className='fab fa-linkedin-in'></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className='dashboard-list'>
          <Nav tabs className='right-line-tab'>
            <NavItem>
              <NavLink className={activeTab === "Dashboard" ? "active" : ""} onClick={() => setActiveTab("Dashboard")}>
                Dashboard
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className={activeTab === 'Listing' ? 'active' : ''} onClick={() => setActiveTab('Listing')}>
                My Listing
              </NavLink>
            </NavItem> 
            <NavItem>
              <NavLink className={activeTab === "AddApartment" ? "active" : ""} onClick={() => setActiveTab("AddApartment")}>
                Add Apartment
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className={activeTab === "AddRoom" ? "active" : ""} onClick={() => setActiveTab("AddRoom")}>
                Add Room
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className={activeTab === "Profile" ? "active" : ""} onClick={() => setActiveTab("Profile")}>
                My profile
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className={activeTab === "Favorites" ? "active" : ""} onClick={() => setActiveTab("Favorites")}>
                favourites
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className={activeTab === "Paymnet" ? "active" : ""} onClick={() => setActiveTab("Paymnet")}>
                Cards & payment
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className={activeTab === "Upgrade" ? "active" : ""} onClick={() => setActiveTab("Upgrade")}>
                Upgrade
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className={activeTab === "Privacy" ? "active" : ""} onClick={() => setActiveTab("Privacy")}>
                Privacy
              </NavLink>
            </NavItem>
          </Nav>
        </div>
      </div>
    </Col>
  );
};

export default UserPanelSidebar;
