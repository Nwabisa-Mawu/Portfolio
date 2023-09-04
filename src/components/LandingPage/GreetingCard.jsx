// eslint-disable-next-line no-unused-vars
import React from "react";
import { Container, Button } from "react-bootstrap";

const GreetingCard = () => {
	return (
		<Container className="w-100 rounded-7 shadow-5 pt-5">
			<Container className="pb-2 text-dark text-muted fw-bold">
				<h2>Nwabisa Mawu</h2>
				<h1>Front-End Developer</h1>
			</Container>

			<Container className="d-flex pb-2 justify-content-center">
				<a href="#projects">
					<Button className="bg-info">
						See my projects<i>
							<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-down-short" viewBox="0 0 16 16">
								<path fillRule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z" />
							</svg>
						</i>
					</Button>
				</a>
			</Container>
		</Container>
	)
};

export default GreetingCard;