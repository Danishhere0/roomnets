import { getCookie } from "cookies-next";
import React, { useState, useEffect } from "react";
import { CheckSquare, Mail, MapPin } from "react-feather";
import { Row } from "reactstrap";
import ReviewStarr from "../../../elements/ReviewStarr";
import ChangeDetails from "./ChangeDetails";
import EditProfile from "./EditProfile";

const MyProfileTab = () => {
  const [modal, setModal] = useState();
  const [profileDetail, setProfileDetail] = useState([]);
  useEffect(() => {
    const fetch1 = async () => {
      const currentUser = JSON.parse(getCookie("currentUser"));
      const userDetail = currentUser.userData.user;
      //console.log("currentUser:"+currentUser.userData.userToken);
      //console.log(profileDetail);
      setProfileDetail(userDetail);
    };

    fetch1();
  }, []);
  return (
    <div className="dashboard-content">
      <div className="my-profile" id="profile">
        <div className="profile-info">
          <div className="common-card">
            <div className="user-name media">
              <div className="media-body">
                <h5>
                  {profileDetail.firstName + " " + profileDetail.lastName} <span className="label label-success">{profileDetail.i_am}</span>
                </h5>
                <ReviewStarr rating={4} />
              </div>
              <span className="label label-light label-flat" onClick={() => setModal("editProfile")}>
                Edit
              </span>
            </div>
            <ul className="user-detail">
              <li>
                <MapPin />
                <span>{profileDetail.address}L</span>
              </li>
              <li>
                <Mail />
                <span>{profileDetail.Email}</span>
              </li>
              <li>
                <CheckSquare />
                <span>Licensed for 2 years</span>
              </li>
            </ul>
            <p className="font-roboto">
              Residences can be classified by and how they are connected to neighbouring residences and land. Different types of housing tenure can be used for the same physical type.
            </p>
          </div>
          <div className="common-card">
            <Row>
              <div className="col-xxl-6 col-xl-7">
                <div className="information-detail">
                  <div className="common-header">
                    <h5>About</h5>
                  </div>
                  <div className="information">
                    <ul>
                      <li>
                        <span>Gender :</span>
                        <p>{profileDetail.sex}</p>
                      </li>
                      <li>
                        <span>Birthday :</span>
                        <p>{(profileDetail?.dateOfBirh) || ""}</p>
                      </li>
                      <li>
                        <span>Phone number :</span>
                        <a>{profileDetail.mobileNumber}</a>
                      </li>
                      <li>
                        <span>Pin Code :</span>
                        <a>{profileDetail.pin_code}</a>
                      </li>
                      <li>
                        <span>Address :</span>
                        <p>{profileDetail.address + ", " + profileDetail.city_name + ", " + profileDetail.state_name + ", " +profileDetail.country}</p>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="information-detail">
                  <div className="common-header">
                    <h5>Login Details</h5>
                  </div>
                  <div className="information">
                    <ul>
                      <li>
                        <span>Email :</span>
                        <a>{profileDetail.Email}</a>
                        <span className="label label-light label-flat" onClick={() => setModal("changeEmail")}>
                          Edit
                        </span>
                      </li>
                      <li>
                        <span>Password :</span>
                       {/* <a>{Array(profileDetail.password.length).fill("*").join("")}</a> */}
                        <span className="label label-light label-flat" onClick={() => setModal("changePass")}>
                          Edit
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xxl-5 offset-xxl-1 col-xl-5 offset-xl-0">
                <div className="about-img d-xl-block d-none">
                  <img src="/assets/images/user/2.png" className="img-fluid" alt="" />
                </div>
              </div>
            </Row>
          </div>
        </div>
      </div>
      <EditProfile toggle={"editProfile" === modal ? true : false} setModal={setModal} profileDetail={profileDetail} setProfileDetail={setProfileDetail} />
      <ChangeDetails
        toggle={"changeEmail" === modal ? true : false}
        setModal={setModal}
        detail={"email address"}
        profileDetail={profileDetail}
        setProfileDetail={setProfileDetail}
        old={profileDetail.email && profileDetail.email}
      />
      <ChangeDetails
        toggle={"changePass" === modal ? true : false}
        setModal={setModal}
        detail={"password"}
        profileDetail={profileDetail}
        setProfileDetail={setProfileDetail}
        old={profileDetail.password && profileDetail.password}
      />
    </div>
  );
};

export default MyProfileTab;
