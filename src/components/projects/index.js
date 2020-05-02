import React, { Component } from 'react';
import Card from "react-bootstrap/Card";
import Button from 'react-bootstrap/Button';
import reactImg from "./react.png";
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
            </div>
        );
    }
}

export default Projects;