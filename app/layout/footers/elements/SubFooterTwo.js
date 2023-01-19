import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Container, Row } from "reactstrap";
import { getData } from "../../../utils/getData";
import axios from "axios";

const SubFooterTwo = () => {
  const [Footer_Note, setFooter_Note] = useState([]);

  useEffect(() => {
    const fetchAboutIntro1 = async () => {
      try {
        const res6  = await axios.get(`${process.env.API_URL}/getSiteContent`, {
          params: {
            pageslug: 'Footer_Note',
            content_location: 'footer'
          },
        });
        setFooter_Note(res6.data.userData[0].content);
        //console.log('About page:' + res2.data.userData[0].content);
      } catch (err) {
        console.error('About page Error is: '+ err);
      }
    };
    fetchAboutIntro1();
  }, []);
  return (
    <div className="sub-footer footer-light">
      <Container>
        <Row>
          <div className="col-xl-6 col-md-6">
            <div className="copy-right">
              <p className="mb-0">{`${ Footer_Note || ""}`}</p>
            </div>
          </div>
          <div className="col-xl-6 col-md-6 text-end">
            <ul className="sub-footer-link">
              <li>
                <Link href="/home">Home</Link>
              </li>
              <li>
                <Link href="/terms">Terms</Link>
              </li>
              <li>
                <Link href="/privacy">Privacy policy</Link>
              </li>
              <li>
                <Link href="/contact/contact-us">Contact</Link>
              </li>
            </ul>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default SubFooterTwo;
