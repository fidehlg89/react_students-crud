import React from 'react';

function Layout(props) {
  return (    
      <div className="wrap" align="center">
        {
          props.children
        }
      </div>
    )
}
export default Layout;