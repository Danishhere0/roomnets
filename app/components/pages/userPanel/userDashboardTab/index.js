import React, { useState, useEffect } from "react";
import { Row } from "reactstrap";
import AvailableProperty from "./AvailableProperty";
import PropertyOverview from "./PropertyOverview";
import SalesByAgent from "./SalesByAgent";
import SalesOverview from "./SalesOverview";
import SmallBarCard from "./SmallBarCard";
import { useState } from 'react'
import { useRouter } from 'next/router'
import { getCookie } from 'cookies-next';
import { hasCookie } from 'cookies-next';

const UserDashboardTab = () => {
  const router = useRouter();
 
  return (
    <div className="dashboard-content">
      <div id="dashboard">
        <div className="user-wrapper">
          <Row>
            {router?.query.message}
            
            <SmallBarCard />
            <SalesOverview />
            <SalesByAgent />
            <AvailableProperty />
            <PropertyOverview />
          </Row>
        </div>
      </div>
    </div>
  );
};

export default UserDashboardTab;
