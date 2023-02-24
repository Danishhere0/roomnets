import React, { useEffect, useState } from "react";
import { Gallery, Item } from "react-photoswipe-gallery";
import Slider from "react-slick";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import BodyContent from "../components/pages/blogDetailPages";
import { propertySlider } from "../data/slickSlider";
import Breadcrumb from "../layout/Breadcrumb/Breadcrumb";
import FooterThree from "../layout/footers/FooterThree";
import NavbarThree from "../layout/headers/NavbarThree";
import { useHistory } from "react-router-dom";
import { getData } from "../utils/getData";


export const getStaticProps = async ({ locale }) => ({ props: { ...(await serverSideTranslations(locale, ["common"])) } });
import Img from "../utils/BackgroundImageRatio";
import NoSsr from "../utils/NoSsr";
import { useRouter } from 'next/router';
//const history = useHistory();

//const imgData = ["/assets/images/property/4.jpg", "/assets/images/property/16.jpg", "/assets/images/property/14.jpg"];


const DetailWithGallery = () => {
  const router = useRouter();
  const { blog_id } = router.query;

  const [Imgs, setImgData] = React.useState([]);
  const [blogData, setBlogDetData] = React.useState();

  React.useEffect(() => {
    getData(`${process.env.API_URL}/BlogImgByID/?blog_id=3`)
      .then((res) => {
        setImgData(res.data?.userData);
      })
      .catch((error) => console.log("Error", error));
  }, []);

  useEffect(() => {
    const fetch = async () => {
      try {
        const res1  = await axios.get(`${process.env.API_URL}/BlogById`, {
          params: {
            id: blog_id,
          },
        });
        setBlogDetData(res1.data.userData);
        //console.log('About page:' + res1.data.userData[0].content);
      } catch (err) {
        console.error('About page Error is: '+ err);
      }
    };
    fetch();
  }, []);
  const imgData = Imgs.map((data) => data.imagUri);

  return (
    <>
      <NavbarThree />
      <Breadcrumb />
      <BodyContent side={"left"}>
        <Gallery>
          <NoSsr>
            <Slider className="property-slider" {...propertySlider}>
              {imgData.map((data, i) => (
                <Item key={i} original={data} width="1000" height="550">
                  {({ ref, open }) => (
                    <div ref={ref} onClick={open}>
                      <Img src={data.imagUri} className="bg-img" alt="" />
                    </div>
                  )}
                </Item>
              ))}
            </Slider>
          </NoSsr>
        </Gallery>
      </BodyContent>
      <FooterThree />
    </>
  );
};

export default DetailWithGallery;
