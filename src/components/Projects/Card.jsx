import React from "react";
import { Container, Row, Col, Card, Image } from "react-bootstrap";
import tally from "../../assets/images/TallyVanilla.png";
import bookConnect from "../../assets/images/BookConnect.png";
import memeGen from "../../assets/images/MemeGenerator.png";

const Cards = () => {
    return (
			<Container>
				<Card style={{ width: '30rem' }}>
						<Row>
							<Col className="m-3">
								<Image fluid src={bookConnect} alt="Tally counter Vanilla" className="m-2" rounded />
								<Row>
									<Col>
										<Card.Link href="#">
											<i></i>Code Repo</Card.Link>
									</Col>
									<Col>
										<Card.Link href="#">Website</Card.Link>
									</Col>
								</Row>
							</Col>
							<Col>
								<Card.Body>
									<Card.Title>BookConnect</Card.Title>
									<Card.Subtitle className="mb-2 text-muted">Technologies used</Card.Subtitle>
									<Card.Text className="dark-text">
										Some quick example text to build on the card title and make up the
										bulk of the card's content.
									</Card.Text>
								</Card.Body>
							</Col>
						</Row>
				</Card>
			</Container>
    );
};

export default Cards;