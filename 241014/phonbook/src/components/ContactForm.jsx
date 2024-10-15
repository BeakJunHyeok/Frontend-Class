import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Form, Button } from "react-bootstrap";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const dispatch = useDispatch();

  const addContact = (e) => {
    e.preventDefault();
    dispatch({ type: "ADD_CONTACT", payload: { name, phoneNumber } });
  };
  return (
    <Form onSubmit={addContact}>
      <Form.Group className="mb-3" controlId="formName">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Name"
          onChange={(e) => setName(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formContact">
        <Form.Label>Phone Nuumber</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Number"
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Creator
      </Button>
    </Form>
  );
};

export default ContactForm;
