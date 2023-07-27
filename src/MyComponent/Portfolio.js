import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  changeOver,
  defaultOver,
  InactiveHeader,
  hidden,
} from "../actions/index";
export const Portfolio = () => {
  const dispatch = useDispatch();
  const [popup, setPopup] = useState("portfolio-popup");
  const [Cname, setName] = useState("Created At");
  const [project, setProject] = useState({
    img: "",
    Headling: "",
    Desc: "",
    Createdat: "",
    TU: "",
    Url: "",
  });
  function heandleClick(e) {
    setPopup("portfolio-popup open");
    if (e === "My Portfolio") {
      setName("Created At");
      dispatch(changeOver());
      dispatch(hidden());
      setProject({
        img: "Portfolio.png",
        Headling: "My Portfolio",
        Desc: "I made this project to ehance my skill in react js. I learned lot of things by doing this project like Hooks, Firestore, Realtime database, UI design and many more",
        Createdat: "15 June 2022",
        TU: "React Js",
        Url: "Localhost Project",
      });
    } else if (e === "Internworlds") {
      setName("Internship Duration");
      dispatch(changeOver());
      dispatch(hidden());
      setProject({
        img: "Esparse.png",
        Headling: "ESparse Matrix Solutions Private Limited",
        Desc: '<h3 style={{marginBottom:"5px"}}>Software Development</h3><p><i class="fas fa-dot-circle"></i> Helping to bulid Esparse matrix main website Project</p><p><i class="fas fa-dot-circle"></i>  Making various client website</p>  <p><i class="fas fa-dot-circle"></i> Creating a web page using React js</p> <p><i class="fas fa-dot-circle"></i> Creating a forgot password page with mail feature</p> ',
        Createdat: "27/05/2023 to Present",
        TU: "React js",
        Url: "https://drive.google.com/file/d/1yJixkQVU46yq-dbGxxR9cA7lv95lt-se/view?usp=sharing",
      });
    } else if (e === "bmart") {
      setName("Created At");
      dispatch(changeOver());
      dispatch(hidden());
      setProject({
        img: "bmart.png",
        Headling: "Instamart",
        Desc: "Instamart is an e-commerce website that Promotes Small Businessmen to sell vegetables and fruits online.",
        Createdat: "11 Mar 2023",
        TU: "React js, javascript",
        Url: "https://github.com/pmpriyanshu45/eSparse_matrix_main",
      });
    }
  }
  const closePop = () => {
    setPopup("portfolio-popup");
    dispatch(defaultOver());
    dispatch(InactiveHeader());
  };

  const overlay = useSelector((state) => state.ChangeOverlay);
  const active = "portfolio-section sec-padding " + overlay;
  return (
    <>
      <section className={active} id="portfolio">
        <div className="container">
          <div className="row">
            <div className="section-title">
              <h2>recent work</h2>
            </div>
          </div>
          <div className="row">
            <div className="portfolio-item">
              <div className="portfolio-item-thumbnail">
                <img
                  src={process.env.PUBLIC_URL + "Portfolio.png"}
                  alt="My Portfolio"
                />
              </div>
              <h3 className="portfolio-item-title">My Portfolio</h3>
              <button
                type="button"
                className="btn view-project-btn"
                onClick={() => heandleClick("My Portfolio")}
              >
                View project
              </button>
            </div>

            <div className="portfolio-item">
              <div className="portfolio-item-thumbnail">
                <img
                  src={process.env.PUBLIC_URL + "Internworlds.png"}
                  alt="InternWorlds"
                />
              </div>
              <h3 className="portfolio-item-title">Esparse</h3>
              <button
                type="button"
                className="btn view-project-btn"
                onClick={() => heandleClick("Internworlds")}
              >
                View Internship Detalis
              </button>
            </div>

            <div className="portfolio-item">
              <div className="portfolio-item-thumbnail">
                <img
                  src={process.env.PUBLIC_URL + "bmart.png"}
                  alt="portfolio item thumb"
                />
              </div>
              <h3 className="portfolio-item-title">Instamart</h3>
              <button
                type="button"
                className="btn view-project-btn"
                onClick={() => heandleClick("bmart")}
              >
                View project
              </button>
            </div>
          </div>
        </div>
      </section>

      <div className={popup}>
        <div className="pp-inner">
          <div className="pp-content">
            <div className="pp-header">
              <button
                className="btn pp-close"
                type="button"
                onClick={() => closePop()}
              >
                <i className="fas fa-times"></i>
              </button>
              <div className="pp-thumbnail">
                <img
                  src={process.env.PUBLIC_URL + project.img}
                  alt="pp-thumbnail"
                />
              </div>
              <h3>{project.Headling}</h3>
            </div>
            <div className="pp-body">
              <div className="description">
                <div dangerouslySetInnerHTML={{ __html: project.Desc }}></div>
              </div>
              <div className="general-info">
                <ul>
                  <li>
                    {Cname} - <span>{project.Createdat}</span>
                  </li>
                  <li>
                    Technology Used - <span>{project.TU}</span>
                  </li>
                  <li id="url">
                    Url: <a href={`http://${project.Url}`}>{project.Url}</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
