import React, { Component } from 'react';
import './aboutme.css';

class AboutMe extends Component {
    render() {
        return (
            <div className="About">
                <h1><u>About Me</u></h1>
                  <p>My name is Josh Wolsborn and I'm a Computer Science student at Portland State University.
                  I will be graduating in Spring of 2020 with a B.S. in Computer Science.  I plan on immediately
                  working in the software engineering field upon graduation.  I look forward to apply the skills
                  I've learned at Portland State in the real world.</p>
                  <p>In my spare time I enjoy spending time with my wife and children. Typically this involves us
                  partaking in outdoor activities like skiing, snowboarding and camping.</p>
                  <p>When I'm able, I enjoy working on side software projects.  I've recently become interested
                  in embedded programming using Rust.  I'm currently working on a project using a Raspberry Pi and
                  programmable LEDs.</p>
            </div>
        );
    }
}

export default AboutMe;