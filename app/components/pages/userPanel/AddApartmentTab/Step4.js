import { Field, Form, Formik } from "formik";
import React from "react";
import { Map, MapPin, Phone } from "react-feather";
import { Button, Col, Row } from "reactstrap";
import * as Yup from "yup";
import ReactstrapFormikInput from "../../../../utils/ReactstrapInputsValidation/ReactstrapFormikInput";
import { ReactstrapInput, ReactstrapSelect } from "../../../../utils/ReactstrapInputsValidation";
import { useSelector } from "react-redux";

const Step2 = ({ setActive, setData }) => {
  const country = useSelector((state) => state.countryReducer.country);
  const [errors, setErrors] = React.useState([]);
  const [ImageState, setImageState] = React.useState([]);
  function handleChange(event) {
    if (
      event.target.files[0].type === "image/png" ||
      event.target.files[0].type === "image/jpg" ||
      event.target.files[0].type === "image/jpeg"
    ) {
      if (event.target.files[0]) {
        // const newImagestate = ImageState;
        // newImagestate.push({
        //   file: URL.createObjectURL(event.target.files[0]),
        //   Uri: event.target.files[0],
        // });
        // setImageState(newImagestate);
        setImageState([
          ...ImageState,
          {
            file: URL.createObjectURL(event.target.files[0]),
            Uri: event.target.files[0],
          },
        ]);
      }
    } else {
      return alert("select a valid image format");
    }
  }

  const mapImagestate = () => {
    return ImageState.map((xx) => (
      <div className="col-3" style={{ margin: "10px" }}>
        <img
          src={xx.file}
          alt="preview"
          style={{
            maxHeight: "80px",
            display: "block",
            margin: "10px",
            // maxWidth: "80px",
          }}
        />
      </div>
    ));
  };

  const [formResponse, setFormResponse] = React.useState({
    new_room_mate: {
      smoker: "",
      language_spoken: "",
      sexual_orientation: "",
      nationality: "",
      occupation: "",
      pets: "",
      minimum_age: "",
      maximum_age: "",
      couples_welcomed: "",
      gender: "",
    },
  });

  const {
    couples_welcomed,
    maximum_age,
    mimimum_age,
    nationality,
    occupation,
    pets,
    sexual_orientation,
    smoker,
  } = formResponse.new_room_mate;

  return (
    <Formik
      initialValues={{
        address: "",
        city_name: "",
        state_name: "",
        country: "",
        pin_code: "",
      }}
      validationSchema={Yup.object().shape({
        address: Yup.string().required(),
        state_name: Yup.string().required(),
        country: Yup.string().required(),
        pin_code: Yup.number()
          .test("len", "Must be at least 5 characters", (val) => String(val) && String(val).length >= 5)
          .required(),
      })}
      onSubmit={(values) => {
        setData((prev) => ({ ...prev, ...values }));
        setActive(5);
      }}
      render={() => (
        <Form>
          <div className="wizard-step-2">
            <div className="title-3 text-start">
              <h2>New Tenant Requirements</h2>
            </div>
            <div className="row justify-content-center">
                    <div className="col-lg-7 text-left">
                      {errors.length > 0
                        ? errors.map((xxx) => (
                            <p className="error-card alert-danger">
                              <ErrorOutlineIcon
                                fontSize="small"
                                style={{ marginRight: "4px" }}
                              />
                              {xxx}
                            </p>
                            // <Alert severity="error">{xxx}</Alert>
                          ))
                        : null}
                    </div>
                  </div>
            <div className="row my-20">{mapImagestate()}</div>
            <Row>
            <Col sm="4" className="form-group">
                          <Field
                            name="couples_welcomed"
                            component={ReactstrapSelect}
                            type="text"
                            className="form-control"
                            label="Couples Welcomed?"
                            onChange={(e) =>
                              setFormResponse({
                                ...formResponse,
                                new_room_mate: {
                                  ...formResponse.new_room_mate,
                                  couples_welcomed: e.target.value,
                                },
                              })
                            }
                            inputprops={{ options: ["Yes", "No"], defaultOption: "Couples Welcomed?" }}
                          />
                        </Col>
                        <Col sm="4" className="form-group">
                          <Field
                            name="minimum_age"
                            component={ReactstrapSelect}
                            type="text"
                            className="form-control"
                            label="Minimum Age?"
                            onChange={(e) =>
                              setFormResponse({
                                ...formResponse,
                                new_room_mate: {
                                  ...formResponse.new_room_mate,
                                  minimum_age: e.target.value,
                                },
                              })
                            }
                            inputprops={{ options: ["Yes", "No"], defaultOption: "Minimum Age?" }}
                          />
                        </Col>
                        <Col sm="4" className="form-group">
                          <Field
                            name="maximum_age"
                            component={ReactstrapSelect}
                            type="text"
                            className="form-control"
                            label="Maximum Age?"
                            onChange={(e) =>
                              setFormResponse({
                                ...formResponse,
                                new_room_mate: {
                                  ...formResponse.new_room_mate,
                                  maximum_age: e.target.value,
                                },
                              })
                            }
                            inputprops={{ options: ["Yes", "No"], defaultOption: "Maximum Age?" }}
                          />
                        </Col>
                        <Col sm="4" className="form-group">
                          <Field
                            name="gender"
                            component={ReactstrapSelect}
                            type="text"
                            className="form-control"
                            label="Gender"
                            onChange={(e) =>
                              setFormResponse({
                                ...formResponse,
                                new_room_mate: {
                                  ...formResponse.new_room_mate,
                                  gender: e.target.value,
                                },
                              })
                            }
                            inputprops={{ options: ["Male", "Female"], defaultOption: "Gender" }}
                          />
                        </Col>
                        <Col sm="4" className="form-group">
                          <Field
                            name="pets"
                            component={ReactstrapSelect}
                            type="text"
                            className="form-control"
                            label="Pets Allowed?"
                            onChange={(e) =>
                              setFormResponse({
                                ...formResponse,
                                new_room_mate: {
                                  ...formResponse.new_room_mate,
                                  pets: e.target.value,
                                },
                              })
                            }
                            inputprops={{ options: ["Yes", "No"], defaultOption: "Pets Allowed?" }}
                          />
                        </Col>
                        <Col sm="4" className="form-group">
                          <Field
                            name="smokers"
                            component={ReactstrapSelect}
                            type="text"
                            className="form-control"
                            label="Pets?"
                            onChange={(e) =>
                              setFormResponse({
                                ...formResponse,
                                new_room_mate: {
                                  ...formResponse.new_room_mate,
                                  smokers: e.target.value,
                                },
                              })
                            }
                            inputprops={{ options: ["Yes", "No"], defaultOption: "Smokers?" }}
                          />
                        </Col>
                        <Col sm="4" className="form-group">
                          <Field
                            name="sexual_orientation"
                            component={ReactstrapSelect}
                            type="text"
                            className="form-control"
                            label="Sexual Orientation ?"
                            onChange={(e) =>
                              setFormResponse({
                                ...formResponse,
                                new_room_mate: {
                                  ...formResponse.new_room_mate,
                                  sexual_orientation: e.target.value,
                                },
                              })
                            }
                            inputprops={{ options: ["Straight", "Bisexual", "Gay/Lesbian", "Mixed", "Others"], defaultOption: "Sexual Orientation?" }}
                          />
                        </Col>
                        <Col sm="4" className="form-group">
                          <Field
                            name="language_spoken"
                            component={ReactstrapSelect}
                            type="text"
                            className="form-control"
                            label="Language spoken?"
                            onChange={(e) =>
                              setFormResponse({
                                ...formResponse,
                                new_room_mate: {
                                  ...formResponse.new_room_mate,
                                  language_spoken: e.target.value,
                                },
                              })
                            }
                            inputprops={{ options: ["English", "Spanish", "German", "Portugese", "Russian", "Arabic"], defaultOption: "Language spoken? " }}
                          />
                        </Col>
                        <Col sm="4" className="form-group">
                          <Field
                            name="nationality"
                            component={ReactstrapSelect}
                            type="text"
                            className="form-control"
                            label="Nationality?"
                            onChange={(e) =>
                              setFormResponse({
                                ...formResponse,
                                new_room_mate: {
                                  ...formResponse.new_room_mate,
                                  nationality: e.target.value,
                                },
                              })
                            }
                            inputprops={{ options: ["Nigeria", "Mixed", "Ghana", "South Africa", "Kenya", "Ireland", "UK"], defaultOption: "Nationality? " }}
                          />
                        </Col>          
              <div className="next-btn d-flex col-sm-12">
                <Button type="button" className="btn btn-dashed prev1 btn-pill" onClick={() => setActive((prev) => prev - 1)}>
                  <i className="fas fa-arrow-left me-2"></i> Previous
                </Button>
                <Button type="submit" className="btn btn-gradient next2 btn-pill">
                  Next <i className="fas fa-arrow-right ms-2"></i>
                </Button>
              </div>
            </Row>
          </div>
        </Form>
      )}
    />
  );
};

export default Step2;
