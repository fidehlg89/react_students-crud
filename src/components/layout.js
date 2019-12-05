import React from 'react';
import Navigation from './navigation'

function Layout(props) {
  return (
    <div>
      <Navigation title="ESTUDIANTES"></Navigation>
      <div className=" ">
        {
          props.children
        }
      </div>
    </div>
  )
}
export default Layout;