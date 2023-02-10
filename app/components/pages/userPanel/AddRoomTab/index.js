import { Field, Form, Formik } from "formik";
import React from "react";
import Dropzone from "react-dropzone-uploader";
import { Button, Col, Label, Row } from "reactstrap";
import * as Yup from "yup";
import NoSsr from "../../../../utils/NoSsr";
import { ReactstrapInput, ReactstrapSelect } from "../../../../utils/ReactstrapInputsValidation";
import AutoCompletePlaces from "../../../elements/AutoCompletePlaces";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

const AddRoomTab = () => {
  const [ImageState, setImageState] = React.useState([]);
  const [errors, setErrors] = React.useState([]);
  const country = useSelector((state) => state.countryReducer.country);
  const postRoomReducer = useSelector((state) => state.postRoomReducer);
  const { currentUser } = useSelector((state) => state.userReducers);
  const token = currentUser && currentUser.token;

  const [formResponse, setFormResponse] = React.useState({
    no_rooms: "",
    no_toilets: "",
    Building_type: "",
    rent: "",
    currency:
      country == "KE"
        ? "KES"
        : country == "US"
        ? "$"
        : country == "NG"
        ? "NGN"
        : country == "IE"
        ? "€"
        : country == "GB"
        ? "£"
        : country == "GH"
        ? "₵"
        : country == "ZA"
        ? "ZAR"
        : "",

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
    amenities_swim: false,
    amenities_internet: false,
    amenities_private_toilets: false,
    amenities_play_ground: false,
    amenities_parking_space: false,
    amenities_entry_disabled: false,
    amenities_balcony: false,
    amenities_others: false,
    existing_room_mates: {
      smoker: "",
      no_males: 0,
      no_females: 0,
      pets: "",
      language_spoken: "",
      sexual_orientation: "",
      nationality: "",
    },
    new_room_mate: {
      smoker: "",
      language_spoken: "",
      sexual_orientation: "",
      nationality: "",
      occupation: "",
      pets: "",
      mimimum_age: "",
      maximum_age: "",
      couples_welcomed: "",
    },
  });
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

  const validatePage = async () => {
    const { advert_description, advert_title } = formResponse;

    const newError = new Array();
    /*if (!advert_title) {
      newError.push("Advert title can not be blank");
    }

    if (!advert_description) {
      newError.push("Advert body can not be blank");
    }
    if (ImageState.length < 1) {
      newError.push("You must select at least one image or more");
    }*/

    return newError;
  };

  const handleNext = async () => {
    console.log("the token: " + currentUser)
    await validatePage().then(async (res) => {
      if (res.length > 0) {
        setErrors(res);
        window.scrollTo(0, 150);
      } else {
        const Allresponse = { ...postRoomReducer, ...formResponse };
        var formData = new FormData();
        formData.append("userData", JSON.stringify(Allresponse));
        for (let x = 0; x < ImageState.length; x++) {
          formData.append("file", ImageState[x]["Uri"]);
        }
        // dispatch(SETPOSTROOMPROCESS(formResponse));
        //setLoading(true);
        const userToken = localStorage.getItem('userToken')
        ? localStorage.getItem('userToken')
        : null
        await axios({
          url: `${process.env.API_URL}/PostAddRooms`,
          method: "POST",
          data: formData,
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: userToken,
          },
        })
          .then(function (response) {
            // console.log(response.data);
            setLoading(false);
            if (response.data.status) {
              if(add_type==="PREMIUM")
              {
                history.replace(`/Upgrade-room/${response.data.Data._id}`);
              }
             else{
                history.replace("/process-rooms-success");
             }
            }
          })
          .catch((err) => {
            console.log(err)
            //setLoading(false);
            alert("An error occured");
          });
      }
    });
  };

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
  // const getUploadParams = ({ meta }) => {
  //   return { url: "https://httpbin.org/post" };
  // };
  // const handleChangeStatus = ({ meta, file }, status) => {};

  return (
    <NoSsr>
      <Formik
        initialValues={{
          
        }}
        validationSchema={Yup.object().shape({
        })}
        onSubmit={(values) => {
          console.log(values);
          alert("Your data is submitted check console");
        }}
        render={() => (
          <Form>
            <div className="dashboard-content">
              <div className="create-tab" id="create-property">
                <div className="property-wizard common-card">
                  <div className="common-header">
                    <h5>Add New Room</h5>
                  </div>
                  <div className="create-property-form">
                    <div className="form-inputs">
                      <h6>Basic information</h6>
                      <Row className="gx-2 gx-sm-3">
                        <div className="row justify-content-center">
                          <div className="col-lg-7 text-left">
                            {errors.length > 0
                              ? errors.map((xxx) => (
                                  <p className="error-card alert-danger">
                                    
                                    {xxx}
                                  </p>
                                  // <Alert severity="error">{xxx}</Alert>
                                ))
                              : null}
                          </div>
                        </div>
                        <Col sm="4" className="form-group">
                          <Field name="title" onChange={(e) =>
                              setFormResponse({
                                ...formResponse,
                                title: e.target.value,
                              })
                            } component={ReactstrapInput} type="text" className="form-control" placeholder="Listing Title" label="Listing Title" />
                        </Col>
                        {/* <div className="form-group col-sm-4"> 
                          <Field
                            name="propertyStatus"
                            component={ReactstrapSelect}
                            type="text"
                            className="form-control"
                            label="Property Status"
                            inputprops={{ options: ["Rent Apartment", "Rent Room"], defaultOption: "Property Status" }}
                          />
                        </div>*/}
                        <Col sm="4" className="form-group">
                          <Field
                            name="Building_type"
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
                          <Field
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
                            inputprops={{ options: ["Dollars", "Euros", "Pounds", "Cedis", "Naira", "Rand", "Ugandan Shilling"], defaultOption: "Max Rooms" }}
                          />
                        </Col>
                        <Col sm="4" className="form-group">
                          <Field name="rent" type="Number" className="form-control" component={ReactstrapInput} label="Property Price" placeholder="2800" />
                        </Col>
                        <Col sm="4" className="form-group">
                          <Field
                            name="rent_method"
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
                          <Field name="no_occupants" id="no_occupants" type="Number" className="form-control" component={ReactstrapInput} label="Number Of Present Occupant" placeholder="" />
                        </Col>
                        <Col sm="4" className="form-group">
                          <Field
                            name="no_rooms"
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
                          <Field
                            name="living_rooms"
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
                          <Field
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
                          <Field
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
                          <Field
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
                          <Field
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
                      </Row>
                    </div>
                    <div className="form-inputs">
                      <h6>Address</h6>
                      <Row className=" gx-3">
                        <Col sm="6" className="form-group">
                            <label>
                              Building Location <sup>* </sup>
                              <small>(or nerarest bus stop)</small>
                            </label>
                            <AutoCompletePlaces
                            className="form-control bg-gray"
                            handleplaces={(places) => handleplaces(places)}
                            onChange={(e) =>
                              setFormResponse({
                                ...formResponse,
                                place_id: e.target.value,
                              })
                            }
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
                            inputprops={{ options: ["Landlord", "Live Out Landlord", "Current Tenant", "Real Estate Agent", "Kenya", "Ireland", "South Africa"], defaultOption: "Country" }}
                          />
                        </Col>
                        <Col sm="4" className="form-group">
                          <Field
                            name="country"
                            component={ReactstrapSelect}
                            type="text"
                            className="form-control"
                            label="Country of Ad"
                            onChange={(e) =>
                              setFormResponse({
                                ...formResponse,
                                country: e.target.value,
                              })
                            }
                            inputprops={{ options: ["UK", "USA", "Nigeria", "Ghana", "Kenya", "Ireland", "South Africa"], defaultOption: "Country of Ad" }}
                          />
                        </Col>
                      </Row>
                    </div>
                    <div className="form-inputs">
                      <h6>Gallery</h6>
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
                      </Row>
                    </div>
                    <div className="form-inputs">
                      <h6>Existing Room mate specifics</h6>
                      <Row>
                        <Col sm="4" className="form-group">
                          <Field name="no_males" type="number" className="form-control"
                          onChange={(e) =>
                            setFormResponse({
                              ...formResponse,
                              existing_room_mate: {
                                ...formResponse.new_room_mate,
                                no_males: e.target.value,
                              },
                            })
                          } component={ReactstrapInput} label="Number of Males Present" placeholder="Number of Males Present" />
                        </Col>
                        <Col sm="4" className="form-group">
                          <Field name="no_females" type="number" onChange={(e) =>
                            setFormResponse({
                              ...formResponse,
                              existing_room_mate: {
                                ...formResponse.new_room_mate,
                                no_females: e.target.value,
                              },
                            })
                          } className="form-control" component={ReactstrapInput} label="Number of Females Present" placeholder="Number of Females Present" />
                        </Col>
                        <Col sm="4" className="form-group">
                          <Field
                            name="pets"
                            component={ReactstrapSelect}
                            type="text"
                            className="form-control"
                            label="Pets?"
                            onChange={(e) =>
                              setFormResponse({
                                ...formResponse,
                                existing_room_mate: {
                                  ...formResponse.new_room_mate,
                                  pets: e.target.value,
                                },
                              })
                            }
                            inputprops={{ options: ["Yes", "No"], defaultOption: "Pets?" }}
                          />
                        </Col>
                        <Col sm="4" className="form-group">
                          <Field
                            name="smokers"
                            component={ReactstrapSelect}
                            type="text"
                            className="form-control"
                            label="Smokers?"
                            onChange={(e) =>
                              setFormResponse({
                                ...formResponse,
                                existing_room_mate: {
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
                                existing_room_mate: {
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
                                existing_room_mate: {
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
                                existing_room_mate: {
                                  ...formResponse.new_room_mate,
                                  nationality: e.target.value,
                                },
                              })
                            }
                            inputprops={{ options: ["Nigeria", "Mixed", "Ghana", "South Africa", "Kenya", "Ireland", "UK"], defaultOption: "Nationality? " }}
                          />
                        </Col>
                      </Row>
                    </div>
                    <div className="form-inputs">
                      <h6>New Room mate Requirements</h6>
                      <Row>
                       {/*} <Col sm="4" className="form-group">
                          <Field name="no_males" type="number" className="form-control" component={ReactstrapInput} onChange={(e) =>
                              setFormResponse({
                                ...formResponse,
                                new_room_mate: {
                                  ...formResponse.new_room_mate,
                                  no_males: e.target.value,
                                },
                              })
                            } label="Number of Males Present" placeholder="Number of Males Present" />
                        </Col>
                        <Col sm="4" className="form-group">
                          <Field name="no_female" type="number" className="form-control" component={ReactstrapInput} onChange={(e) =>
                              setFormResponse({
                                ...formResponse,
                                new_room_mate: {
                                  ...formResponse.new_room_mate,
                                  no_females: e.target.value,
                                },
                              })
                            } label="Number of Females Present" placeholder="Number of Females Present" />
                          </Col>*/}
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
                      </Row>
                    </div>
                    <div className="text-end">
                      <Button onClick={handleNext} type="submit" className="btn btn-gradient color-2 btn-pill">
                        Add Room
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Form>
        )}
      />
    </NoSsr>
  );
};

export default AddRoomTab;
