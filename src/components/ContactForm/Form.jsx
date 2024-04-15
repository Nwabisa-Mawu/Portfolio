import React from "react";
import { useState } from "react";
import "../Projects/Projects"

// component imports
import { Container, Col, Row, Form, Button } from "react-bootstrap";

const ContactForm = () => {
	// TODO - clear form after refreshor submit
  return (
    <Container id="contact">
		<h2 className="heading">Contact <span>Me</span></h2>
        <Row>
					<Col>
							
					</Col>

          <Col>
            <Form action="https://formsubmit.co/nwabisa.mawu@gmail.com" method="POST">
							<Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
								<Form.Label>Email address</Form.Label>
								<Form.Control type="email" placeholder="name@example.com" />
							</Form.Group>
							<Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
								<Form.Label>Example textarea</Form.Label>
								<Form.Control as="textarea" rows={3} />
							</Form.Group>
							<Button as="input" type="submit" value="Submit" />
						</Form>
          </Col>
        </Row>
    </Container>
  );
};

export default ContactForm;