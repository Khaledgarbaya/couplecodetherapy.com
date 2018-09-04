import React from 'react';

function Subscribe() {
  return (
    <div className="subscribe section">
      <ul className="subscribe__links">
        <li className="subscribe__link subscribe__link--itunes">
          <a target="_blank" rel="noopener noreferrer" href="https://itunes.apple.com/de/podcast/couple-code-therapy/id1419785443?mt=2">iTunes</a>
        </li>
        <li className="subscribe__link subscribe__link--spotify">
          <a target="_blank" rel="noopener noreferrer" href="https://open.spotify.com/show/1kKWGqKj41otz3V4b4TNOv?si=7-_SkScwSOegbUksdm0U9A">Spotify</a>
        </li>
      </ul>
    </div>
  );
}

export default Subscribe;
