/**
 * It fetches data from the API and then sorts the data by date and then maps over the data to display
 * the data in the UI
 * @returns An array of objects.
 */
import React, { useEffect, useState } from "react";
import { getData } from "../../utils/getData";
import useGeoLocation from '../../hooks/useGeoLocation';

const RecentlyAdded = () => {

  const [value, setValue] = useState();

  useEffect(() => {
    const fetchAboutIntro = async () => {
      
      try {
        const applocation = useGeoLocation();
        const lat = applocation.coordinates.lat;
        const lng = applocation.coordinates.lng;
          const res1  = await axios.get(`${process.env.API_URL}/ListApartByLnglat/?lng=${lng}&lat=${lat}&queryQty=3`);
        setValue(res1.data.userData);
        console.log('Recent property:' + res1.data.userData[0].content);
      } catch (err) {
        console.error('About page Error is: '+ err);
      }
    };
    fetchAboutIntro();
  }, []);
  return (
    <div className='advance-card'>
      <h6>Recently Added</h6>
      <div className='recent-property'>
        <ul>
          {value
            ?.sort((product1, product2) => {
              let date1 = new Date(product1.created_at);
              let date2 = new Date(product2.created_at);
              return date2?.getTime() > date1.getTime() ? -1 : 1;
            })
            ?.map((data, i) => (
              <li key={i}>
                <div className='media'>
                  <img src={`/assets/images/apartment/${data.media[0]}`} className='img-fluid' alt={data.title} />
                  <div className='media-body'>
                    <h5>{data.title}</h5>
                    <span>
                    {data.currency}{data.rent} / <span>{data.plan}</span>
                    </span>
                  </div>
                </div>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default RecentlyAdded;
