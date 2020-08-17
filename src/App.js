import React, {Component} from 'react';
import './App.css';
import {Navbar, Nav, Image, Container, Row, Col} from 'react-bootstrap/'
import ScrollspyNav from "react-scrollspy-nav";
import resume2020 from './assets/resume2020.pdf'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMicroscope, faGraduationCap, faCode, faFileDownload, faBookOpen} from "@fortawesome/free-solid-svg-icons";



function DisplayCourses({Courses}) {
  return (
    Courses && Courses.map((course,index) =>
    course === "br" ? <br/> : <span className="skill-item">{course}</span>
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
    {/* UNUSED VARIABLES
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
    ]; */}
    const courses =
    [
      "Algorithms 1,2", "Computer Systems", "br", "Web Dev", "Data Science tools", "br", "Functional, Object-Oriented, Parallel",
       "br", "Computer Engineering", "Statistics",
     ];

  return (

    <div className="App">

    {/*  ------- NAVBAR  ------- */}
    <ScrollspyNav
    scrollTargetIds={[
      "about",
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
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </ScrollspyNav>

      {/*  ------- FRONTPAGE  ------- */}
      <header className="masthead" id="about">
          <div className="textbox">{"This Summer I worked on Bayesian Neural Decoding of behavioral videos using Deep Learning. This is a bitmasked data sample from an early project. Find out more "}<a style={{scrollbehavior:"smooth"}}href="#projects">here</a>.</div>
          <div  className="d-flex h-100 align-items-center">
              <div className="mx-right text-center wide">
                  {/*<Image style={{height:200, width:200, border:"4px solid #45433a"}}src={require("./assets/img/IMG-4454.jpg")} roundedCircle fluid />*/}
                  <h1 className="mx-auto my-0 text-uppercase">Alex Li</h1>
                  <h2 className="text-white-50 mx-auto mt-2 mb-5">Junior at Rice University pursuing a BA in CS</h2>
                  <a style={{fontStyle : "italic", marginRight:10}} className="btn btn-primary js-scroll-trigger" download='AlexResume' href={resume2020}>Download my Resume <FontAwesomeIcon size='xl' style={{marginLeft:10}}icon={faFileDownload}/></a>
                  <a className="btn btn-primary js-scroll-trigger" href="https://github.com/asl11">Github</a>
              </div>
          </div>
      </header>

    {/* ------- RESUME  ------- */}

    <section style={{backgroundColor:"#BFD2D0"}} id="resume" class="resume">
    <div class="container">

      <div style={{paddingTop:75}} class="section-title">
        <h2 class="section-title">Resume</h2>
      </div>
      <p style={{paddingBottom : 25}}>My Objective is to utilize my skillset while learning and to implement new technologies in a meaningful way</p>


      <div style={{textAlign:"left"}} class="row">

      <div style={{marginRight:"5%"}} class="col-lg-7">
        <h3 class="resume-title">Internships & Research<FontAwesomeIcon className="rightalign" icon={faMicroscope} size='sm'/></h3>
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
          <p>Committed to BA in Computer Science, Minor in Data Science, 3.7 GPA</p>
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

        <h3 class='resume-title'>Relevant Courses <FontAwesomeIcon size='s' className="rightalign" icon={faBookOpen}/></h3>
          <hr className="line"/>
          <p style={{textAlign:"justify"}}>
            <DisplayCourses Courses={courses}/>
          </p>
        </div>
      </div>

      </div>
    </section>

    <section style={{backgroundColor:"#F4F7F0"}} id="projects">

      {/*-----------Projects----------------*/}
      <Container className="imgwrap" fluid>
      <div style={{paddingTop:135}} class="section-title">
        <h2 style={{fontWeight:"bold"}} class="section-title">Projects</h2>
      </div>
      <p style={{paddingBottom : 75}}>Here are some of my favorite projects! Hover over for more info as well as a link to their Github</p>

        <Row>
          <Col className="gridCol" fluid>
            <Image fluid className="imageresize" src={require("./assets/img/divorce.png")}/>
            <p className="imgtext textcentered">2020 Rice Datathon Machine Learning Systems 1st place project:
            Built a frontend and gui to interact with a PCA model that predicted indicators of divorce based on
            survey results with up to 96% predictable variance. Link to project <a href="https://devpost.com/software/datathon-2020">page</a>.</p>
          </Col>
          <Col className="gridCol" fluid>
            <Image fluid className="imageresize" src={require("./assets/img/mouse-gif.gif")}/>
            <p className="imgtext textcentered">This summer I developed a Deep Neural Network that predicted mouse behavior based
            binned neuron firing rate. The regression model was able to predict behavior state associated with videos such as this one
            from the firing rate of the neurons. Visit the <a className="lightlink" href="#!">Github</a> or <a className="lightlink" href="#!">Slideshare</a> for more info.</p>
          </Col>
        </Row>

        <Row>
          <Col className="gridCol" fluid>
            <Image fluid className="imageresize" src={require("./assets/img/proxy.png")}/>
            <p className="imgtext textcentered">I've developed many C library related features from scratch, such as a shell, malloc, linking, and proxy in C.
            Find their repositories <a href="#!" className="lightlink">here</a>.</p>
          </Col>
          <Col className="gridCol" fluid>
            <Image fluid className="imageresize" src={require("./assets/img/prettypicture.png")}/>
            <p className="imgtext textcentered">I also built a genetic algorithm in Java that uses json objects to represent
            mathematical functions, and then nests them to generate a function relating x,y coordinates to rgb values. The result is a bunch of psuedo-randomly generated pictures
            like this one, which can be further bred to create many generations of pictures. Look at the frontend <a href="#!" className="lightlink">
            framework</a> or <a href="#!" className="lightlink">Github</a>.</p>
          </Col>
        </Row>
      </Container>
    </section>




      <section style={{backgroundColor:"#F4F7F0 !important"}} id="contact" className="contact-section">
        <div style={{paddingTop:75, paddingBottom:75}} class="section-title">
          <h2 style={{fontWeight:"bold"}} class="section-title">Contact Me</h2>
        </div>
          <div className="container">
              <div className="row">
                  <div className="col-md-4 mb-3 mb-md-0">
                      <div className="card py-4 h-100">
                          <div className="card-body text-center">
                              <i className="fas fa-map-marked-alt text-primary mb-2"></i>
                              <h4 className="text-uppercase m-0">Address</h4>
                              <hr className="my-4" />
                              <div className="small text-black-50">6350 Main Street Houston, TX 77005</div>
                          </div>
                      </div>
                  </div>
                  <div className="col-md-4 mb-3 mb-md-0">
                      <div className="card py-4 h-100">
                          <div className="card-body text-center">
                              <i className="fas fa-envelope text-primary mb-2"></i>
                              <h4 className="text-uppercase m-0">Email</h4>
                              <hr className="my-4" />
                              <div className="small text-black-50"><a href="mailto:asl11@rice.edu">asl11@rice.edu</a></div>
                          </div>
                      </div>
                  </div>
                  <div className="col-md-4 mb-3 mb-md-0">
                      <div className="card py-4 h-100">
                          <div className="card-body text-center">
                              <i className="fas fa-mobile-alt text-primary mb-2"></i>
                              <h4 className="text-uppercase m-0">Phone</h4>
                              <hr className="my-4" />
                              <div className="small text-black-50">+1 (425) 306-2285</div>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="social d-flex justify-content-center">
                  <a className="mx-2" href="https://www.linkedin.com/in/alexander-li-s0129/"><i className="fab fa-linkedin fonticon fa-2x"></i></a>
                  <a className="mx-2" href="https://github.com/asl11"><i className="fab fa-github fonticon fa-2x"></i></a>
              </div>
          </div>
      </section>

      <footer className="footer small text-center"><div className="container">Made by Alex with React</div></footer>


    </div>
  );
}
}
export default App;
