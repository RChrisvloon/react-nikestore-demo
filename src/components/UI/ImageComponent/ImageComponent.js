import { Fragment, useState } from 'react';
import classes from './ImageComponent.module.css';
import Spinner from '../Spinner/Spinner';

const ImageComponent = (props) => {
  const [isLoading, setIsLoading] = useState(true);

  const handleImageLoad = () => {
    setIsLoading(false);
  }
  
  return (
    <Fragment>
      {isLoading && <Spinner />}
      <img className={[classes[props.className], isLoading ? 'is-hidden' : ''].join(' ')} src={props.src} alt={props.alt} onLoad={handleImageLoad} onClick={props.onClick}/>
    </Fragment>
  );
}

export default ImageComponent;