import React, {Component} from 'react';
import './App.css';
import Projects from './components/Projects'
import Allskills from './components/Allskills'
import ReactDOM from 'react-dom';
import {Navbar, Nav, NavDropdown, Form, FormControl, Button, Image} from 'react-bootstrap/'
import ScrollspyNav from "react-scrollspy-nav";


function DisplayCourses({Courses}) {
  return (
    Courses && Courses.map((course,index) =>
    <li style={{padding: 8}}>{course}</li>
    )
  );
}

class App extends Component {

  state = {
    navBackground: "transparent",
    activeLink: "dummy"
  };

  componentDidMount() {
    document.addEventListener("scroll", () => {
      const backgroundcolor = window.scrollY < 100 ? "transparent" : "white";

      this.setState({ navBackground: backgroundcolor});
    });
  }


  render () {
    const skillnamesleft =
    [
      "Java", "C", "React", "HTML/CSS", "R"
    ];
    const skillnamesright =
    [
      "Python", "Javascript", "Matlab", "Energia", "LateX"
    ];
    const courses =
    [
      "Advanced Algorithms", "Java Functional Programming", "Advanced Object-Oriented Programming and Design",
      "Web Development", "Tools and Models for Data Science", "Computer Systems in C", "Parallel Programming in Java",
      "Computer Engineering", "Data Science Statistics", "Multivariable Calculus", "Linear Algebra"
    ]

  return (

    <div className="App">

    {/*  ------- NAVBAR  ------- */}
    <ScrollspyNav
    scrollTargetIds={[
      "about",
      "skills",
      "resume",
      "projects",
      "contact"
    ]}
    activeNavClass="NAVBAR--active" >
      <Navbar fixed="top" style={{backgroundColor : `${this.state.navBackground}`}} variant="light" expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link className="dummy" href="#about">About</Nav.Link>
            <Nav.Link href="#resume">Resume</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </ScrollspyNav>

      {/*  ------- FRONTPAGE  ------- */}
      <header className="masthead" id="about">
          <span className="textbox">{"This Summer I worked on Bayesian Neural Decoding of behavioral videos using Deep Learning. This is a bitmasked data sample. Find out more "}<a href="#projects">here</a>.</span>
          <div  className="d-flex h-100 align-items-center">
              <div className="mx-right text-center wide">
                  {/*<Image style={{height:200, width:200, border:"4px solid #45433a"}}src={require("./assets/img/IMG-4454.jpg")} roundedCircle fluid />*/}
                  <h1 className="mx-auto my-0 text-uppercase">Alex Li</h1>
                  <h2 className="text-white-50 mx-auto mt-2 mb-5">Junior at Rice University pursuing a BA in CS</h2>
                  <a style={{fontStyle : "italic", marginRight:10}} className="btn btn-primary js-scroll-trigger" href="#contact">Download my Resume</a>
                  <a className="btn btn-primary js-scroll-trigger" href="#contact">Github</a>
              </div>
          </div>
      </header>

    {/* ------- RESUME  ------- */}

    <section style={{backgroundColor:"#BFD2D0"}} id="resume" class="resume">
    <div class="container">

      <div style={{paddingTop:25}} class="section-title">
        <h2>Resume</h2>
      </div>
      <p style={{paddingBottom : 35}}>My Objective is to utilize my skillset while learning and to implement new technologies in a meaningful way</p>


      <div style={{textAlign:"left"}} class="row">

      <div class="col-lg-6">
        <h3 class="resume-title">Internships & Research</h3>
        <div class="resume-item">
          <h4>Research at Rice Neuroengineering Initiative</h4>
          <h5>Feb 2020 - Present</h5>
          <p><em>Rice University, Houston, TX</em></p>
          <p>
          <ul>
            <li>Developed a Dense Neural Network model in python with the keras package and optimized the loss with regards to hyperparameter search using Bayesian Optimization</li>
            <li>Followed results of a behavenet paper to predict rat behavior based on neural images using Machine Learning</li>
            <li>Independently completed Machine Learning, Deep Learning, Neural Network courses and projects in Matlab such as Data preprocessing, linear regression models, PCA, etc</li>
            <li>Used Machine Learning Algorithms to identify motifs in Neural Images</li>
          </ul>
          </p>
        </div>
        <div class="resume-item">
          <h4>Education Outreach Intern</h4>
          <h5>Sep 2017 - Jun 2018</h5>
          <p><em>Teen Link - Crisis Clinic, Seattle, WA</em></p>
          <p>
          <ul>
            <li>Managed volunteer connections and facilitated outreach programs amongst fifty plus volunteers</li>
            <li>Initiated and Lead Projects such as Middle School Outreach and Website Redesign</li>
            <li>Coordinated with managedment to communicate volunteer needs to board of directors</li>
          </ul>
          </p>
        </div>
      </div>
        <div class="col-lg-6">


          <h3 class="resume-title">Education</h3>
          <div class="resume-item">
            <h4>Bachelor of Arts in Computer Science</h4>
            <h5>2018-2022</h5>
            <p><em>Rice University, Houston, TX</em></p>
            <p>Committed to BA in Computer Science, Minor in Data Science, 3.8 GPA</p>
          </div>
          <div class="resume-item">
            <h5 style={{paddingTop:25}}>Relevant Courses</h5>
            <ul className="twocol">
              <DisplayCourses Courses={courses}></DisplayCourses>
            </ul>
          </div>
        </div>
      </div>

    </div>
  </section>


        {/*  ------- SKILLS  ------- */}
      <section className="skilltab" id="skills">
        <div class="skills container" >
        <div style={{padding: 75}} class="section-title">
          <h2>Skills & Technologies</h2>
        </div>
        <div class="row skills-content">
          <div class="col-lg-6">
            <Allskills skillnames={skillnamesleft}></Allskills>
          </div>
          <div class="col-lg-6">
            <Allskills skillnames = {skillnamesright}></Allskills>
          </div>

        </div>

        </div>
      </section>

      {/*-----------Projects----------------*/}
      <Projects></Projects>


      <section className="signup-section" id="signup">
          <div className="container">
              <div className="row">
                  <div className="col-md-10 col-lg-8 mx-auto text-center">
                      <i className="far fa-paper-plane fa-2x mb-2 text-white"></i>
                      <h2 className="text-white mb-5">Subscribe to receive updates!</h2>
                      <form className="form-inline d-flex">
                          <input className="form-control flex-fill mr-0 mr-sm-2 mb-3 mb-sm-0" id="inputEmail" type="email" placeholder="Enter email address..." />
                          <button className="btn btn-primary mx-auto" type="submit">Subscribe</button>
                      </form>
                  </div>
              </div>
          </div>
      </section>

      <section id="contact" className="contact-section bg-black">
          <div className="container">
              <div className="row">
                  <div className="col-md-4 mb-3 mb-md-0">
                      <div className="card py-4 h-100">
                          <div className="card-body text-center">
                              <i className="fas fa-map-marked-alt text-primary mb-2"></i>
                              <h4 className="text-uppercase m-0">Address</h4>
                              <hr className="my-4" />
                              <div className="small text-black-50">4923 Market Street, Orlando FL</div>
                          </div>
                      </div>
                  </div>
                  <div className="col-md-4 mb-3 mb-md-0">
                      <div className="card py-4 h-100">
                          <div className="card-body text-center">
                              <i className="fas fa-envelope text-primary mb-2"></i>
                              <h4 className="text-uppercase m-0">Email</h4>
                              <hr className="my-4" />
                              <div className="small text-black-50"><a href="#!">hello@yourdomain.com</a></div>
                          </div>
                      </div>
                  </div>
                  <div className="col-md-4 mb-3 mb-md-0">
                      <div className="card py-4 h-100">
                          <div className="card-body text-center">
                              <i className="fas fa-mobile-alt text-primary mb-2"></i>
                              <h4 className="text-uppercase m-0">Phone</h4>
                              <hr className="my-4" />
                              <div className="small text-black-50">+1 (555) 902-8832</div>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="social d-flex justify-content-center">
                  <a className="mx-2" href="#!"><i className="fab fa-twitter"></i></a>
                  <a className="mx-2" href="#!"><i className="fab fa-facebook-f"></i></a>
                  <a className="mx-2" href="#!"><i className="fab fa-github"></i></a>
              </div>
          </div>
      </section>

      <footer className="footer bg-black small text-center text-white-50"><div className="container">Copyright © Your Website 2020</div></footer>


    </div>
  );
}
}
export default App;
