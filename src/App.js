import React from 'react';
import logo from './logo.svg';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './App.css';
import { Tabs, Tab, Accordion, Card, Button, Carousel, Form } from 'react-bootstrap';

function App() {
  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <div style={styles.leftHeader}>
          <img style={styles.logImg} src={logo} />
          <div style={styles.headerText}>
            <h1 style={styles.headingTitle}>Samriddhi Collage</h1>
            <h4>Lokanthali, Bhaktapur</h4>
          </div>
        </div>
        <div style={styles.rightHeader}>
          <h3>Samriddhi@info.com</h3>
          <h3>98511235090</h3>
        </div>
      </div>
      <div style={styles.sliderWrapper}>
        <div style={styles.sliderContainer}>
          <Carousel>
            <Carousel.Item>
              <img
                style={styles.sliderImg}
                src={logo}
                alt="First slide"
              />
              <Carousel.Caption style={styles.galleryCaption}>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                style={styles.sliderImg}
                src={logo}
                alt="Third slide"
              />

              <Carousel.Caption style={styles.galleryCaption}>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                style={styles.sliderImg}
                src={logo}
                alt="Third slide"
              />

              <Carousel.Caption style={styles.galleryCaption}>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>

        </div>
      </div>
      <div style={styles.midSection}>
        <div style={styles.midLeftSection}>
          <div style={styles.topTestimonial}>
            <img src={logo} style={styles.principleImg} />
            <h3>Mr. Principle</h3>
          </div>
          <div style={styles.bottomTestimonial}>
            <p style={styles.textTestimonial}>
              I want to say to my fello students, keep calm and keep learning.
              Beside that, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>

          </div>
        </div>
        <div style={styles.midRightSection}>
          <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
            <Tab eventKey="home" title="Notice">
              <Accordion defaultActiveKey="0">
                <Card>
                  <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                      Leave Tomorrow
                    </Accordion.Toggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey="0">
                    <Card.Body>Tomorrow is saturday</Card.Body>
                  </Accordion.Collapse>
                </Card>
                <Card>
                  <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="1">
                      Exam Notice
                    </Accordion.Toggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey="1">
                    <Card.Body>Single sheet of paper can not define your future</Card.Body>
                  </Accordion.Collapse>
                </Card>
                <Card>
                  <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="2">
                      Exam Notice
                    </Accordion.Toggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey="2">
                    <Card.Body>Single sheet of paper can not define your future</Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
            </Tab>
            <Tab eventKey="profile" title="Gallary">
              <Carousel>
                <Carousel.Item>
                  <img
                    style={styles.galleryImage}
                    src={logo}
                    alt="First slide"
                  />
                  <Carousel.Caption style={styles.galleryCaption}>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    style={styles.galleryImage}
                    src={logo}
                    alt="Third slide"
                  />

                  <Carousel.Caption style={styles.galleryCaption}>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    style={styles.galleryImage}
                    src={logo}
                    alt="Third slide"
                  />

                  <Carousel.Caption style={styles.galleryCaption}>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </Tab>
          </Tabs>
        </div>
      </div>
      <div style={styles.contactusWrapper}>
        <div style={styles.formWrapper}>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter name" />
              
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Message</Form.Label>
              <Form.Control type="text" placeholder="Message" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
          </Button>
          </Form>
        </div>
      </div>
      <div style={styles.footerWrapper}>
      © 2020. All rights reserved | Design by MRG 
      </div>
    </div>
  );
}

const styles = {
  container: {
    width: "100%",
  },
  header: {
    height: "108px",
    width: '100%',
    backgroundImage: "linear-gradient(45deg, #fff, #3489c5)",

  },
  sliderWrapper: {
    height: "300px",
    width: "100%",
    borderBottom: "1px solid #bbb"
  },
  sliderContainer: {
    textAlign: "center",
  },
  midSection: {
    height: "500px",
    width: "100%",
    // lineHeight: "500px",
    textAlign: "center",
    borderBottom: "1px solid #bbb"
  },
  midLeftSection: {
    height: "500px",
    width: "50%",
    borderRight: "1px solid #bbb",
    float: "left"
  },
  midRightSection: {
    height: "500px",
    // lineHeight: "500px",
    textAlign: "center",
    width: "49%",
    float: "right",
    padding: "20px"
  },
  contactusWrapper: {
    height: "350px",
    // lineHeight: "300px",
    textAlign: "center",
    borderBottom: "1px solid #bbb",
    padding: "20px"
  },
  footerWrapper: {
    height: "100px",
    lineHeight: "100px",
    textAlign: "center",
    backgroundImage: "linear-gradient(red, #fff, blue)"
  },
  sliderImg: {
    height: "300px"
  },
  headerText: {
    marginLeft: "100px",
    paddingTop: "10px"
  },
  logImg: {
    height: "100px",
    width: "130px",
    float: "left"
  },
  headingTitle: {
    margin: "0px",
  },
  leftHeader: {
    float: "left",
    width: "500px",
  },
  rightHeader: {
    float: "right",
    height: "100%",
    paddingRight: "20px",
    color: "#fff",
    padding: "12px"
  },
  topTestimonial: {
    margin: "auto",
  },
  principleImg: {
    height: "80px",
    width: "80px",
  },
  bottomTestimonial: {
    padding: "30px",
  },
  textTestimonial: {
    // border: "1px solid #bbb",
    textAlign: "center",
    padding: "20px",
    lineHeight: "30px"
  },
  galleryImage: {
    height: "400px"
  },
  galleryCaption: {
    color: "#000",
  },
  formWrapper: {
    margin: "auto",
    width: "400px"
  }
}

export default App;
