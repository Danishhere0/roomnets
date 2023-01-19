                                                                                                                                  /**
 * It returns a div with a class of log-in theme-card, which contains a div with a class of title-3
 * text-start, which contains an h2 with the text Let's Get In Touch, which is followed by a Form,
 * which contains a Row with a class of gx-3, which contains a FormGroup with a class of form-group,
 * which contains a Col with a class of md-12, which contains an InputGroup with a class of
 * input-group, which contains a div with a class of input-group-prepend, which contains an
 * InputGroupText, which contains a User icon, which is followed by an Input with a type of text, a
 * class of form-control, a required attribute, a maxLength of 20, a placeholder of Enter your name,
 * and a name of userName, which is followed by a FormGroup with a class of form-group col-md-6, which
 * contains an InputGroup with a
 * @returns The return statement is used to return a value from a function.
 */
import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";
import { Mail, Phone, User } from "react-feather";
import { Button, Col, Form, FormGroup, Input, InputGroup, InputGroupText, Row } from "reactstrap";

const ContactUsCard = () => {
  const [errors, setErrors] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const history = useHistory();
  const dispatch = useDispatch();
  const [formResponse, setFormResponse] = React.useState({
    firstName: "",
    message: "",
    lastName: "",
    company: "",
    mobileNumber: "",
    subject: "",
    email: "",
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
      firstName,
      email,
      message,
      lastName,
      company,
      mobileNumber,
      subject,
    } = formResponse;
    const newError = new Array();
    if (!firstName) {
      newError.push("You did not provide your first name");
    }
    if (!message) {
      newError.push("Message fields can not be blank");
    }
    if (!lastName) {
      newError.push("You did not provide your last name");
    }
    if (!mobileNumber) {
      newError.push("You did not provide your phone number");
    }
    if (!subject) {
      newError.push("Subject fields is required");
    }
    if (!email) {
    //  newError.push("You did not provide your email");
    }

    return newError;
  };
  const handleNext = async (e) => {
    e.preventDefault();
    await validatePage().then(async (res) => {
      if (res.length > 0) {
        setErrors(res);
        window.scrollTo(0, 30);
      } else {
        setLoading(true);
        await axios
          .post(`${process.env.API_URL}/contactForm`, formResponse)
          .then((response) => {
            setLoading(false);
            history.replace("/contactsuccess");
          })
          .catch((err) => {
            setLoading(false);

            if (err.response && err.response.data.message) {
              setErrors([err.response.data.message]);
            } else {
              setErrors([
                "An error occured, make sure you have a working network",
              ]);
            }
            console.log(err);
          });
        // history.push("/Contactsuccess");
      }
    });
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
  return (
    <div className='log-in theme-card'>
      <div className='title-3 text-start'>
        <h2>Let's Get In Touch</h2>
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
      <Form onSubmit={handleNext}>
        <Row className='gx-3'>
          <FormGroup className='form-group col-md-6'>
            <Col md='6'>
              <InputGroup className='input-group'>
                <div className='input-group-prepend'>
                  <InputGroupText>
                    <User />
                  </InputGroupText>
                </div>
                <Input type='text' className='form-control' required maxLength='50' placeholder='First Name' name='firstName' id='firstName' 
                value={formResponse.firstName}
                onChange={(e) =>
                  setFormResponse({
                    ...formResponse,
                    firstName: e.target.value,
                  })
                }/>
              </InputGroup>
            </Col>
          </FormGroup>
          <FormGroup className='form-group col-md-6'>
            <Col md='6'>
              <InputGroup className='input-group'>
                <div className='input-group-prepend'>
                  <InputGroupText>
                    <User />
                  </InputGroupText>
                </div>
                <Input type='text' className='form-control' required maxLength='50' placeholder='Last Name' name='lastName' id='lastName' 
                value={formResponse.lastName}
                onChange={(e) =>
                  setFormResponse({
                    ...formResponse,
                    lastName: e.target.value,
                  })
                }/>
              </InputGroup>
            </Col>
          </FormGroup>
          <FormGroup className='form-group col-md-6'>
            <InputGroup className='input-group'>
              <div className='input-group-prepend'>
                <InputGroupText>
                  <Phone />
                </InputGroupText>
              </div>
              <Input
                placeholder='Phone Number*'
                className='form-control'
                name='mobileNumber'
                id='mobileNumber'
                type='tel'
                maxLength='20'
                value={formResponse.mobileNumber}
                onChange={(e) =>
                  setFormResponse({
                    ...formResponse,
                    mobileNumber: e.target.value,
                  })
                }
                required
              />
              
            </InputGroup>
          </FormGroup>
          <FormGroup className='form-group col-md-6'>
            <InputGroup className='input-group'>
              <div className='input-group-prepend'>
                <InputGroupText>
                  Subject 
                </InputGroupText>
              </div>
              <Input
                placeholder='Subject*'
                className='form-control'
                name='subject'
                id='subject'
                type='text'
                maxLength='50'
                value={formResponse.subject}
                onChange={(e) =>
                  setFormResponse({
                    ...formResponse,
                    subject: e.target.value,
                  })
                }
                required
              />
            </InputGroup>
          </FormGroup>
          <FormGroup className='form-group col-md-6'>
            <Col md='12'>
              <InputGroup className='input-group'>
                <div className='input-group-prepend'>
                  <InputGroupText>
                    Your Company
                  </InputGroupText>
                </div>
                <Input type='text' className='form-control' required maxLength='50' placeholder='Enter your Company' name='company' id='company'
                value={formResponse.company}
                onChange={(e) =>
                  setFormResponse({
                    ...formResponse,
                    company: e.target.value,
                  })
                }/>
              </InputGroup>
            </Col>
          </FormGroup>
          <FormGroup className='form-group col-md-6'>
            <InputGroup className='input-group'>
              <div className='input-group-prepend'>
                <div className='input-group-text'>
                  <Mail />
                </div>
              </div>
              <Input type='email' className='form-control' placeholder='Email address' name="email" id="email" 
                    value={formResponse.email}
                    onChange={(e) =>
                      setFormResponse({
                        ...formResponse,
                        email: e.target.value,
                      })
                    } />
            </InputGroup>
          </FormGroup>
          <div className='form-group col-md-12'>
            <Input type='textarea' className='form-control' id='message' rows='3'
                  value={formResponse.message} 
                  placeholder='Write here something'
                  onChange={(e) =>
                    setFormResponse({
                      ...formResponse,
                      message: e.target.value,
                    })
                  } />
          </div>
          <div className='submit-btn with-captcha'>
            <div className='captcha'>
              <div className='spinner'>
                <label>
                  <Input type='checkbox' />
                  <span className='checkmark'>
                    <span>&nbsp;</span>
                  </span>
                </label>
              </div>
              <div className='text'>I'm not a robot</div>
              <div className='logo'>
                <img src='/assets/images/inner-pages/recaptcha.png' alt='' />
                <p>reCAPTCHA</p>
                <small>Privacy - Terms</small>
              </div>
            </div>
            <div></div>
            <Button className='btn btn-gradient btn-flat' type='submit'>
              Send Your Message
            </Button>
          </div>
        </Row>
      </Form>
    </div>
  );
};

export default ContactUsCard;
