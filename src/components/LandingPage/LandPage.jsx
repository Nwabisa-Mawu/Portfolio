// eslint-disable-next-line no-unused-vars
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import About from "./AboutCard";
import GreetingCard from "./GreetingCard";
import "../components.css";

const LandPage = () => {
	return (
		<Container className="mt-5 page-structure" id="home">
			<Row className="gx-0 align-items-center">
				{/* Greetign column */}
				<Col lg={6} className="mb-5 mb-lg-0  me-lg-n5 rounded bg-light">
					<GreetingCard />
				</Col>

				{/* About column */}
				<Col lg={6} className="mb-5 mb-lg-0">
					<About />
				</Col>
			</Row>
		</Container>
	)
};

export default LandPage;