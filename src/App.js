import React, {Component} from 'react';
import './App.css';
import Projects from './components/Projects'
import Allskills from './components/Allskills'
import ReactDOM from 'react-dom';
import {Navbar, Nav, NavDropdown, Form, FormControl, Button, Image} from 'react-bootstrap/'
import ScrollspyNav from "react-scrollspy-nav";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook, faGraduationCap, faCode} from "@fortawesome/free-solid-svg-icons";



function DisplayCourses({Courses}) {
  return (
    Courses && Courses.map((course,index) =>
    <span className="skill-item">{course}</span>
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
    const languages =
    [
      "Python", "Java", "C", "React", "Javascript", "HTML/CSS", "R", "Matlab", "Energia"
    ];
    const courses =
    [
      "Advanced Algorithms", "Java Functional Programming", "Advanced Object-Oriented Programming and Design",
      "Web Development", "Tools and Models for Data Science", "Computer Systems in C", "Parallel Programming in Java",
      "Computer Engineering", "Data Science Statistics", "Multivariable Calculus", "Linear Algebra",
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

      <div style={{marginRight:"5%"}} class="col-lg-7">
        <h3 class="resume-title">Internships & Research<FontAwesomeIcon className="rightalign" icon={faBook} size='sm'/></h3>
        <hr className="line" />
        <div class="resume-item">
          <h4>Research at Rice Neuroengineering Initiative</h4>
          <p><em><span>Rice University, Houston, TX</span>
          <span className="rightalign">Feb 2020 - Present</span></em></p>
          <p>
          <ul>
            <li>Developed a Dense Neural Network model in python with the keras package and optimized the loss with regards to hyperparameter search using Bayesian Optimization</li>
            <li>Followed results of a behavenet paper to predict rat behavior based on neural images using Machine Learning</li>
            <li>Independently completed Machine Learning, Deep Learning, Neural Network courses and projects in Matlab such as Data preprocessing, linear regression models, PCA, etc</li>
            <li>Used Machine Learning Algorithms to identify motifs in Neural Images</li>
          </ul>
          </p>
        </div>
        <h3 class="resume-title">Education<FontAwesomeIcon icon={faGraduationCap} className="rightalign"/></h3>
        <hr className="line"/>
        <div class="resume-item">
          <h4>Bachelor of Arts in Computer Science</h4>
          <p><em>Rice University, Houston, TX<span className="rightalign">2018-2022</span></em></p>
          <p>Committed to BA in Computer Science, Minor in Data Science, 3.8 GPA</p>
        </div>

      </div>
        <div class="col-lg-4">
          <h3 className='resume-title'>Skills<FontAwesomeIcon icon={faCode} className="rightalign" size="s"/></h3>
          <hr className="line"/>
          <div class="resume-item">
            <h4>Technologies</h4>
            <p style={{textAlign:"justify"}}>
              <span className="skill-item">Python</span>
              <span className="skill-item">Java</span>
              <span className="skill-item">C</span>
              <span className="skill-item">Javascript</span>
              <span className="skill-item">React</span>
              <br/>
              <span className="skill-item">HTML/CSS</span>
              <span className="skill-item">R</span>
              <span className="skill-item">Matlab</span>
            </p>
          </div>
          <div class="resume-item">
            <h4>Tools</h4>
            <p style={{textAlign:"justify"}}>
              <span className="skill-item">Git</span>
              <span className="skill-item">LaTeX</span>
              <span className="skill-item">Keras</span>
              <span className="skill-item">Hyperopt</span>
              <br/>
              <span className="skill-item">BayesOpt</span>
            </p>
          </div>



        <h3>Relevant Courses</h3>
          <hr className="line"/>
          <div class="resume-item">
            <ul>
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
