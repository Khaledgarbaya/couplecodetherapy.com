import React from 'react'
import PropTypes from 'prop-types'

function TipBlock({node}) {
  return (
    <div className=`tip tip-${node.side}` dangerouslySetInnerHTML={{__html: node.content.childMarkdownRemark.html}} />
  )
}

TipBlock.defaultProps = {}

TipBlock.propTypes = {
  node: PropTypes.object.isRequired
}

export default TipBlock
