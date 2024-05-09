import { useState } from "react";
import "./Carousel.css";
import Card from "./Card";


/** Carousel: displays images and arrows to navigate through them
 * 
 * Props:
 * - photos: array of {src, caption} objects
 * - title: string describing the collection of images
 * 
 * State:
 * - currCardIdx: integer for current card index
 * 
 * App --> Carousel --> Card
 */
 function Carousel({ photos, title }) {
  const [currCardIdx, setCurrCardIdx] = useState(0);

  const currCard = photos[currCardIdx];
  const total = photos.length;

  //Increments currCardIdx state by 1
  function goForward() {
    setCurrCardIdx(currCardIdx + 1);
  }

  //Decrement currCardIdx state by 1
  //correction to code
  function goBackward() {
    setCurrCardIdx(currCardIdx - 1);
  }

  function showLeftArrow(){
    if(currCardIdx > 0){
      return (
        <i
          className="bi bi-arrow-left-circle"
          onClick={goBackward}
        /> 
      )
    }
  }

  function showRightArrow(){
    if(currCardIdx < 2){
      return (
        <i
          className="bi bi-arrow-right-circle"
          onClick={goForward}
        />
      )

    }
  }

  return (
    <div className="Carousel">
      <h1>{title}</h1>
      <div className="Carousel-main">
        {/* don't forget '()' */}
        {showLeftArrow()}
      {/* original code */}
        {/* <i
          className="bi bi-arrow-left-circle"
          onClick={goForward}
        /> */}
        
  
      
        <Card
          caption={currCard.caption}
          src={currCard.src}
          currNum={currCardIdx + 1}
          totalNum={total}
        />
        {/* don't forget '()' */}
        {showRightArrow()}
        {/* original code */}
        {/* <i
          className="bi bi-arrow-right-circle"
          onClick={goForward}
        /> */}
      </div>
    </div>
  );
}

export default Carousel;
