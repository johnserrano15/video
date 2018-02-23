import React from 'react';
import './home-layout.sass';

function HomeLayout(props) {
  return (
    <section className="HomeLayout">
      {props.children}
    </section>
  )
}

export default HomeLayout;
