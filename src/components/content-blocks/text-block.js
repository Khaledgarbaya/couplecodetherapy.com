import React from 'react';
import PropTypes from 'prop-types';

function TextBlock({node}) {
  return (    
    <div dangerouslySetInnerHTML={{__html: node.content.childMarkdownRemark.html}}/>
  );
}

TextBlock.defaultProps = {};

TextBlock.propTypes = {
  node: PropTypes.object.isRequired 
};

export default TextBlock;
