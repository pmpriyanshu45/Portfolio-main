import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const About = () => {
  const [tab, getTab] = useState("tab-item active");
  const [tab1, getTab1] = useState("tab-item");
  const [tab2, getTab2] = useState("tab-item");
  const [tabitem, settabitem] = useState("tab-content");
  const [tabitem1, settabitem1] = useState("tab-content active");
  const [tabitem2, settabitem2] = useState("tab-content");
  const heandletab = () => {
    getTab("tab-item active");
    getTab1("tab-item");
    getTab2("tab-item");
    settabitem1("tab-content active");
    settabitem2("tab-content");
    settabitem("tab-content");
  };
  const heandletab1 = () => {
    getTab1("tab-item active");
    settabitem("tab-content active");
    settabitem1("tab-content");
    settabitem2("tab-content");
    getTab("tab-item");
    getTab2("tab-item");
  };
  const heandletab2 = () => {
    getTab2("tab-item active");
    settabitem2("tab-content active");
    settabitem1("tab-content");
    settabitem("tab-content");
    getTab("tab-item");
    getTab1("tab-item");
  };
  const overlay = useSelector((state) => state.ChangeOverlay);
  const active = "about-section sec-padding " + overlay;

  return (
    <>
      <section className={active} id="about">
        <div className="container">
          <div className="row">
            <div className="section-title">
              <h2>about me</h2>
            </div>
          </div>
          <div className="row">
            <div className="about-img">
              <div className="img-box">
                <img
                  src={process.env.PUBLIC_URL + "personalimage1.jpg"}
                  alt="About"
                />
              </div>
            </div>
            <div className="about-text">
              <p>
                My name is Priyanshu Malaiya Jain. I am from Sagar and currently
                I am persuing bachelor of technology in computer science and
                engineering from AITR Indore. Talking about my skills I know
                programming languages like Java & c++ and also have knowledge of
                html , CSS and react js.{" "}
              </p>
              <h3>Web Skills</h3>
              <div className="skills">
                <div className="skill-item">HTML</div>
                <div className="skill-item">CSS</div>
                <div className="skill-item">React Js</div>
              </div>
              <h3>Software Skills</h3>
              <div className="skills">
                <div className="skill-item">Core Java</div>
                <div className="skill-item">C++</div>
              </div>
              <h3>Database Skills</h3>
              <div className="skills">
                <div className="skill-item">MySQL</div>
                <div className="skill-item">MongoDB</div>
              </div>
              <h3>Tools & Technology</h3>
              <div className="skills">
                <div className="skill-item">Github</div>
                <div className="skill-item">Netlify</div>
              </div>
              <div className="about-tabs">
                <button
                  type="button"
                  className={tab}
                  onClick={() => heandletab()}
                  data-target="#experience"
                >
                  experience
                </button>
                <button
                  type="button"
                  className={tab1}
                  onClick={() => heandletab1()}
                  data-target="#education"
                >
                  education
                </button>
                <button
                  type="button"
                  className={tab2}
                  onClick={() => heandletab2()}
                  data-target="#education"
                >
                  certificate
                </button>
              </div>
              <div className={tabitem} id="education">
                <div className="timeline">
                  <div className="timeline-item">
                    <span className="date">2020-2024</span>
                    <h2>B.Tech in Computer Science</h2>
                    <h4>
                      acropolis institute of technology and research - RGPV
                      University
                    </h4>
                    <p style={{ color: "red" }}>Pursing</p>
                    <p style={{ color: "red" }}>Overall CGPA: 7.63</p>
                  </div>
                  <div className="timeline-item">
                    <span className="date">2019-2020</span>
                    <h2>Higher Secondary School</h2>
                    <h4>Pragati H.S School - M.P Board</h4>
                    <p style={{ color: "red" }}>Percentage: 62%</p>
                  </div>
                  <div className="timeline-item">
                    <span className="date">2017-2018</span>
                    <h2>Secondary School</h2>{" "}
                    <h4>Christ Convent School - CBSE Board</h4>
                    <p style={{ color: "red" }}>Percentage: 81%</p>
                  </div>
                </div>
              </div>
              <div className={tabitem1} id="experience">
                <div className="timeline">
                  <div className="timeline-item">
                    <span className="date">27/05/2023 - Present</span>
                    <h2>Web Developer</h2>
                    <h4>eSpare Matrix Solution Pvt Ltd</h4>
                    <p>
                      <i className="fas fa-check-circle"></i> Helping to bulid
                      Esparse matrix main website
                    </p>
                    <p>
                      <i className="fas fa-check-circle"></i> Making various
                      client website
                    </p>
                    <p>
                      <i className="fas fa-check-circle"></i> Creating a web
                      page using React js
                    </p>
                    <p>
                      <i className="fas fa-check-circle"></i> Creating a forgot
                      password page with mail feature
                    </p>
                  </div>
                </div>
              </div>
              <div className={tabitem2} id="experience">
                <div className="timeline">
                  <div className="timeline-item">
                    <span className="date">Spoken Tutorial </span>
                    <h2>Java</h2>
                    <p>
                      It covers topics all the basic about Java language and
                      also from this certificate I learned basic java.
                    </p>
                    <p style={{ marginTop: "10px" }}>
                      <a
                        download
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://drive.google.com/file/d/1DVcLqPmShiOA7wavsMBzP287U91v32eo/view?usp=drive_link"
                      >
                        View Certificate
                      </a>
                    </p>
                  </div>
                  <div className="timeline-item">
                    <span className="date">Cisco </span>
                    <h2>Networking Academy</h2>
                    <p>
                      Gain knowledge of fundamentals of networking, how devices
                      communicate, network addressing and services, how to build
                      a home or small office network and configure basic
                      security, basics of configuring Cisco devices, and the
                      basics of testing and troubleshooting network problems.
                    </p>
                    <p style={{ marginTop: "10px" }}>
                      <a
                        download
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://drive.google.com/file/d/1XqCSaxJIFR_73lg5690A6zbsQJehHTYS/view?usp=drive_link"
                      >
                        View Certificate
                      </a>
                    </p>
                  </div>
                  <div className="timeline-item">
                    <span className="date">Google</span>
                    <h2>Data Analyst</h2>
                    <p>
                      Master the basics of data analytics with our free
                      Interactive Advertising Bureau-accredited course
                    </p>
                    <p style={{ marginTop: "10px" }}>
                      <a
                        download
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://drive.google.com/file/d/1Dj7MxhCQ2fQ4e3LxmF4G8EiRaS47jque/view?usp=drive_link"
                      >
                        View Certificate
                      </a>
                    </p>
                  </div>
                  <div className="timeline-item">
                    <span className="date">Salesforce</span>
                    <h2>Salesforce Associate</h2>
                    <p>
                      {" "}
                      Understand the working of salesforce and also learned
                      about how salesforce panel works.
                    </p>
                    <p style={{ marginTop: "10px" }}>
                      <a
                        download
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://drive.google.com/file/d/1DrTCtwWsb0xyVRK1ahd-G03rjM5ga72U/view?usp=drive_link"
                      >
                        View Certificate
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              <a
                download
                target="_blank"
                rel="noreferrer noreferrer"
                href="https://drive.google.com/file/d/1yJixkQVU46yq-dbGxxR9cA7lv95lt-se/view?usp=sharing"
                className="btn"
              >
                Download CV
              </a>
              <Link to="/contact" className="btn link-item">
                Contact me
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
