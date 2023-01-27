import React from "react";
import axios from "axios";
const GoogleAdsCard = () => {
    const history = useHistory();
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
