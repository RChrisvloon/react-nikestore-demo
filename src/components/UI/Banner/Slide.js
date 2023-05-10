import React from 'react';
import classes from './Slide.module.css';

// Text that's displayed in Banner-Component
const Slide = (props) => {
  return (
    <div className={classes.slide}>
      <p>{props.text}</p> {props.subText && <span>{props.subText}</span>}
    </div>
  );
}

export default Slide;