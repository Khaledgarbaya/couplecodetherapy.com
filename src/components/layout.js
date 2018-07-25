import React from 'react';
import '../styles/main.scss'

function Layout({ children }) {
  return (
    <div className='main'>
      {children}
    </div>
  );
}

export default Layout;
