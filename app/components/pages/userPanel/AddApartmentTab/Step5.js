import { useRouter } from "next/router";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { Button, Modal, ModalBody, ModalFooter } from "reactstrap";
import { setCookie } from 'cookies-next';
import axios from "axios";

const Step3 = ({ data, setActive }) => {
  const router = useRouter();
  const [isModal, setIsModal] = useState(false);
  const notify = () => toast("Your apartment added successfully.", { type: "success", position: "top-right" });
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const handleNext = async () => {
    await validatePage().then(async (res) => {
      if (res.length > 0) {
        setErrors(res);
        window.scrollTo(0, 150);
      } else {
        const Allresponse = { ...PostFlatReducer, ...formResponse };
        var formData = new FormData();
        formData.append("userData", JSON.stringify(Allresponse));
        for (let x = 0; x < ImageState.length; x++) {
          formData.append("file", ImageState[x]["Uri"]);
        }
        // dispatch(SETPOSTROOMPROCESS(formResponse));
        setLoading(true);
        await axios({
          url: `${process.env.API_URL}/PostAddApart`,
          method: "POST",
          data: formData,
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: token,
          },
        })
          .then(function (response) {
            setLoading(false);
            console.log(response.data);
            if (response.data.status) {

                if(add_type==="PREMIUM")
              {
                history.replace(`/userpanel/upgradeApart/${response.data.usadData._id}`);
              }
             else{
                history.replace("/userpanel/PostsApartSuccess");
             }
            }
          })
          .catch((err) => {
            setLoading(false);
            alert("An error has occured");
          });
      }
    });
  };
  return (
    <div className="wizard-step-3 ">
      <div className="title-3 text-start">
        <h2>Confirm details</h2>
      </div>
      <div className="input-data">
        <div className="account-content">
          <h3>Account information</h3>
          <ul>
            <li>
              Name : <span className="firstName">{currentUser?.firstName} {data?.lastName}</span>
            </li>
            <li>
              Title : <span className="phone_number">{data?.title}</span>
            </li>
            <li>
              Email : <span className="email_add">{data?.email}</span>
            </li>
          </ul>
        </div>
        <div className="account-content">
          <h3>Account information</h3>
          <ul>
            <li>
              Rent : <span className="firstName">{data?.rent}</span>
            </li>
            <li>
              Rent method : <span className="phone_number">{data?.rent_method}</span>
            </li>
            <li>
              Building type : <span className="email_add">{data?.Building_type}</span>
            </li>
            <li>
              Building location : <span className="firstName">{data?.building_location}</span>
            </li>
            <li>
              Available Date : <span className="phone_number">{data?.rooms_avail_date}</span>
            </li>
            <li>
              Furnished Rooms : <span className="email_add">{data?.furnished_rooms}</span>
            </li>
            <li>
              Living Rooms : <span className="email_add">{data?.living_rooms}</span>
            </li>
            <li>
              Agent Fee: <span className="email_add">{data?.broker_agent_fee}</span>
            </li>
          </ul>
        </div>
        <div className="account-content">
          <h3>Account information</h3>
          <ul>
            <li>
              Name : <span className="firstName">{data?.firstName} {data?.lastName}</span>
            </li>
            <li>
              Title : <span className="phone_number">{data?.title}</span>
            </li>
            <li>
              Email : <span className="email_add">{data?.email}</span>
            </li>
            <li>
              Ad Start Date : <span className="email_add">{data?.ad_start_date}</span>
            </li>
            <li>
              Ad End Date : <span className="email_add">{data?.ad_end_date}</span>
            </li>
          </ul>
        </div>
        <div className="account-content">
          <h3>Location Details</h3>
          <ul>
            <li>
              Address :{" "}
              <span className="address-type">
                {data?.street_name},{data?.country},{data?.post_code}
              </span>
            </li>
            <li>
              State : <span className="state-name">{data?.state_name}</span>
            </li>
            <li>
              country : <span className="country-name">{data?.country}</span>
            </li>
            <li>
              Post code : <span className="pin-code">{data?.post_code}</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="next-btn d-flex">
        <Button onClick={() => setActive((prev) => prev - 1)} type="button" className="btn btn-dashed prev2 btn-pill">
          <i className="fas fa-arrow-left me-2"></i> Previous
        </Button>
        <Button type="button" className="btn btn-gradient next3 btn-pill" onClick={() => setIsModal(true)}>
          submit
        </Button>
      </div>
      <Modal id="staticBackdrop" isOpen={isModal} centered>
        <ModalBody>
          <h4>Are you sure you want to submit the form?</h4>
          <p>Please confirm the details</p>
        </ModalBody>
        <ModalFooter>
          <Button onClick={() => setIsModal(false)}>cancel</Button>
          <Button
            onClick={() => {
              setIsModal(false);
              handleNext();
              notify();
             /* setTimeout(() => {
                router.reload();
              }, 3000);*/
            }}>
            submit
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default Step3;
