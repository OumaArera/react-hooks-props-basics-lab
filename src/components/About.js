import React from "react";

const Links = props => {
  return (
    <div>
      <h3>Links</h3>
      <a href={props.links.github} target="_blank" rel="noopener noreferrer">
        GitHub Profile
      </a>
      <a href={props.links.linkedin} target="_blank" rel="noopener noreferrer">
        LinkedIn Profile
      </a>
    </div>
  );
};


function About(props) {
  return (
    <div id="about">
      <h2>About Me</h2>
      {/* Conditionally render the <p> tag based on the presence and content of the 'bio' prop */}
      {props.bio ? <p>{props.bio}</p> : null}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links links={props.links} /> {/* Pass 'links' prop to the 'Links' component */}
    </div>
  );
}

export default About;



