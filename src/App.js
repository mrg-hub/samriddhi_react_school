import React from 'react';
// import img1 from './1.jpg';
// import img2 from './2.jpeg';
import img3 from './logo.svg';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import './App.css';

function App() {
  return (
    <div style={styles.container}>
      <div style={styles.header}>

      </div>
      <div style={styles.sliderWrapper}>
        <div style={styles.sliderContainer}>
          <Carousel showThumbs={false}>
            <div>
              <img style={styles.sliderImg} src={img3} />
              <p className="legend">Legend 1</p>
            </div>
            <div>
              <img style={styles.sliderImg} src={img3} />
              <p className="legend">Legend 2</p>
            </div>
            <div>
              <img style={styles.sliderImg} src={img3} />
              <p className="legend">Legend 3</p>
            </div>
          </Carousel>
        </div>
      </div>
      <div style={styles.midSection}>
        <div style={styles.midLeftSection}>
          Testimonial
          </div>
        <div style={styles.midRightSection}>
          Notice Board
          </div>
      </div>
      <div style={styles.contactusWrapper}>
        Contact Us Here
      </div>
      <div style={styles.footerWrapper}>
        Footer Goes Here
      </div>
    </div>
  );
}

const styles = {
  container: {
    width: "100%",
  },
  header: {
    height: "100px",
    width: '100%',
    backgroundColor: "grey"
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
    lineHeight: "500px",
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
    lineHeight: "500px",
    textAlign: "center",
    width: "49%",
    float: "right"
  },
  contactusWrapper: {
    height: "300px",
    lineHeight: "300px",
    textAlign: "center",
    borderBottom: "1px solid #bbb"
  },
  footerWrapper: {
    height: "100px",
    lineHeight: "100px",
    textAlign: "center",
    backgroundImage: "linear-gradient(red, green, blue)"
  },
  sliderImg: {
    height:"300px"
  }
}

export default App;
