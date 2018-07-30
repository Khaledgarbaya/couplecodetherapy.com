import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

function Show({node}) {
  return (
      <div className="blog-posts__item">
        <div className="blog-posts__content">
          <h2 className="blog-posts__title"><Link to={`/${node.frontmatter.slug}`}>{node.frontmatter.title}</Link></h2>
          <span className="post__meta">
            <time>{ node.frontmatter.date }</time>
          </span>
          <div className="blog-posts__text">
            {node.excerpt}
          </div>
        </div>
        <img className="blog-posts__img" src="http://picsum.photos/200/200" alt="" />
      </div>
  );
}

Show.defaultProps = {};

Show.propTypes = {};

export default Show;
