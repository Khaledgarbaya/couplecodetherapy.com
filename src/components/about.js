import React from 'react';

function About({...props}) {
  return (
    <div className="about section">
      <div className="about__content">
        <h2 className="about__title header__section h1">The couple</h2>
        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
      </div>
      <img src="http://lorempixel.com/300/300/people" width="300" height="300" alt="" />
    </div>
  );
}

About.defaultProps = {};

About.propTypes = {};

export default About;
