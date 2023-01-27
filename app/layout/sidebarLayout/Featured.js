/**
 * It returns a div with a class of 'advance-card feature-card' that contains a h6 tag with the text
 * 'Featured', a Slider component with a class of 'feature-slider' and the featureSlider object from
 * the data/slickSlider.js file, and a div with a class of 'labels-left' that contains a span with a
 * class of 'label label-success' and the text 'featured'
 * @returns A React component
 */
import React from "react";
import Slider from "react-slick";
import { featureSlider } from "../../data/slickSlider";
import Img from "../../utils/BackgroundImageRatio";
import NoSsr from "../../utils/NoSsr";

const Featured = () => {
  const [FeaturedData, setFeaturedData] = useState();
  useEffect(() => {
    getData(`${process.env.API_URL}/FeaturedApartmentByLoc/?queryQty=3`)
      .then((res) => {
        setFeaturedData(res.data);
      })
      .catch((error) => console.log("Error", error));
  }, []);

  return (
    <div className="advance-card feature-card">
      <h6>Featured</h6>
      <NoSsr>
        <Slider className="feature-slider" {...featureSlider}>
        {value &&
                  value.map((data, i) => (
          <div>
            <Img src={`/assets/images/apartment/${data.media[0]}`} className="bg-img" alt={data.title} />
            <div className="bottom-feature">
              <h5>{data.title}</h5>
              <h6>
                  {data.currency}{data.rent} <small>/ start from</small>
              </h6>
            </div>
          </div>
        ))}
        </Slider>
      </NoSsr>
      <div className="labels-left">
        <span className="label label-success">featured</span>
      </div>
    </div>
  );
};

export default Featured;
