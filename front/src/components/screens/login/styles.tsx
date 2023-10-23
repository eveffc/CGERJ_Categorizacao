import React from 'react';

const styles={
container : {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    background: 'linear-gradient(to bottom, #005227, #038554)',
  },
  
 form : {
    background: '#fff',
    borderRadius: '8px',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',
    padding: '20px',
    width: '300px',
    textAlign: 'center',
  },
  
  
 input : {
    width: '80%',
    padding: '10px',
    justifyContent: 'center',
    alignItems: 'center',
    border: 'none',
    borderRadius: '4px',

  },
  
 submitButton : {
    backgroundColor: '#bf8a03',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    padding: '10px',
    cursor: 'pointer',
    width: '100%',
    fontWeight: 'bold',
  },
  
 submitButtonHover : {
    backgroundColor: '#00000',
  },

 actions : {
    marginTop: '10px',
    textAlign: 'center',
  }
}
export default styles;