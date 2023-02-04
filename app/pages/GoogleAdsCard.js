import React from "react";
import axios from "axios";
import {Helmet} from "react-helmet";
import Parser from 'html-react-parser'; 

const GoogleAdsCard = (gawidth = "250px") => {
    const [homepageData, setHomePageData] = React.useState({ Banners: [],googleAdsScript:"" });
    const fetchHomepageModels = async () => {
        return await axios
          .get(`/api/v1/fetchHomepageModels`)
          .then((response) => response)
          .catch((err) => err);
      };
    React.useEffect(
    () =>
        fetchHomepageModels()
        .then((res) => setHomePageData({ ...res.data.userData }))
        .catch((err) => console.log(err)),

    []
    );
    return (
      <Helmet>{ Parser (homepageData.googleAdsScript)}</Helmet>
     );
};

export default GoogleAdsCard;
