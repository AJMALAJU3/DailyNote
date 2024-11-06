import React from 'react';
import Signin from '../components/Login/Signin';
import dust from '../assets/dust.jpg';

function Login() {
  return (
    <div 
      className='w-[100vw] h-[100vh] absolute top-0 left-0 m-0 flex justify-center items-center ' 
      style={{
        backgroundImage: `url(${dust})`,
        backgroundSize: 'cover',       
        backgroundPosition: 'center',  
        backgroundAttachment: 'fixed', 
      }}
    >
      {/* <div 
        className='w-[100vw] h-[100vh] absolute top-0 left-0 ' 
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }} 
      /> */}
      
      <Signin />
    </div>
  );
}

export default Login;
