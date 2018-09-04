import React from 'react';

function EmbeddedPlayer({url}) {
  return (
    <iframe 
      className="embedded-player"
      src={url}
      height="100%"
      width="100%"
      frameBorder="0"
      scrolling="no" />
  );
}

export default EmbeddedPlayer;
