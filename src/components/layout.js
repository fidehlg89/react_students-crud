import React from 'react';

function Layout(props) {
  return (    
      <div className="wrap main-page">
        {
          props.children
        }
      </div>
    )
}
export default Layout;