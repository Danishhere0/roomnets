import { useRouter } from "next/router";
import React, { Fragment, useEffect, useState } from "react";
import { Container } from "reactstrap";
import Img from "../../utils/BackgroundImageRatio";
import axios from "axios";


const Breadcrumb = ({ right }) => {
  const router = useRouter();
  const [path, setPath] = useState();
  useEffect(() => {
    setPath(router.pathname.split("/"));
  }, [router.pathname]);

  const [isActive, setIsActive] = useState();
  const fetchHomepageModels = async () => {
    return await axios
      .get(`${process.env.API_URL}/fetchHomepageModels`)
      .then((response) => response)
      .catch((err) => err);
  };
  
  const [homepageData, setHomePageData] = React.useState({
    Banners: [],
    partners:[],
    googleAdsScript: "",
  });
  
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
    <section className="breadcrumb-section p-0 ">
      <Img src={`${homepageData.BreadcrumbImage1 || ""}`} className="bg-img img-fluid" alt="" />
      <Container>
        <div className={`breadcrumb-content ${right ? "breadcrumb-right" : ""}`}>
          <div>
            <h2>{path && path[path.length - 1].replaceAll("-", " ")}</h2>
            <nav aria-label="breadcrumb" className="theme-breadcrumb">
              <ol className="breadcrumb">
                {path?.map((data, i) => (
                  <Fragment key={i}>
                    {data && (
                      <li className="breadcrumb-item">
                        <a>{data.replaceAll("-", " ")}</a>
                      </li>
                    )}
                  </Fragment>
                ))}
              </ol>
            </nav>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Breadcrumb;
