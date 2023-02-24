import { Field, Form, Formik } from "formik";
import React from "react";
import { Map, MapPin, Phone } from "react-feather";
import * as Yup from "yup";
import { useSelector } from "react-redux";
import { Button, Col, Row } from "reactstrap";
import AutoCompletePlaces from "../../../elements/AutoCompletePlaces";
import ReactstrapFormikInput from "../../../../utils/ReactstrapInputsValidation/ReactstrapFormikInput";
import { ReactstrapInput, ReactstrapSelect } from "../../../../utils/ReactstrapInputsValidation";

const Step2 = ({ setActive, setData }) => {
  const country = useSelector((state) => state.countryReducer.country);
  const [errors, setErrors] = React.useState([]);
  const handleplaces = async (place) => {
    const place_id = place.place_id;
    const lng = await place.geometry.location.lng();
    const lat = await place.geometry.location.lat();
    const address = place.formatted_address;
    // return await handleToClick(lng, lat, address);
    console.log(address);
    setFormResponse({
      ...formResponse,
      building_location: {
        lat: lat,
        lng: lng,
        place_id: place_id,
        address: address,
      },
    });
   // console.log("building_location"+building_location);
  };
  const [formResponse, setFormResponse] = React.useState({
    i_am: "",
    post_code: "",
    building_location: {
      lat: "",
      lng: "",
      place_id: "",
      address: "",
    },
    street_name: "",
    country: "",
  });

  return (
    <Formik
      initialValues={{
        i_am: "",
        city_name: "",
        state_name: "",
        country: "",
        pin_code: "",
      }}
      validationSchema={Yup.object().shape({
        i_am: Yup.string().required(),
        street_name: Yup.string().required(),
        country: Yup.string().required(),
        post_code: Yup.number()
          .test("len", "Must be at least 5 characters", (val) => String(val) && String(val).length >= 5)
          .required(),
      })}
      onSubmit={(values) => {
        setData((prev) => ({ ...prev, ...values }));
        setActive(3);
      }}
      render={() => (
        <Form>
          <div className="wizard-step-2">
            <div className="title-3 text-start">
              <h2>Add your Location/Address</h2>
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
            <Row className="row" id="needs-validation1" noValidate="">
              <Col sm="6" className="form-group">
                <label>
                  Building Location <sup>* </sup>
                  <small>(or nearest bus stop)</small>
                </label>
                <AutoCompletePlaces
                className="form-control bg-gray"
                handleplaces={(places) => handleplaces(places)}
                />
              </Col>
              <Col sm="6" className="form-group">
                <Field type="text" onChange={(e) =>
                    setFormResponse({
                      ...formResponse,
                      street_name: e.target.value,
                    })
                  } name="street_name" component={ReactstrapInput} className="form-control" label="Address" placeholder="Address of your property" />
              </Col>
              <Col sm="6" className="form-group">
                <Field type="text" onChange={(e) =>
                    setFormResponse({
                      ...formResponse,
                      post_code: e.target.value,
                    })
                  } name="post_code" id="post_code" component={ReactstrapInput} className="form-control" label="Zip/Postal code" placeholder="39702" />
              </Col>
              <Col sm="4" className="form-group">
                <Field
                  name="i_am"
                  id="i_am"
                  component={ReactstrapSelect}
                  type="text"
                  className="form-control"
                  label="Who I am?"
                  onChange={(e) =>
                    setFormResponse({
                      ...formResponse,
                      i_am: e.target.value,
                    })
                  }
                  inputprops={{ options: ["Landlord", "Live Out Landlord", "Current Tenant", "Real Estate Agent"], defaultOption: "Who I am" }}
                />
              </Col>
              <Col sm="4" className="form-group">
                <Field as="select" className="form-control" name="country" id="country" onChange={(e) =>
                    setFormResponse({
                      ...formResponse,
                      country: e.target.value,
                    })
                  }>
                  <option value="">Country of Ad</option>
                  <option value="IE">Ireland</option>
                  <option value="GH">Ghana</option>
                  <option value="KE">Kenya</option>
                  <option value="NG">Nigeria</option>
                  <option value="US">United States of America</option>
                  <option value="GB">United Kingdom</option>
                </Field>
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
