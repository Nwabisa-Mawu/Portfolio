// eslint-disable-next-line no-unused-vars
import React from "react";
import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Cards from "./Card";
import "../components.css"

/**
This code snippet defines a functional component named `Projects` in a JavaScript React application.
Inside the component, it returns JSX code that represents a section displaying three project cards
using the React Bootstrap components. 
*/
const Projects = () => {
	const [data, setData] = useState(null);

		useEffect(() => {
		fetch("/src/data.json")
			.then(response => response.json())
			.then(data => setData(data))
			.catch(error => console.error(error));
	}, []);

	if (!data) {
		return <div>Loading...</div>
	}

	return (
		<Container className="text-center mt-2 mb-5" id="projects">
			 <h2 className="heading">My <span>Projects</span></h2>
			{/* row of cards/column on small screen */}
			<Row>
				{data.map((item, index) => (
				<Col key={index} className="mb-5">
					<Cards 
						image={item.image}
						altText={item.altText}
						repoLink={item.repoLink}
						webLink={item.webLink}
						title={item.title}
						subtitle={item.subtitle}
						description={item.description}/>
				</Col>
				))}
			</Row>

		</Container>
	);
};

export default Projects;
