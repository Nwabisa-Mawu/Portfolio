/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line no-unused-vars
import React from "react";
import { Card } from "react-bootstrap";

const About = () => {
	return (
        <Card>
					<Card.Body className=" shadow-5">
						<h2 className="fw-bold">
							<span className="text-primary">Hi there!👋</span>
						</h2>
						<p className="text-muted">
						Hey there👋, I'm Nwabisa, a rookie front-end developer with a knack for problem-solving. My journey into 
				programming began with tinkering with some HTML and CSS in my free time and then that evolved 
				into JavaScript programming. In the past year, I discovered the transformative potential of 
				applications and the internet in simplifying our lives by acting as intelligent collaborators.<br/> 
				I quickly realised the pivotal role of user-device interaction in this and grew a keen interest
				in front-end development and UX/UI design. I'm inherently a problem solver and 
				find excitement in using my skills to enhance my ability to create user interfaces
				that are intuitive and help to bridge the gap between users and an application's capabilities.
						</p>
					</Card.Body>
				</Card>
    )
};

export default About;