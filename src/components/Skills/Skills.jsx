import React from "react";

import "../components.css";
import "./skills.css";

// component imports
import { Container, Row, Col } from "react-bootstrap";

const Skills = () => {
    return (
        <Container  className="skills page-structure" id="skills">
            <h2 className="heading">My <span>Toolbox</span></h2>
							<Row className="skills-row">
								<Col>
									<div className="skills-column">

								<div className="skills-box">
									<div className="skills-content">
										<div className="content">
											<h3>HTML</h3>
											<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
										</div>
									</div>

									<div className="skills-content">
										<div className="content">
											<h3>CSS</h3>
											<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
										</div>
									</div>

									<div className="skills-content">
										<div className="content">
											<h3>JavaScript</h3>
											<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
										</div>
									</div>
        				</div>
      				</div>
								</Col>
								<Col>
									<div className="skills-column">

        <div className="skills-box">
          <div className="skills-content">
            <div className="content">
              <h3>React</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
          </div>

          <div className="skills-content">
            <div className="content">
              <h3>Angular</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
          </div>

          <div className="skills-content">
            <div className="content">
              <h3>SQL</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
          </div>
        </div>
      </div>
								</Col>
							</Row>
        </Container>
    )
}

export default Skills;