/**
 * It's a React component that renders a form with a submit button
 * @returns A function that returns a div.
 */
import React, { useState } from "react";
import { Button, Form, FormGroup, Input, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";

const Exploration = () => {
  const [inputs, setInputs] = useState({ firstName: "", lastName: "", email: "", mobileNumber: "", message: "" });
  const [modal, setModal] = useState(false);
  const {
    firstName,
    email,
    message,
    lastName,
 //   company,
    mobileNumber,
    subject,
  } = inputs;

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };
  const handleSubmit = async (event) => {
      event.preventDefault();
      setLoading(true);
      await axios
        .post(`${process.env.API_URL}/contactForm`, inputs)
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
    setModal(true);
  };

  return (
    <div className="advance-card">
      <h6>Request exploration</h6>
      <div className="category-property">
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Input type="text" className="form-control" placeholder="Your First Name" required name="firstName" value={inputs.firstName} onChange={handleChange} />
          </FormGroup>
          <FormGroup>
            <Input type="text" className="form-control" placeholder="Your Last Name" required name="lastName" value={inputs.lastName} onChange={handleChange} />
          </FormGroup>
          <FormGroup className="form-group">
            <Input type="email" className="form-control" placeholder="Email Address" required name="email" value={inputs.email} onChange={handleChange} />
          </FormGroup>
          <FormGroup className="form-group">
            <Input
              placeholder="phone number"
              className="form-control"
              name="mobileNumber"
              required
              value={inputs.mobileNumber || ""}
              onChange={(e) => {
                e.target.value.length <= 10 && handleChange(e);
              }}
            />
          </FormGroup>
          <FormGroup>
            <Input type="textarea" placeholder="Message" className="form-control" rows="3" name="message" value={inputs.message} onChange={handleChange}></Input>
          </FormGroup>
          <Button type="submit" className="btn btn-gradient btn-block btn-pill">
            Submit Request
          </Button>
        </Form>
      </div>
      <Modal isOpen={modal} toggle={() => setModal(!modal)}>
        <ModalHeader>
          <strong>Request exploration</strong>
        </ModalHeader>
        <ModalBody>
          <p className="m-1">Name : {inputs.name}</p>
          <br></br>
          <p className="m-1">Email Address : {inputs.email}</p>
          <br></br>
          <p className="m-1">Mobile Number : {inputs.mobileNumber}</p>
          <br></br>
          <p className="m-1">Mobile Number : {inputs.message}</p>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={() => setModal(false)}>
            Done
          </Button>
          <Button color="secondary" onClick={() => setModal(false)}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default Exploration;
