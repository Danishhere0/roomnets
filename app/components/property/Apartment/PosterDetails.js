import { useRouter } from "next/router";
import React from "react";
import { useHistory } from "react-router";

const PosterDetailsDeskBox = () => {
  const router = useRouter();
  const history = useHistory();
  const state = history.location.state;
  return (
    <div className='desc-box'>
      <div className='page-section'>
        <h4 className='content-title'>Poster's Contact Details</h4>
        <div className='review'>
          <div className='review-box'>
            <div className='media'>
              <img src={state.posted_by.imgUrl || "images/team/1.png"} className='img-70' alt='' />
              <div className='media-body'>
                <h6>{state.posted_by.firstName} {state.posted_by.lastName}</h6>
                <p> {state.posted_by.mobileNumber}</p>
                <p> {state.i_am}</p>
                {currentUser &&
                    currentUser.user._id === state.posted_by._id ? null : (
                      <Link
                        to={`./composeMessage?&title=${state.advert_title}&posters_id=${state.posted_by._id}&posters_name=${state.posted_by.firstName}`}
                      >
                        <button className="btn btn-primary ">Message</button>
                      </Link>
                    )}
              </div>
              
            </div>
          </div>
        </div>
        <hr />
     {/*   <h4 className='content-title'>Contact Poster</h4>
        <form className='review-form'>
          <div className='form-group'>
            <input type='text' className='form-control' placeholder='Name' required />
          </div>
          <div className='form-group'>
            <input type='email' className='form-control' placeholder='Email' required />
          </div>
          <div className='form-group'>
            <textarea className='form-control' placeholder='Comment'></textarea>
          </div>
          <button type='submit' onClick={() => router.push("/agent/submit-property")} className='btn btn-gradient btn-pill'>
            Submit
          </button>
        </form> */}
      </div>
    </div>
  );
};

export default PosterDetailsDeskBox;
