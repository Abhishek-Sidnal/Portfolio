import React, { useContext } from 'react';
import './BackgroundAnimation.css'; // External CSS file for styling
import { ThemeContext } from '../../contexts/ThemeContext';

const BackgroundAnimation = () => {
  // Generate 50 list items
  const liElements = Array.from({ length: 25 }).map((_, index) => <li key={index}></li>);
  const { isDarkMode } = useContext(ThemeContext);

  return (

    // .background-dark
    <div className={isDarkMode?'background-dark':'background' }>
      <ul className={isDarkMode?'background-dark':'background' }>{liElements}</ul>
    </div>
  );
};

export default BackgroundAnimation;
