import React from "react";
import { Col } from "reactstrap";
import useStickyBar from "../../../utils/useStickyBar";
import useActiveLinkInStickyBar from "../../../utils/useActiveLinkInStickyBar";
import DetailsDeskBox from "./DetailsDeskBox";
import FeatureDeskBox from "./FeatureDeskBox";
import FloorPlanDeskBox from "./FloorPlanDeskBox";
import GalleryDeskBox from "./GalleryDeskBox";
import LocationMapDeskBox from "./LocationMapDeskBox";
import SearchBarDeskBox from "./SearchBarDeskBox";
import VideoDeskBox from "./VideoDeskBox";
import ReviewsDeskBox from "./ReviewsDeskBox";
import PosterDetails from "./PosterDetails";

const SinglePropertySection = ({apartData}) => {
  const fix = useStickyBar();
  useActiveLinkInStickyBar();
  return (
    <Col xl='9' lg='8'>
      <div className='description-section'>
        <div className='description-details'>
          <SearchBarDeskBox fix={fix} />
          <FeatureDeskBox />
          <GalleryDeskBox  apartData={apartData}/>
         {/* <VideoDeskBox  apartData={apartData}/>   */}
          <DetailsDeskBox  apartData={apartData}/>
          {/*
          <FloorPlanDeskBox  apartData={apartData}/>
          <LocationMapDeskBox  apartData={apartData}/>
          <ReviewsDeskBox  apartData={apartData}/> 
          */}
          <PosterDetails/>
        </div>
      </div>
    </Col>
  );
};

export default SinglePropertySection;
