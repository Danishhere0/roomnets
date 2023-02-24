/**
 * It returns a div with a class of property-box, which contains a div with a class of property-image,
 * which contains an ImageSlider component, which contains an array of images, which are passed in as a
 * prop
 * @returns A React component.
 */
import Link from "next/link";
import React, { useState } from "react";
import { Camera } from "react-feather";
import ContentLoader from "react-content-loader";
import { useSelector } from "react-redux";
import ImageSlider from "../../elements/ImageSlider";
import PropertyLabel from "../../elements/PropertyLabel";
import ThumbnailSlider from "../../elements/ThumbnailSlider";
import AddToCompareProducts from "../../elements/AddToCompareProducts";
import AddToWhishList from "../../elements/AddToWhishList";
import { format } from 'date-fns';

const PropertyBox = ({ data, relativeSlider, video }) => {
  const [load, setLoad] = useState(true);
  const { symbol, currencyValue } = useSelector((state) => state.currencyReducer);
  console.log("Rent is:"+data);
  return (
    <>
      {!load ? (
        <div className="property-box">
          <div className="property-image">
            {relativeSlider ? <ThumbnailSlider images={data.media} videoData={data.video} video={video} /> : <ImageSlider images={data.media} />}
            <div className="labels-left">
              <PropertyLabel labels={data.label} />
            </div>
            {!relativeSlider && (
              
              <>
                <div className="seen-data">
                  <Camera />
                  <span>{data.media.length || 0}</span>
                </div>
                <div className="overlay-property-box">
                  <a className="effect-round" title="Compare">
                    <AddToCompareProducts id={data._id} />
                  </a>
                  <a className="effect-round like" title="wishlist">
                    <AddToWhishList id={data._id} />
                  </a>
                </div>
              </>
            )}
          </div>

          <div className="property-details">
            <span className="font-roboto">{data.country || "USA"} </span>
            <Link href={`/room_det?roomId=${data._id}`}>
              <h3>{data.advert_title}</h3>
            </Link>
            <h6>
              {symbol}
              {(Number(data.rent) * currencyValue).toFixed(2) || (0.0 * currencyValue).toFixed(2)}*
            </h6>
            <p className="font-roboto">{data.advert_description || "This home provides wonderful entertaining spaces with a chef kitchen opening. Elegant retreat in a quiet Coral Gables setting.."} </p>
            <ul>
              <li>
                <img src="/assets/images/svg/icon/double-bed.svg" className="img-fluid" alt="" />
                Bed : {data.no_rooms || 2}
              </li>
              <li>
                <img src="/assets/images/svg/icon/bathroom.svg" className="img-fluid" alt="" />
                Baths : {data.no_baths || 2}
              </li>
              <li>
                <img src="/assets/images/svg/icon/square-ruler-tool.svg" className="img-fluid ruler-tool" alt="" />
                Sq Ft : {data.room_size || 60}
              </li>
            </ul>
            <div className="property-btn d-flex">
              <span>{format(new Date(data.created_at), 'd MMM, Y')}</span>
              <Link href={`/room_det?roomId=${data._id}`}>
                <button type="button" className="btn btn-dashed btn-pill">
                  Details
                </button>
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <>
          <ContentLoader className="skeleton-svg">
            {setTimeout(() => {
              setLoad(false);
            }, 1000)}
            <rect className="skeleton-img" />
            <rect className="skeleton-c1" />
            <rect className="skeleton-c2" />
            <rect className="skeleton-c3" />
          </ContentLoader>
        </>
      )}
    </>
  );
};

export default PropertyBox;
