
import pic1 from './assets/LOGO.jpg'
import pic2 from './assets/plane.jpg'
import React, { useState, useEffect } from 'react';
import SwipeableViews from 'react-swipeable-views';

const Welcome= () => {
  const [index, setIndex] = useState(0);

  // Add your images and text here
  const content = [
    {
      image: '/src/assets/LOGO.jpg',  // First image path
      text: 'Gain total control of your money',
      subText: 'Become your own money manager and make every kobo count',
    },
    {
      image: '/src/assets/plane.jpg',  // Second image path
      text: 'Seamless transactions',
      subText: 'Track your transaction easily, with categories and financial report',
    }
  ];

  // Handle keyboard events to enable arrow key navigation
  const handleKeyDown = (event) => {
    if (event.key === 'ArrowRight') {
      setIndex((prevIndex) => (prevIndex + 1) % content.length);
    }
    if (event.key === 'ArrowLeft') {
      setIndex((prevIndex) => (prevIndex - 1 + content.length) % content.length);
    }
  };

  // Attach event listener for keyboard navigation
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div style={styles.container}>
      
      <SwipeableViews index={index} onChangeIndex={(newIndex) => setIndex(newIndex)}>
        {content.map((item, idx) => (
          <div key={idx} style={styles.slide}>
            <img src={item.image} alt={item.text} style={styles.image} />
          </div>
        ))}
      </SwipeableViews>

      
      <div style={styles.textdiv}>
        <h1 style={styles.mainText}>{content[index].text}</h1>
        <p style={styles.subText}>{content[index].subText}</p>
      </div>

      <center>
      <div style={styles.footer}>
        <button style={{ ...styles.button, ...styles.signUpButton }}>Register</button> <br /> <br />
        <button style={{ ...styles.button, ...styles.loginButton }}>Login</button>
      </div>  
      </center>
      

    </div>
  );
};


const styles = {
  container: {
   
    textAlign: 'center',
    
    
    width: '99%',
    // backgroundColor:'red',
    height: '95vh',
   
  },
  slide: {
    padding: '20px',
  },
  image: {
    width: '200px',
    height: '200px',
  },
  textdiv: {
    marginLeft: '5%',
    marginRight: '5%',
    marginTop:'3%',
  },
  mainText: {
    fontSize: '3em',
    fontWeight: 'bold',
    margin: '20px 0',
  },
  subText: {
    fontSize: '20px',
    color: 'gray',
  },
  footer: {
    maxWidth:'100%',
    width:'75%',
    position: 'absolute',
    bottom:'5%',
    marginLeft:'3%',
  
  },
  
  button: {
    
   
    fontSize: '10px',
    borderRadius: '20px',
   
    fontWeight:'bold',
    alignItems: 'center',
   
    
    marginRight:'15%',
    whiteSpace:'no-wrap',
    transition:'backgroundColor 0.3s ease',
  
  },
  signUpButton: {
    width:'100%',
    backgroundColor: '#6200ea',
    color: 'white',
    padding: '5%',
    marginTop:'30%',
    fontSize: '16px',
    border: 'none',
    borderRadius: '25px',
    marginLeft:'8%',
   
  },
  loginButton: {
    backgroundColor: '#e0e0e0',
    width:'100%',
    color: '#6200ea',
    padding:'5%',
    fontSize: '16px',
    border: 'none',
    borderRadius: '30px',
    marginLeft:'8%',
    
  },
  
};

export default Welcome;

