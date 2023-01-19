import Link from "next/link";
import React from "react";
import { Col } from "reactstrap";
import { Logo3 } from "../../../components/elements/Logo";
import axios from "axios";
import { useSelector } from "react-redux";
import { useHistory, useParams} from "react-router-dom";

const FooterContactUsDetails = () => {
  const history=useHistory()
  const [loading, setLoading] = React.useState(false);
  const [homepageData, setHomePageData] = React.useState([]);
  const fetchHomepageModels = async () => {
    return await axios
      .get(`${process.env.API_URL}/fetchHomepageModels`)
      .then((response) => response)
      .catch((err) => err);
  };
  React.useEffect(
    () =>
      fetchHomepageModels()
        .then((res) => {
          console.log(res.data.userData);
          setHomePageData({ ...res.data.userData });
        })
        .catch((err) => console.log(err)),

    []
  );
  
  return (
    <Col xl="3">
      <div className="footer-details text-center">
        <Logo3 />
        <p>{`${ homepageData.FooterDescription || ""}`}</p>
        <h6>Contact us</h6>
        <ul className="icon-list">
          <li>
            <Link href="/contact/contact-us">
              <i className="fas fa-map-marker-alt"></i>
            </Link>
          </li>
          <li>
            <Link href={"tel:" + `${homepageData.SitePhone || ""}`}>
              <i className="fa fa-phone-alt"></i>
            </Link>
          </li>
          <li>
            <Link href={`${ homepageData.FacebookLink || ""}`}>
              <i className="fa fa-facebook"></i>
            </Link>
          </li>
          <li>
            <Link href={`${ homepageData.YoutubeLink || ""}`}>
              <i className="fa fa-youtube"></i>
            </Link>
          </li>
          <li>
            <Link href={`${ homepageData.TwitterLink || ""}`}>
              <i className="fa fa-twitter"></i>
            </Link>
          </li>
          <li>
            <Link href={`${ homepageData.InstagramLink || ""}`}>
              <i className="fa fa-instagram"></i>
            </Link>
          </li>
        </ul>
      </div>
    </Col>
  );
};

export default FooterContactUsDetails;
