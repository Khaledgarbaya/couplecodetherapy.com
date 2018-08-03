import React from 'react';

function Footer({...props}) {
  return (
    <div className="footer">
      <small>
        <strong>
          © {new Date().getUTCFullYear()} Copyright Khaled Garbaya & Amal Nasri. All rights
          reserved.
        </strong>
      </small>
      <br />
      <br />
      <small>
        {' '}
        This site is built with{' '}
        <a
          href="http://www.gatsbyjs.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Gatsbyjs
        </a>{' '}
        . The source code is hosted on{' '}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="http://github.com/"
        >
          Github
        </a>.
      </small>
      <br />
      <br />
      {'  '}
      <a href="https://www.netlify.com">
        <img src="https://www.netlify.com/img/global/badges/netlify-color-bg.svg"/>
      </a>
    </div>
  );
}

Footer.defaultProps = {};

Footer.propTypes = {};

export default Footer;
