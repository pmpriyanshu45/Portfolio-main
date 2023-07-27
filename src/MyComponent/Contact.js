import emailjs from '@emailjs/browser';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
export const Contact = () => {
    const [user, setUser] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });
    let name, value;
    const getdata = (e) => {
        name = e.target.name;
        value = e.target.value;
        setUser({ ...user, [name]: value })
    }
    const formheandle =(e) => {
        e.preventDefault();
        emailjs.sendForm("service_244yk4j", "template_zfh9154", e.target,"81AsVxJQVuKN14mXq").then(ref=>{
            alert("Contact Request Send");
            setUser({
                name: "",
                email: "",
                subject: "",
                message: "",
            });
            console.log(ref);
        }).catch(err=>{
            alert("unsuccessful! please try again after some time");
            console.log(err);
        })
    }
    const overlay = useSelector((state)=>state.ChangeOverlay);
    const active = "contact-section sec-padding "+overlay;
    return <>
        <section className={active} id="contact">
            <div className="container">
                <div className="row">
                    <div className="section-title">
                        <h2>contact me</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="contact-form">
                        <form onSubmit={formheandle}>
                            <div className="row">
                                <div className="input-group">
                                    <input type="text" name="name" value={user.name} onChange={getdata} className="input-control" placeholder="Name" required />
                                </div>
                                <div className="input-group">
                                    <input type="email" name="email" value={user.email} onChange={getdata} className="input-control" placeholder="Email" required />
                                </div>
                                <div className="input-group">
                                    <input type="text" name="subject" value={user.subject} onChange={getdata} className="input-control" placeholder="Subject" required />
                                </div>
                                <div className="input-group">
                                    <textarea placeholder="Message" name="message" value={user.message} onChange={getdata} className="input-control" required></textarea>
                                </div>
                                <div className="submit-btn">
                                    <button type="submit" className="btn"> Send Message</button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="contact-info">
                        <div className="contact-info-item">
                            <h3>Email</h3>
                            <a href={'mailto:priyanshum.jainrehli@gmail.com'} style={{color: "var(--blue-dark)"}}>priyanshum.jainrehli@gmail.com</a>
                        </div>
                        <div className="contact-info-item">
                            <h3>Phone</h3>
                            <p><a href={'tel:9516776787'} style={{color: "var(--blue-dark)"}}>+91 9516776787</a></p>
                        </div>
                        <div className="contact-info-item">
                            <h3>Follow Me</h3>
                            <div className="social-links">
                                {/* <a href={"https://www.facebook.com/palashshahtspc/"} ><i className="fab fa-facebook-f"></i></a> */}
                                <a href={"https://www.linkedin.com/in/priyanshu-malaiya-jain-a8581220a/"} ><i className="fab fa-linkedin"></i></a>
                                <a href={"https://www.instagram.com/pm_priyanshu_45/"} ><i className="fab fa-instagram"></i></a>
                                <a href={"https://github.com/pmpriyanshu45"} ><i className="fab fa-github"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    </>;
};
