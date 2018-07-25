import React from 'react';
import PropTypes from 'prop-types';

function FeaturedPosts({...props}) {
  return (
    <div className="blog-posts section">
      <h2 className="blog-posts__header section__header h1">Latest therapies</h2>
      <div className="blog-posts__item">
        <div className="blog-posts__content">
          <h2 className="blog-posts__title">Getting into web development</h2>
          <span class="post__meta">
            <time>Saturday, Jun 9th 2018</time>
          </span>
          <div className="blog-posts__text">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</div>
        </div>
        <img className="blog-posts__img" src="http://picsum.photos/200/200" alt="" />
      </div>
    </div> 
  );
}

FeaturedPosts.defaultProps = {};

FeaturedPosts.propTypes = {};

export default FeaturedPosts;
