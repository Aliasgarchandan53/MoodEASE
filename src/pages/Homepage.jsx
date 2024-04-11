import React from 'react';
import component from "../components/index.js"

export default function Homepage() {

  return (
    <>
      <main>
        <div id="home">
          <component.Home/>
        </div>
        <div id="about">
          <component.About/>
        </div>
        <div id="services">
          <component.Services/>
        </div>
        <div id="doctors">
          <component.Doctors/>
        </div>
        {/* <div id="blog">
          <component.Blogs />
        </div> */}
      </main>
    </>
  )
}
