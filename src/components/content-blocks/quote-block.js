import React from 'react';
import PropTypes from 'prop-types';

function QuoteBlock({node}) {
  return (
    <blockquote dangerouslySetInnerHTML={{__html: node.content.childMarkdownRemark.html}} />
  );
}

QuoteBlock.defaultProps = {};

QuoteBlock.propTypes = {
  node: PropTypes.object.isRequired
};

export default QuoteBlock;
