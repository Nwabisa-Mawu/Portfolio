import React from "react";
// css imports
import { Container, Row, Col, Card, Image } from "react-bootstrap";
import "../components.css"

const Cards = (props) => {

	const { image, altText, repoLink, webLink, title, subtitle, description } = props;

    return (
			<Container>
					<Card style={{ width: '30rem' }}>
						<Row>
							<Col className="m-3">
								<Image fluid src={image} alt={altText} className="m-2" rounded />
								<Row>
									<Col>
										<Card.Link href={repoLink}>Code Repo</Card.Link>
									</Col>
									<Col>
										<Card.Link href={webLink}>Website</Card.Link>
									</Col>
								</Row>
							</Col>
							<Col>
								<Card.Body>
									<Card.Title className="title mb-3">{title}</Card.Title>
									<Card.Subtitle className="mb-3 text-muted">{subtitle}</Card.Subtitle>
									<Card.Text className="dark-text">{description}</Card.Text>
								</Card.Body>
							</Col>
						</Row>
				</Card>				
			</Container>
    );
};

export default Cards;