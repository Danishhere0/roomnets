/**
 * It takes an array of images and returns a slider with the images
 * @returns The return statement is used to return a value from a function.
 */
import React, { useState } from "react";
import Slider from "react-slick";
import { galleryFor, galleryNav } from "../../../data/slickSlider";
import Img from "../../../utils/BackgroundImageRatio";
import NoSsr from "../../../utils/NoSsr";


const GallerySlider = ({roomId}) => {
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();
  const [imgData, setImgData] = useState([]);
  /*const HomeImage = [
    "/assets/images/property/4.jpg",
    "/assets/images/property/3.jpg",
    "/assets/images/property/14.jpg",
    "/assets/images/property/11.jpg",
    "/assets/images/property/12.jpg",
    "/assets/images/property/4.jpg",
    "/assets/images/property/3.jpg",
    "/assets/images/property/11.jpg",
    "/assets/images/property/12.jpg",
  ];*/
  useEffect(() => {
    const fetch = async (roomId) => {
      try {
        const res1  = await axios.get(`${process.env.API_URL}/getPostRoomsById`, {
          params: {
            postId: roomId
          },
        });
        setImgData(res1.data.userData[0].media);
        //console.log('About page:' + res1.data.userData[0].content);
      } catch (err) {
        console.error('About page Error is: '+ err);
      }
    };
    fetch();
  }, []);
  const HomeImage = [];
  HomeImage.push(imgData);

  return (
    <NoSsr>
      <Slider className="gallery-for" {...galleryFor} asNavFor={nav2} ref={(slider1) => setNav1(slider1)}>
        {HomeImage.map((data, i) => (
          <div key={i}>
            <div>
              <Img src={data} className="bg-img" />
            </div>
          </div>
        ))}
      </Slider>
      <Slider className="gallery-nav p-1" {...galleryNav} asNavFor={nav1} ref={(slider2) => setNav2(slider2)}>
        {HomeImage.map((data, i) => (
          <div key={i}>
            <div>
              <Img className="img-fluid bg-img" src={data} />
            </div>
          </div>
        ))}
      </Slider>
    </NoSsr>
  );
};

export default GallerySlider;
