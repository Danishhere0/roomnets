import React from "react";
import axios from "axios";
const SideAdsCard = () => {
    const history = useHistory();
   // const [homepageData, setHomePageData] = React.useState({ Banners: [],googleAdsScript:"" });
   // const country = useSelector(({ CountryReducer }) => CountryReducer.country);
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
        <div
                style={{ width: "250px" }}
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
