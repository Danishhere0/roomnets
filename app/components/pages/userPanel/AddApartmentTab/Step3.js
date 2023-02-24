import { Field, Form, Formik } from "formik";
import React from "react";
import { Map, MapPin, Phone } from "react-feather";
import { Button, Row, Col, Label } from "reactstrap";
import * as Yup from "yup";
import Dropzone from "react-dropzone-uploader";
import { useSelector } from "react-redux";
import ReactstrapFormikInput from "../../../../utils/ReactstrapInputsValidation/ReactstrapFormikInput";
import { ReactstrapInput, ReactstrapSelect } from "../../../../utils/ReactstrapInputsValidation";

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
    no_kitchen: "",
    amenities_swim: false,
    amenities_internet: false,
    amenities_private_toilets: false,
    amenities_play_ground: false,
    amenities_parking_space: false,
    amenities_entry_disabled: false,
    amenities_balcony: false,
    amenities_others: false,
  });

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
        setActive(4);
      }}
      render={() => (
        <Form>
          <div className="wizard-step-2">
            <div className="title-3 text-start">
              <h2>Gallery</h2>
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
            <div className="dropzone" id="multiFileUpload">
              <div className="dz-message needsclick">
                <i className="fas fa-cloud-upload-alt" />
                <Dropzone name="file" id="file"
                  // getUploadParams={getUploadParams}
                  // onChangeStatus={handleChangeStatus}
                  maxFiles={10}
                  multiple={true}
                  canCancel={false}
                  inputContent="Drop A File"
                  styles={{
                    dropzoneActive: { borderColor: "green" },
                  }}
                />
                <h6>Drop files here or click to upload.</h6>
                <span className="note needsclick">
                  (This is just a demo dropzone. Selected files are <strong>not</strong> actually uploaded.)
                </span>
              </div>
            </div>
            
            <Row className="gx-3">
            <Col sm="4" className="form-group">
              <Field name="no_kitchen" id="no_kitchen" type="Number" className="form-control" component={ReactstrapInput} onChange={(e) =>
                              setFormResponse({
                                ...formResponse,
                                no_kitchen: e.target.value,
                              })
                            } label="Number Of Kitchen" placeholder="" />
            </Col>
              <Col sm="12" className="form-group">
                <Field name="mp4Link" component={ReactstrapInput} type="text" className="form-control" placeholder="mp4 video link" label="Video (mp4)" />
              </Col>
              <Col sm="12" className="form-group">
                <Label>Additional features</Label>
                <h2>Amenities (check all that applies)</h2>
                <div className="feature-checkbox">
                  <Label htmlFor="amenities_private_toilets">
                    <Field value="1" className="checkbox_animated color-2" name="amenities_private_toilets" id="amenities_private_toilets" type="checkbox" /> Emergency Exit
                  </Label>
                  <Label htmlFor="amenities_swim">
                    <Field name="amenities_swim" onChange={(e) =>
                      setFormResponse({
                        ...formResponse,
                        amenities_swim: e.target.value,
                      })
                    } value="1" className="checkbox_animated color-2" id="amenities_swim" type="checkbox" /> Swimming Pool
                  </Label>
                  <Label htmlFor="amenities_internet">
                    <Field name="amenities_internet" onChange={(e) =>
                      setFormResponse({
                        ...formResponse,
                        amenities_internet: e.target.value,
                      })
                    } value="1" className="checkbox_animated color-2" id="amenities_internet" type="checkbox" /> Free Wi-Fi/Internet
                  </Label>
                  <Label htmlFor="amenities_play_ground">
                    <Field name="amenities_play_ground" onChange={(e) =>
                      setFormResponse({
                        ...formResponse,
                        amenities_play_ground: e.target.value,
                      })
                    } value="1" className="checkbox_animated color-2" id="amenities_play_ground" type="checkbox" /> Playground
                  </Label>
                  <Label htmlFor="amenities_parking_space">
                    <Field name="amenities_parking_space" onChange={(e) =>
                      setFormResponse({
                        ...formResponse,
                        amenities_parking_space: e.target.value,
                      })
                    } value="1" className="checkbox_animated color-2" id="amenities_parking_space" type="checkbox" /> Free Parking In The Area
                  </Label>
                  <Label htmlFor="amenities_entry_disabled">
                    <Field name="amenities_entry_disabled" onChange={(e) =>
                      setFormResponse({
                        ...formResponse,
                        amenities_entry_disabled: e.target.value,
                      })
                    } value="1" className="checkbox_animated color-2" id="amenities_entry_disabled" type="checkbox" /> Entry Disabled
                  </Label>
                  <Label htmlFor="amenities_balcony">
                    <Field name="amenities_balcony" value="1" onChange={(e) =>
                      setFormResponse({
                        ...formResponse,
                        amenities_balcony: e.target.value,
                      })
                    } className="checkbox_animated color-2" id="amenities_balcony" type="checkbox" /> Balcony
                  </Label>
                  <Label htmlFor="amenities_others">
                    <Field name="amenities_others" value="1"  onChange={(e) =>
                      setFormResponse({
                        ...formResponse,
                        amenities_others: e.target.value,
                      })
                    } className="checkbox_animated color-2" id="amenities_others" type="checkbox" /> Others
                  </Label>
                </div>
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
