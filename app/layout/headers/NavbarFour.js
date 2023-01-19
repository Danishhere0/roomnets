import Link from "next/link";
import React from "react";
import { Col, Row, Container } from "reactstrap";
import MainNav from "./elements/MainNav";
import RightNavTwo from "./elements/RightNavTwo";

const NavbarFour = () => {
  return (
    <header className="header-4">
      <Container>
        <Row>
          <div className="col">
            <div className="menu">
              <div className="brand-logo">
                <Link href="/home/slider-filter-search">
                  <img src="/logo2.png" alt="" className="img-fluid for-light" width="50px" height="50px" />
                  <img src="/logo2.png" alt="" className="img-fluid for-dark" width="50px" height="50px" />
                </Link>
              </div>
              <MainNav />
              <RightNavTwo />
            </div>
          </div>
        </Row>
      </Container>
    </header>
  );
};

export default NavbarFour;
