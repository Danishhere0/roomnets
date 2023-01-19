import Link from "next/link";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { footerSlider } from "../../../data/slickSlider";
import NoSsr from "../../../utils/NoSsr";
import { getData } from "../../../utils/getData";
import { Bold } from "react-feather";


const FooterBlog = () => {
  const [BlogData, setBlogData] = React.useState([]);

    useEffect(() => {
      getData(`${process.env.API_URL}/BlogRecentPostByDate`)
        .then((res8) => {
          console.log("blog content:" + res8.data.userData);
          setBlogData(res8.data.userData);
          
        })
        .catch((error) => console.log("Error", error));
    }, []);

  return (
    <div className="bottom-blog">
      <div className="slick-between">
        <NoSsr>
          <Slider className="footer-slider" {...footerSlider}>
            {BlogData?.map((blog, i) => (
              <div key={blog._id}>
                <div className="media" >
                  <Link href={"/blog_det/?id=" + blog._id}>
                    <div className="img-overlay">
                      {blog.imagUri && (
                          <img id={"image"+ blog._id} src={"/assets/images/blog/"+ blog.imagUri[i]} alt={blog.title}
                          onError={(e) =>
                              (e.target.src =
                                "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg")
                          } />
                        )}
                    </div>
                  </Link>

                  <div className="media-body">
                    <h6>
                      <Link href={blog._id}>{blog.title}</Link>
                    </h6>
                    <p className="font-roboto mb-0">
                      <Link href={blog._id}>{blog.description}</Link>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </NoSsr>
      </div>
    </div>
  );
};

export default FooterBlog;
