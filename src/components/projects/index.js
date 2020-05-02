import React, { Component } from 'react';
import Card from "react-bootstrap/Card";
import Button from 'react-bootstrap/Button';
import reactImg from "./react.png";
import ferrisImg from "./ferris.png"
import 'bootstrap/dist/css/bootstrap.min.css';

class Projects extends Component {
    render() {
        return(
            <div className="project">
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={reactImg}/>
                    <Card.Body>
                        <Card.Title>Learning React Lessons</Card.Title>
                        <Card.Text>
                            I worked through the Learning React Book recently.  The following
                            repo contains all the lessons I worked on throughout the book.
                        </Card.Text>
                        <Button variant="primary" href="https://github.com/wollzy/LearningReactLessons">Checkout This Project</Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={ferrisImg}/>
                    <Card.Body>
                        <Card.Title>Rust Discovery Board</Card.Title>
                        <Card.Text>
                            I recently did some embedded programming with the F32Discovery board.  I programmed this
                            microcontroller using Rust. This allowed me to turn the board into everything from a compass
                            to a device that I could measure the Earths gravitational field.
                        </Card.Text>
                        <Button variant="primary" href="https://github.com/wollzy/discovery-solutions">Checkout This Project</Button>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}

export default Projects;