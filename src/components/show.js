import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

function Show({node}) {
  return (
      <div className="blog-posts__item">
        <div className="blog-posts__content">
          <Link to={`/${node.frontmatter.slug}`}><h2 className="blog-posts__title">{node.frontmatter.title}</h2></Link>
          <span className="post__meta">
            <time>{ node.frontmatter.date }</time>
          </span>
          <div className="blog-posts__text">
            {node.excerpt}
          </div>
        </div>
        <img className="blog-posts__img" src="/couple_code_therapy_logo_250.png" alt="" />
      </div>
  );
}

Show.defaultProps = {};

Show.propTypes = {};

export default Show;
