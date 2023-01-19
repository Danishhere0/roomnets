import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <div className="brand-logo">
      <Link href="/">
        <img src="/logo2.png" alt=""  width="50px" height="50px"  className="img-fluid" />
      </Link>
    </div>
  );
};

const Logo2 = () => {
  return (
    <div className="brand-logo">
      <Link href="/">
        <img src="/logo2.png" alt="" className="img-fluid for-light"  width="50px" height="50px" />
        <img src="/logo2.png" alt="" className="img-fluid for-dark" width="50px" height="50px"  />
      </Link>
    </div>
  );
};

const Logo3 = () => {
  return (
    <div className="brand-logo">
      <Link href="/">
        <img src="/logo2.png" alt="" className="img-fluid" width="50px" height="50px"  />
      </Link>
    </div>
  );
};

const Logo4 = () => {
  return (
    <div className="brand-logo">
      <Link href="/">
        <img src="/logo2.png" alt="" className="img-fluid" width="50px" height="50px"  />
      </Link>
    </div>
  );
};

const Logo5 = () => {
  return (
    <div className="brand-logo">
      <Link href="/">
        <img src="/logo2.png" alt="" className="img-fluid for-light" width="50px" height="50px"  />
        <img src="/logo2.png" alt="" className="img-fluid for-dark" width="50px" height="50px"  />
      </Link>
    </div>
  );
};

const Logo6 = () => {
  return (
    <div className="brand-logo">
      <Link href="/">
        <img src="/logo2.png" alt="" className="img-fluid" width="50px" height="50px"  />
      </Link>
    </div>
  );
};

const Logo7 = () => {
  return (
    <div className="brand-logo">
      <Link href="/">
        <img src="/logo2.png" alt="" className="img-fluid for-light" width="50px" height="50px"  />
        <img src="/logo2.png" alt="" className="img-fluid for-dark" width="50px" height="50px"  />
      </Link>
    </div>
  );
};

const Logo8 = () => {
  return (
    <div className="logo">
      <Link href="/">
        <img src="/logo2.png" alt="" className="img-fluid" width="50px" height="50px"  />
      </Link>
    </div>
  );
};
const Logo9 = () => {
  return (
    <div className="logo">
      <Link href="/">
        <img src="/logo2.png" alt="" className="img-fluid" width="50px" height="50px"  />
      </Link>
    </div>
  );
};

export { Logo, Logo2, Logo3, Logo4, Logo5, Logo6, Logo7, Logo8, Logo9 };
