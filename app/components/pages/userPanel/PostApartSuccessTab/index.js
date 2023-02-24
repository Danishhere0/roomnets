import React, { useState } from "react";
import { Input } from "reactstrap";

const PostApartSuccessTab = () => {
  const [checkBox, setCheckBox] = useState("radio1");
  const [checkBox2, setCheckBox2] = useState("radio1");

  return (
    <div className='dashboard-content'>
      <div className='privacy-setting' id='privacy'>
        <div className='common-card mt-5'>
          <div className='common-header'>
            <h5>Apartment Post Status</h5>
            <p className='font-roboto'></p>
          </div>
          <div className='privacy-content'>
            <h5> Thank You for Your Post </h5>
            <div className='media'>
              <div className='media-body'>
                <div className="submit-property ml-5">
                  <i id="pwd-icon" size={80}
                    style={{ color: "#51AF33", fontSize: "150px" }}
                    fontSize="large" className="far fa-eye-slash"></i>
                  
                </div>
              </div>
              <div className="mb-5">
                  <p className="my-40 mb-5 ml-10">
                    Your room advert was successfully posted.
                  </p>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostApartSuccessTab;
