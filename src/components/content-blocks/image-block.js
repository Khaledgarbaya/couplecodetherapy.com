import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'

function ImageBlock({node}) {
  return (
     <figure>
       <Img 
         sizes:{{
           ...node.image.resolutions,
           base64: node.image.sqip
         }}
       />
        <figcaption>{node.caption}</figcaption>
     </figure>
  );
}

ImageBlock.defaultProps = {}

ImageBlocki.propTypes = {
  node: PropTypes.object.isRequired
}

export default ImageBlock;
