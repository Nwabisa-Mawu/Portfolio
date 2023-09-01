// eslint-disable-next-line no-unused-vars
import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import tally from "../assets/images/TallyVanilla.png" ;
import bookConnect from "../assets/images/BookConnect.png";
import memeGen from "../assets/images/MemeGenerator.png";

const Projects = () => {
	return (
		<Container className="text-center" id="projects">
			<h2 className="pb-5 fs-2 mt-n5">My projects</h2>

			{/* row of cards/column on small screen */}
			<Row>
				{/* Card 1 */}
				<Col lg={4} md={12} className="mb-6 mb-lg-0">
					<Card className="rounded-6 h-100">
						<div className="mx-3 shadow-4-strong rounded-6">
							<Card.Img fluid src={tally} alt="Tally counter Vanilla" />
						</div>
						<Card.Body>
							<Card.Title>Tally Counter</Card.Title>
							<p className="text-muted"><small>Finished <u>29.03.2023</u></small></p>
							<Card.Text>This is a counter web application that was built using vanilla JS,
								CSS and HTML. This is my first ever JavaScript project.
							</Card.Text>
							<a href="https://github.com/Nwabisa-Mawu/NWAMAW034_FTC2301_GroupB_NwabisaMawu_IWA/tree/master/IWA_01" target="_blank" rel="noreferrer">
								<Button className="bg-secondary text-light">View in browser</Button>
							</a>
						</Card.Body>
					</Card>
				</Col>

				{/* Card 2 */}
				<Col lg={4} md={12} className="mb-6 mb-lg-0">
					<Card className="rounded-6 h-100">
						<div className="mx-3 shadow-4-strong rounded-6">
							<Card.Img fluid src={bookConnect} alt="Book connect" />
						</div>
						<Card.Body>
							<Card.Title>BookConnect</Card.Title>
							<p className="text-muted"><small>Finished <u>11.05.2023</u></small></p>
							<Card.Text>A book review website that lets you preview book synopses
								with search functionality and theme toggling.
							</Card.Text>
							<a href="https://github.com/Nwabisa-Mawu/NWAMAW034_FTC2301_GroupB_NwabisaMawu_IWA_19_Capstone" target="_blank" rel="noreferrer">
								<Button className="bg-secondary text-light">View in browser</Button>
							</a>
						</Card.Body>
					</Card>
				</Col>

				{/* Card 3 */}
				<Col lg={4} md={12} className="mb-6 mb-lg-0">
					<Card className="rounded-6 h-100">
						<div className="mx-3 shadow-4-strong rounded-6">
							<Card.Img fluid src={memeGen} alt="Meme generator" />
						</div>
						<Card.Body>
							<Card.Title>Meme Generator</Card.Title>
							<p className="text-muted"><small>Finished <u>04.07.2023</u></small></p>
							<Card.Text>This website generates random meme images from an API with
								textboxes for creating new memes.
							</Card.Text>
							<a href="https://memegenny.netlify.app/" target="_blank" rel="noreferrer">
								<Button className="bg-secondary text-light">View in browser</Button>
							</a>
						</Card.Body>
					</Card>
				</Col>
			</Row>

		</Container>
	);
};

export default Projects;