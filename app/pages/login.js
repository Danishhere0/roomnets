import React, { useCallback, useEffect, useState } from "react";
import { User, Lock } from "react-feather";
import { Col, Container, Row } from "reactstrap";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Link from "next/link";
import Breadcrumb from "../layout/Breadcrumb/Breadcrumb";
import FooterThree from "../layout/footers/FooterThree";
import NavbarThree from "../layout/headers/NavbarThree";
import { useRouter } from 'next/router';
import { toast } from "react-toastify";
import axios from "axios";
import { useDispatch, useHistory }  from "react-redux";
import { setCookie } from 'cookies-next';
import { useSelector } from 'react-redux';
import { loginUser } from '../slices/action-creators';

export const getStaticProps = async ({ locale }) => ({ props: { ...(await serverSideTranslations(locale, ["common"])) } });

const Login = () => {
  const [errors, setErrors] = React.useState([]);
  const router = useRouter();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth?.isLoggedIn);
  /*useEffect(() => {
    if (isLoggedIn) {
      router.push('/userpanel/dashboard');
    }
  }, [isLoggedIn]);
  /*const [state, setState] = useState({
    email: null,
    password: null,
    rememberMe: false,
  });

  const handlePhoneNumChange = (e) => {
    setState({ ...state, email: e.target.value });
  };

  const handlePinCodeChange = (e) => {
    setState({ ...state, password: e.target.value });
  };

  const handleRememberMeCheck = (e) => {
    setState({ ...state, rememberMe: e.target.value });
  };*/

  const [formResponse, setFormResponse] = React.useState({
    email: "",
    password: "",
  });
  const [homepageData, setHomePageData] = React.useState({
    Banners: [],
    partners:[],
    googleAdsScript: "",
  });
  const [email, setEmail] = React.useState("");
    const fetchHomepageModels = async () => {
      return await axios
        .get(`${process.env.API_URL}/fetchHomepageModels`)
        .then((response) => response)
        .catch((err) => err);
    };
  const validatePage = async () => {
    const {
      password,
      email,
    } = formResponse;
    const newError = new Array();
    if (!password) {
      newError.push("You did not provide a password");
    }
    if (email && !validateEmail(email)) {
      newError.push(`"${email}" is not valid email,`);
    }

    return newError;
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
  const handleLogin = async (e) => {
    e.preventDefault()
    const { email, password } = formResponse;
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }

    await axios.post(`${process.env.API_URL}/login`, {
          Email: email,
          Password: password, config
    }).then((res) => {
        console.log("Res is" +res.status)
        if (res.status == true || res.status == '200'){
          localStorage.setItem('userToken', res.data.userData.userToken);
          localStorage.setItem('currentUser', JSON.stringify(res.data));

          setCookie('currentUser', res.data);
          setCookie('userToken', res.data.userData.userToken);
          dispatch(loginUser(res.data));
         // console.log("userdata is"+res.data.userData)

          // Do a fast client-side transition to the already prefetched dashboard page
          //router.push('/userpanel/dashboard')
          router.push({
            pathname: '/userpanel/dashboard',
            //query: { message: `Welcome back ${email} !` },
          })
        }else{
          switch(res.data.status) {
            case true:
             // return router.push('/userpanel/dashboard');
            case 404:
              const notify = () => toast("A user with this account does not exist.", { type: "error", position: "top-right" });
              return notify();
            case 401:
              const notify1 = () => toast("The password is not correct.", { type: "error", position: "top-right" });
              return notify1();
            default:
              const notify2 = () => toast("Try again", { type: "error", position: "top-right" });
              notify2();
          }
        }
      }).catch((err) => {
        
        if (err.res && err.res.data.message) {
          setErrors([err.res.data.message]);
          switch(err.res.data.status) {
            case true:
              return router.push('/userpanel/dashboard');
            case 404:
              const notify = () => toast("A user with this account does not exist.", { type: "error", position: "top-right" });
              return notify();
            case 401:
              const notify1 = () => toast("The password is not correct.", { type: "error", position: "top-right" });
              return notify1();
            default:
              const notify2 = () => toast("Try again", { type: "error", position: "top-right" });
              notify2();
          }
        } else {
          console.log("Error is"+err.res);
          setErrors([
            "An error occured, make sure you have a working network",
          ]);
        }
        console.log(err);
      });
    };

 /* useEffect(() => {
    // Prefetch the dashboard page
    router.prefetch('/userpanel/dashboard')
  }, []);*/
  return (
    <>
      <NavbarThree />
      <Breadcrumb />
      <section className="login-wrap">
        <Container>
          <Row className=" log-in">
            <Col xl="5" lg="6" md="8" sm="10">
              <div className="theme-card">
                <div className="title-3 text-start">
                  <h2>Log in</h2>
                </div>
                <div className="row justify-content-center">
                  <div className="col-lg-7 text-left">
                    {errors.length > 0
                      ? errors.map((xxx) => (
                          <p className="error-card alert-danger">{xxx}</p>
                        ))
                      : null}
                    <div style={{ height: "10px" }} />
                  </div>
                </div>
                <form onSubmit={handleLogin}>
                  <div className="form-group">
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <div className="input-group-text">
                          <User />
                        </div>
                      </div>
                      <input type="text" className="form-control" id="email" name="email" placeholder="Enter Email" required value={formResponse.email}
                        onChange={(e) =>
                          setFormResponse({
                            ...formResponse,
                            email: e.target.value,
                          })
                        }/>
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <div className="input-group-text">
                          <Lock />
                        </div>
                      </div>
                      <input type="password" id="password" name="password" className="form-control" placeholder="Password" maxLength="8" required 
                        value={formResponse.password}
                        onChange={(e) =>
                          setFormResponse({
                            ...formResponse,
                            password: e.target.value,
                          })
                        }/>
                      <div className="input-group-apend">
                        <div className="input-group-text">
                          <i id="pwd-icon" className="far fa-eye-slash"></i>
                        </div>
                      </div>
                    </div>
                    <div className="important-note">password should be a minimum of 8 characters and should contains letters and numbers</div>
                  </div>
                  <div className="d-flex">
                    <label className="d-block mb-0" htmlFor="chk-ani">
                      <input className="checkbox_animated" id="chk-ani" type="checkbox" /> <span>Remember me</span>
                    </label>
                    <Link href="/forgot-password" className="font-rubik">
                      Forgot password ?
                    </Link>
                  </div>
                  <div>
                    <button type="submit" className="btn btn-gradient btn-pill me-sm-3 me-2">
                      Log in
                    </button>
                    <Link href="/signup" className="btn btn-dashed btn-pill">
                      Create Account
                    </Link>
                  </div>
                 {/* <div className="divider">
                    <h6>or</h6>
                  </div>
                  <div>
                    <h6>Log in with</h6>
                    <div className="row social-connect">
                      <div className="col-6">
                        <a href="https://www.facebook.com/" className="btn btn-social btn-flat facebook p-0">
                          <i className="fab fa-facebook-f"></i>
                          <span>Facebook</span>
                        </a>
                      </div>
                      <div className="col-6">
                        <a href="https://twitter.com/" className="btn btn-social btn-flat twitter p-0">
                          <i className="fab fa-twitter"></i>
                          <span>Twitter</span>
                        </a>
                      </div>
                      <div className="col-6">
                        <a href="https://account.google.com" className="btn btn-social btn-flat google p-0">
                          <i className="fab fa-google"></i>
                          <span>Google</span>
                        </a>
                      </div>
                      <div className="col-6">
                        <a href="https://www.linkedin.com/" className="btn btn-social btn-flat linkedin p-0">
                          <i className="fab fa-linkedin-in"></i>
                          <span>Linkedin</span>
                        </a>
                      </div>
                    </div>
                  </div>*/}
                </form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <FooterThree />
    </>
  );
};

export default Login;
