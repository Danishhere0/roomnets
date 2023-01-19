import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Col } from "reactstrap";
import { FooterData } from "../../../data/footerData";
const [BlogData, setBlogData] = React.useState([]);
const [siteContent1, setsiteContent] = React.useState([]);

const FooterBlog = ({ isActive, setIsActive, img }) => {

  useEffect(() => {
    getData(`${process.env.API_URL}/BlogRecentPostByDate`)
      .then((res5) => {
        setBlogData(res5.data.userData);
        console.log('blog footer data:' + res5.data.userData);
      })
      .catch((error) => console.log("blog footer data Error", error));
  }, []);


  useEffect(() => {
    const fetchAboutIntro1 = async () => {
      try {
        const res6  = await axios.get(`${process.env.API_URL}/getSiteContent`, {
          params: {
            pageslug: 'Latest_Blog_Title',
            content_location: 'footer'
          },
        });
        setsiteContent(res6.data.userData[0]);
        //console.log('About page:' + res2.data.userData[0].content);
      } catch (err) {
        console.error('About page Error is: '+ err);
      }
    };
    fetchAboutIntro1();
  }, []);

  return (
    <Col xl="3" md="6">
      <div className="footer-links">
        <h5
          className="footer-title"
          onClick={(e) => {
            e.preventDefault();
            setIsActive("OurLatestBlog");
            isActive === "OurLatestBlog" && setIsActive();
          }}>
          {siteContent1.content}
          <span className="according-menu">
            <i className="fas fa-chevron-down"></i>
          </span>
        </h5>
        <div className={`footer-content ${isActive === "OurLatestBlog" ? "d-block" : "d-none d-md-block"}`}>
          <div className="footer-blog">
            {BlogData.children.map((value, i) => (
              <div className="media" key={i}>
                <Link href={"/blog_detail/"+data?._id}>
                  <div className="img-overlay">
                    <img src={imagUri[i]} alt={value.title} height="50px" width="50px" />
                  </div>
                </Link>
                <div className="media-body">
                  <h6>
                    <Link href={"/blog_detail/"+data?._id}>{value.title}</Link>
                  </h6>
                  <p className="font-roboto mb-0">
                    <Link href={"/blog_detail/"+data?._id}>{value.description}</Link>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Col>
  );
};

export default FooterBlog;
