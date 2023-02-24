import { Field, Form, Formik } from "formik";
import Link from "next/link";
import React, { useState } from "react";
import { Lock, Mail, Phone, User } from "react-feather";
import { Button, Col, Row } from "reactstrap";
import * as Yup from "yup";
import NoSsr from "../../../../utils/NoSsr";
import { ReactstrapInput, ReactstrapSelect } from "../../../../utils/ReactstrapInputsValidation";

const Step1 = ({ setActive, setData }) => {
  const [showPass, setShowPass] = useState(false);
  const [errors, setErrors] = React.useState([]);
  const [formResponse, setFormResponse] = React.useState({
    no_rooms: "",
    no_toilets: "",
    Building_type: "",
    rent: "",
    currency: "",
    country:"",
    rent_method: "",
    no_occupants: "",
    email: "",
    i_am: "",
    post_code: "",
    building_location: {
      lat: "",
      lng: "",
      place_id: "",
      address: "",
    },
    street_name: "",
    rooms_avail_date: "",
    living_rooms: "",
    furnished_rooms: "",
    broker_agent_fee: "",
    rooms_size: "",
    minimum_stay: "",
    maximum_stay: "",
  });

  return (
    <NoSsr>
      <Formik
        /*initialValues={{
          add_type: "",
          title: "",
          Building_type: "",
          currency: "",
          rent_method: "",
          no_toilets: "",
          no_baths: "",
          furnished_rooms: "",
          
        }}
        validationSchema={Yup.object().shape({
          add_type: Yup.string().required(),
          title: Yup.string().required(),
          Building_type: Yup.string().required(),
          currency: Yup.string().required(),
          rent_method: Yup.string().required(),
          no_toilets: Yup.string().required(),
          no_baths: Yup.string().required(),
          furnished_rooms: Yup.string().required(),
        })}*/
        onSubmit={(values) => {
          setData(values);
          setActive(2);
        }}
        render={() => (
          <Form>
            <div className="wizard-step-1 ">
              <div className="title-3 text-start">
                <h2>Get started</h2>
              </div>
              <Row>
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
              <Col sm="4" className="form-group">
                        <label>Ad type</label>
                         <Field as="select" className="form-control" required name="add_type" id="add_type" onChange={(e) =>
                              setFormResponse({
                                ...formResponse,
                                add_type: e.target.value,
                              })
                            }>
                          <option value="">Ad Type</option>
                          <option value="Premium">Premium</option>
                          <option value="Free">Free</option>
                         </Field>
                        </Col>
                        <Col sm="4" className="form-group">
                          <Field name="title" onChange={(e) =>
                              setFormResponse({
                                ...formResponse,
                                title: e.target.value,
                              })
                            } component={ReactstrapInput} type="text" className="form-control" required placeholder="Listing Title" label="Listing Title" />
                        </Col>
                        <Col sm="4" className="form-group">
                          <Field
                            name="Building_type" required
                            id="Building_type"
                            component={ReactstrapSelect}
                            type="text"
                            className="form-control"
                            label="Building/Apartment Type" onChange={(e) =>
                              setFormResponse({
                                ...formResponse,
                                Building_type: e.target.value,
                              })
                            }
                            inputprops={{ options: ["Apartment", "Villa", "Condominium", "Shared Apartment", "Duplex", "Triplex", "Townhouse", "House", "Low-rise", "Mid-rise", "High-rise", "Studio", "Loft", "Micro-apartment"], defaultOption: "Apartment Type" }}
                          />
                        </Col>
                        <Col sm="4" className="form-group">
                          <Field required
                            name="currency" id="currency"
                            component={ReactstrapSelect}
                            type="text"
                            className="form-control"
                            label="Currency"
                            onChange={(e) =>
                              setFormResponse({
                                ...formResponse,
                                currency: e.target.value,
                              })
                            }
                            inputprops={{ options: ["Dollars", "Euros", "Pounds", "Cedis", "Naira", "Rand", "Ugandan Shilling"], defaultOption: "Currency" }}
                          />
                        </Col>
                        <Col sm="4" className="form-group">
                          <Field name="rent" type="Number" className="form-control" required component={ReactstrapInput} label="Property Price" placeholder="2800" />
                        </Col>
                        <Col sm="4" className="form-group">
                          <Field
                            name="rent_method" required
                            id="rent_method"
                            component={ReactstrapSelect}
                            type="text"
                            className="form-control"
                            label="Rent Method"
                            onChange={(e) =>
                              setFormResponse({
                                ...formResponse,
                                rent_method: e.target.value,
                              })
                            }
                            inputprops={{ options: ["Per Week", "Per Month", "Per Annum", "Others"], defaultOption: "Rent Method" }}
                          />
                        </Col>
                        <Col sm="4" className="form-group">
                          <Field name="no_occupants" required id="no_occupants" type="Number" className="form-control" component={ReactstrapInput} label="Number Of Present Occupant" placeholder="" />
                        </Col>
                        <Col sm="4" className="form-group">
                          <Field required
                            name="no_rooms"
                            id="no_rooms"
                            component={ReactstrapSelect}
                            type="Number"
                            className="form-control"
                            label="No of Rooms"
                            onChange={(e) =>
                              setFormResponse({
                                ...formResponse,
                                no_rooms: e.target.value,
                              })
                            }
                            inputprops={{ options: ["1", "2", "3", "4", "5", "6","7", "8", "Others"], defaultOption: "Max Rooms" }}
                          />
                        </Col>
                        <Col sm="4" className="form-group">
                          <Field required
                            name="living_rooms"
                            id="living_rooms"
                            component={ReactstrapSelect}
                            type="text"
                            className="form-control"
                            label="Living Rooms"
                            onChange={(e) =>
                              setFormResponse({
                                ...formResponse,
                                living_rooms: e.target.value,
                              })
                            }
                            inputprops={{ options: ["Yes", "No"], defaultOption: "Living Rooms" }}
                          />
                        </Col>
                        <Col sm="4" className="form-group">
                          <Field required
                            name="furnished_rooms"
                            component={ReactstrapSelect}
                            type="text"
                            className="form-control"
                            label="Furnished Rooms"
                            onChange={(e) =>
                              setFormResponse({
                                ...formResponse,
                                furnished_rooms: e.target.value,
                              })
                            }
                            inputprops={{ options: ["Yes", "No"], defaultOption: "Furnished Rooms" }}
                          />
                        </Col>
                        <Col sm="4" className="form-group">
                          <Field required
                            name="no_baths"
                            component={ReactstrapSelect}
                            type="text"
                            className="form-control"
                            label="Bathrooms Number"
                            onChange={(e) =>
                              setFormResponse({
                                ...formResponse,
                                no_baths: e.target.value,
                              })
                            }
                            inputprops={{ options: ["1", "2", "3", "4", "5", "6", "Others"], defaultOption: "Bathroom No" }}
                          />
                        </Col>
                        <Col sm="4" className="form-group">
                          <Field required
                            name="no_toilets"
                            component={ReactstrapSelect}
                            type="text"
                            className="form-control"
                            label="Toilets"
                            onChange={(e) =>
                              setFormResponse({
                                ...formResponse,
                                no_toilets: e.target.value,
                              })
                            }
                            inputprops={{ options: ["1", "2", "3", "4", "5", "6", "Others"], defaultOption: "Toilets" }}
                          />
                        </Col>
                        <Col sm="4" className="form-group">
                          <Field required
                            name="rooms_size"
                            component={ReactstrapSelect}
                            type="text"
                            className="form-control"
                            label="Rooms Size"
                            onChange={(e) =>
                              setFormResponse({
                                ...formResponse,
                                rooms_size: e.target.value,
                              })
                            }
                            inputprops={{ options: ["Small", "Average", "Big"], defaultOption: "Rooms Size" }}
                          />
                        </Col>
                        <Col sm="4" className="form-group">
                          <Field name="no_occupants" type="Number" className="form-control" component={ReactstrapInput} label="No of Occupants" placeholder="" />
                        </Col>
                        <Col sm="4" className="form-group">
                          <Field
                            name="minimum_stay"
                            component={ReactstrapSelect}
                            type="text"
                            className="form-control"
                            label="Minimum Stay Period"
                            onChange={(e) =>
                              setFormResponse({
                                ...formResponse,
                                minimum_stay: e.target.value,
                              })
                            }
                            inputprops={{ options: ["1 Month", "2 Months", "3 Months","4 Months", "5 Months", "6 Months","7 Months", "8 Months", "9 Months","10 Month", "11 Months", "1 Year", "2 Years", "4 Years & above"], defaultOption: "Minimum Stay Period" }}
                          />
                        </Col>
                        <Col sm="4" className="form-group">
                          <Field
                            name="maximum_stay"
                            id="maximum_stay"
                            component={ReactstrapSelect}
                            type="text"
                            className="form-control"
                            label="Maximum Stay Period"
                            onChange={(e) =>
                              setFormResponse({
                                ...formResponse,
                                maximum_stay: e.target.value,
                              })
                            }
                            inputprops={{ options: ["1 Month", "2 Months", "3 Months","4 Months", "5 Months", "6 Months","7 Months", "8 Months", "9 Months","10 Month", "11 Months", "1 Year", "2 Years", "4 Years & above"], defaultOption: "Maximum Stay Period" }}
                          />
                        </Col>
                        <Col sm="4" className="form-group">
                          <Field
                            name="broker_agent_fee"
                            component={ReactstrapSelect}
                            type="text"
                            className="form-control"
                            label="Agency Fee"
                            onChange={(e) =>
                              setFormResponse({
                                ...formResponse,
                                broker_agent_fee: e.target.value,
                              })
                            }
                            inputprops={{ options: ["Yes", "No"], defaultOption: "Agency Fee" }}
                          />
                        </Col>
                        <Col sm="12" className="form-group">
                          <Field type="text" onChange={(e) =>
                              setFormResponse({
                                ...formResponse,
                                advert_title: e.target.value,
                              })
                            } name="advert_title" id="advert_title" component={ReactstrapInput} className="form-control" label="Advert Title" />
                        </Col>
                        <Col sm="12" className="form-group">
                          <Field type="textarea" onChange={(e) =>
                              setFormResponse({
                                ...formResponse,
                                advert_description: e.target.value,
                              })
                            } name="advert_description" id="advert_description" component={ReactstrapInput} className="form-control" rows={4} label="Description" />
                        </Col>
                        <Col sm="6" className="form-group">
                          <Field type="date" onChange={(e) =>
                              setFormResponse({
                                ...formResponse,
                                ad_start_date: e.target.value,
                              })
                            } name="ad_start_date" id="ad_start_date" component={ReactstrapInput} className="form-control" label="Ad Start Date" />
                        </Col>
                        <Col sm="6" className="form-group">
                          <Field type="date" onChange={(e) =>
                              setFormResponse({
                                ...formResponse,
                                ad_end_date: e.target.value,
                              })
                            } name="ad_end_date" id="ad_end_date" component={ReactstrapInput} className="form-control" label="Ad End Date" />
                        </Col>
                        <Col sm="6" className="form-group">
                          <Field type="date" onChange={(e) =>
                              setFormResponse({
                                ...formResponse,
                                rooms_avail_date: e.target.value,
                              })
                            } name="rooms_avail_date" id="rooms_avail_date" component={ReactstrapInput} className="form-control" label="Room Available Date" />
                        </Col>
                <Col sm="12" className="next-btn text-end ">
                  <Button type="submit" className="btn btn-gradient next1 btn-pill">
                    Next <i className="fas fa-arrow-right ms-2"></i>
                  </Button>
                </Col>
              </Row>
            </div>
          </Form>
        )}
      />
    </NoSsr>
  );
};

export default Step1;
