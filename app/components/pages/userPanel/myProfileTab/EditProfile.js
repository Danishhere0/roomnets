import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Button, Col, Form, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader, Row } from "reactstrap";

const EditProfile = ({ toggle, setModal, profileDetail, setProfileDetail }) => {
  const [inputs, setInputs] = useState({ ...profileDetail });

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  /*const handleSubmit = (event) => {
    event.preventDefault();
    setProfileDetail((prev) => ({ ...prev, ...inputs }));
    setModal(false);
  };*/

  const router = useRouter();
  const [isModal, setIsModal] = useState(false);
  const notify = () => toast("Your form details submitted successfully.", { type: "success", position: "top-right" });
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const handleSubmit = async () => {
    event.preventDefault();
    await axios
      .post(`${process.env.API_URL}/updateProfile`, inputs, config)
      .then((response) => {
        //router.push(`${process.env.WEB_URL}/login`)
        console.log(response.data);
        notify();
      })
      .catch((err) => {
        if (err.response.data) {
          alert(err.response.data.message);
        }
        console.log(err);
    });
    setProfileDetail((prev) => ({ ...prev, ...inputs }));
    setModal(false);
  };

  return (
    <div className="modal fade edit-profile-modal" id="edit-profile">
      <div className="modal-dialog modal-lg modal-dialog-centered">
        <Modal className="modal-content" isOpen={toggle} size="lg">
          <ModalHeader className="modal-header">
            <p className="modal-title">Edit Profile</p>
            <Button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={() => setModal(false)}>
              <span aria-hidden="true">×</span>
            </Button>
          </ModalHeader>
          <ModalBody className="modal-body">
            <Form id="modal-form" onSubmit={handleSubmit}>
              <Row className=" gx-3">
                <Col md="6" className="form-group">
                  <Label htmlFor="first">First Name</Label>
                  <Input name="firstName" type="text" className="form-control" id="firstName" placeholder="First Name" value={inputs.firstName || ""} onChange={handleChange} />
                </Col>
                <Col md="6" className="form-group col-md-6">
                  <Label htmlFor="last">Last Name</Label>
                  <Input name="lastName" type="text" className="form-control" id="lastName" placeholder="Last Name" value={inputs.lastName || ""} onChange={handleChange} />
                </Col>
                <div className="form-group col-md-6">
                  <Label htmlFor="gender">Gender</Label>
                  <select name="sex" id="sex" className="form-control" value={inputs.sex} onChange={handleChange}>
                    <option>Select Option</option>
                    <option value="female">Female</option>
                    <option value="male">Male</option>
                  </select>
                </div>
                <div className="form-group col-md-6">
                  <Label>Birthday</Label>
                  <Input name="dateOfBirh" type="date" className="form-control" placeholder="18 april" id="datepicker" value={new Date(inputs?.dateOfBirh) || ""} onChange={handleChange} />
                </div>
                <div className="form-group col-12">
                  <Label htmlFor="inputAddress">Address</Label>
                  <Input name="address" type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" value={inputs.address || ""} onChange={handleChange} />
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="inputCity">City</label>
                  <input name="city_name" type="text" className="form-control" id="inputCity" value={inputs.city_name || ""} onChange={handleChange} />
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="inputState">State</label>
                  <select name="state_name" id="inputState" className="form-control" value={inputs.state_name} onChange={handleChange}>
                    <option>IL</option>
                    <option>PL</option>
                    <option>GL</option>
                  </select>
                </div>
              </Row>
            </Form>
          </ModalBody>
          <ModalFooter className="modal-footer">
            <Button
              type="button"
              className="btn btn-dashed btn-pill"
              data-bs-dismiss="modal"
              onClick={() => {
                setModal(false);
              }}>
              Cancel
            </Button>
            <Button type="submit" className="btn btn-gradient btn-pill" data-bs-dismiss="modal" form="modal-form">
              Save changes
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    </div>
  );
};

export default EditProfile;
