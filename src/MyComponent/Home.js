import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
export default function Home() {
  const overlay = useSelector((state)=>state.ChangeOverlay);
  const active = "home-section align-items-center "+overlay;
  return <>
    <section className={active}>
      <div className="container">
        <div className="row align-items-center">
          <div className="home-text">
            <p>Hello, I'm</p>
            <h1>Priyanshu <br/>Malaiya Jain</h1>
            <h2>Web Developer</h2>
            <Link to="/about" className="btn link-item">More About me</Link>
            <Link to="/portfolio" className="btn link-item">Portfolio</Link>
          </div>
          <div className="home-img">
            <div className="img-box">
              <img src={process.env.PUBLIC_URL + "personalimage.jpg"} alt='Profile' />
            </div>
          </div>
        </div>
      </div>
    </section>
  </>;
}
