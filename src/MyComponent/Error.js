import React from 'react'
import { useSelector } from "react-redux";
import { useLocation } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

export const Error = () => {
  let loctaion = useLocation();
  const overlay = useSelector((state) => state.ChangeOverlay);
  const active = "about-section sec-padding " + overlay;

  return (
    <section className={active} id="about">
    <div className="container">
      <div className="row">
        <div className="section-title">
         <br/><br/><br/><br/><br/><br/> <h2>{loctaion.pathname} Not Found</h2>
         <p><NavLink to="/">Go Back</NavLink></p>
        </div>
      </div>
        </div>
        </section>
  )
}
