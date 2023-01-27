/**
 * It returns a div with a class of advance-card, which contains a h6 with the text "Contact Info",
 * which contains a div with a class of category-property, which contains a div with a class of
 * agent-info, which contains a div with a class of media, which contains an img with a class of
 * img-50, which contains a div with a class of media-body ms-2, which contains a h6 with the text
 * "Jonathan Scott", which contains a p with the text "Contact@gmail.com", which contains a ul, which
 * contains two li's, which contain an i with a class of me-2, which contains the text "A-32, Albany,
 * Newyork." and "(+066) 518 - 457 - 5181"
 * @returns A div with a class of advance-card.
 */
import React from "react";
import { MapPin, PhoneCall } from "react-feather";
import { useRouter } from "next/router";

const ContactInfo = (data) => {
 // const { history,location } = useRouter();
 // const history = useNavigate();
 // const state = history.location.state;
  return (
    <div className='advance-card'>
      <h6>Contact Info</h6>
      <div className='category-property'>
        <div className='agent-info'>
          <div className='media'>
            <img src='/assets/images/testimonial/3.png' className='img-50' alt='' />
            <div className='media-body ms-2'>
              <h6>{data.posted_by?.firstName} {data.posted_by?.lastName}</h6>
              <p>{data.posted_by?.email}</p>
            </div>
          </div>
        </div>
        <ul>
          <li>
            <MapPin className='me-2' />
            {data.building_location?.address}
          </li>
          <li>
            <PhoneCall className='me-2' />
            {data.posted_by?.mobileNumber}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ContactInfo;
