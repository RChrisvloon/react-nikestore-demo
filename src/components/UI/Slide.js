import React from 'react';
import classes from './Slide.module.css';

const Slide = (props) => {

  return (
    <div className={classes.slide}>
      <p>{props.text}</p> {props.subText && <span>{props.subText}</span>}
    </div>
  );
}

export default Slide;