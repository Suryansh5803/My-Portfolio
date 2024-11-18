/* import React from 'react';
import { Canvas } from '@react-three/fiber';
import profilePic from '../../assets/profile-pic (5).png';
import { styles } from './styles';
 */
const Computers = () => {
  const profilePicStyle = {
    width: '180px', /* Base size */
    height: '180px', /* Base height */
    borderRadius: '50%', /* Make it a circle */
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)', /* Add a subtle shadow */
    transition: 'transform 0.3s ease, box-shadow 0.3s ease', /* Smooth transition */
    filter: 'grayscale(0)', /* Example: grayscale */
    position: 'relative', /* or 'absolute' depending on the use case */
    
    /* Responsive styles */
    '@media (max-width: 1024px)': { /* Tablet screens */
      width: '150px',
      height: '150px',
      top: '400px',
      left: '300px',
    },
    '@media (max-width: 768px)': { /* Small tablet screens */
      width: '120px',
      height: '120px',
      top: '300px',
      left: '200px',
    },
    '@media (max-width: 480px)': { /* Mobile screens */
      width: '100px',
      height: '100px',
      top: '200px',
      left: '100px',
    },
  };

  const handleMouseOver = (event) => {
    event.target.style.transform = 'scale(1.1)'; /* Slightly increase size on hover */
    event.target.style.boxShadow = '0px 6px 15px rgba(0, 0, 0, 0.3)'; /* Enhance shadow on hover */
    event.target.style.filter = 'grayscale(0%)'; /* Remove grayscale on hover */
  };

  const handleMouseOut = (event) => {
    event.target.style.transform = 'scale(1)'; /* Reset size */
    event.target.style.boxShadow = '0px 4px 10px rgba(0, 0, 0, 0.2)'; /* Reset shadow */
    event.target.style.filter = 'grayscale(0%)'; /* Reset grayscale */
  };

  return (
    <div>
      <img
        className='profile-pic'
        src={profilePic}
        alt="Profile"
        style={profilePicStyle}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      />
    </div>
  );
};

export default Computers;
