import React from 'react';

function InstagramFeed({...props}) {
  return (
    <div className="instagram section">
      <h2 className="instagram__title section__header h1">Instagram</h2>
      <img className="instagram__image" src="http://picsum.photos/150/150" width="150" height="150" alt="" />
      <img className="instagram__image" src="http://picsum.photos/150/150" width="150" height="150" alt="" />
      <img className="instagram__image" src="http://picsum.photos/150/150" width="150" height="150" alt="" />
      <img className="instagram__image" src="http://picsum.photos/150/150" width="150" height="150" alt="" />
      <img className="instagram__image" src="http://picsum.photos/150/150" width="150" height="150" alt="" />
      <img className="instagram__image" src="http://picsum.photos/150/150" width="150" height="150" alt="" />
      <img className="instagram__image" src="http://picsum.photos/150/150" width="150" height="150" alt="" />
      <img className="instagram__image" src="http://picsum.photos/150/150" width="150" height="150" alt="" />
      <img className="instagram__image" src="http://picsum.photos/150/150" width="150" height="150" alt="" />
      <img className="instagram__image" src="http://picsum.photos/150/150" width="150" height="150" alt="" />
    </div>
  );
}

InstagramFeed.defaultProps = {};

InstagramFeed.propTypes = {};

export default InstagramFeed;
