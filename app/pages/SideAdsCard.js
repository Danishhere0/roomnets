import React from "react";
import axios from "axios";
import { useSelector } from 'react-redux';
const SideAdsCard = ({ adswidth = "250px" }) => {
   const [homepageData, setHomePageData] = React.useState({ Banners: [],googleAdsScript:"" });
   const country = useSelector((state) => state.country);
  // const country = useSelector(({ CountryReducer }) => CountryReducer.country);

   const regionBanners =
    country === "KE"
      ? "Banners_KE"
      : country === "US"
      ? "Banners_US"
      : country === "NG"
      ? "Banners_NG"
      : country === "IE"
      ? "Banners_IE"
      : country === "ZA"
      ? "Banners_ZA"
      : country === "GB"
      ? "Banners_GB"
      : country === "GH"
      ? "Banners_GH"
      : "";
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

    []);
    return (
        <div
                style={{ width: adswidth }}
                className="col-lg-3 my-30 brosw-side-banner"
              >
                {homepageData &&
                homepageData[regionBanners] &&
                homepageData[regionBanners].length > 1 ? (
                  <img
                    style={{ width: "100%", objectFit: "cover" }}
                    src={homepageData[regionBanners][1]["uri"]}
                    alt="add"
                  />
                ) : null}
              </div>

        );
};

export default SideAdsCard;
