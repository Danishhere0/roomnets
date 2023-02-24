import React from "react";
import GridView from "../../../listing/gridView/grid/AuthenticatedGridView";
import { getCookie } from "cookies-next";

const MyListingTab = () => {
  const userToken = getCookie("userToken");
  return (
    <div className='dashboard-content'>
      <div className='tab-listing' id='listing'>
        <div className='property-section'>
          <div className='property-grid-2 ratio_63'>
            <GridView size={2} gridType={"list-view"} APIPage="ListRoomsByMe" userToken={userToken} gridBar={true} userPanel={true} myList={true} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyListingTab;
