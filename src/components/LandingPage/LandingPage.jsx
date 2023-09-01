// eslint-disable-next-line no-unused-vars
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Hero from "./Hero";
import AboutMe from "./AboutMe";

const LandingPage = () => {
	return (
		<Container fluid className="px-0" id="home">
			<Row className="g-0 d-flex align-items-center">
				{/* Left column */}
				<Col lg={5} className="vh-100 d-flex justify-content-center align-items-center flex-column gap-5">
					<Hero />
				</Col>

				{/* Right column */}
				<Col lg={7} className="vh-100">
					<AboutMe />
				</Col>
			</Row>
		</Container>
	)
};

export default LandingPage;