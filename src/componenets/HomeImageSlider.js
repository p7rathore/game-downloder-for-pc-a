import React, { useState } from "react";
import img1 from "../images/Call-of-Duty-Warzone-1.jpg";
import img2 from "../images/Call-of-Duty-Warzone-2.jpg";
import img3 from "../images/Call-of-Duty-Warzone-3.jpg";
import img4 from "../images/Call-of-Duty-Warzone-4.jpg";
import img5 from "../images/Halo-Infinite-1.jpg";
import img6 from "../images/Halo-Infinite-2.jpg";
import img7 from "../images/Halo-Infinite-3.jpg";
import img8 from "../images/multiversus-1.jpg";

const HomeImageSlider = () => {
  const [allimg, setAllimg] = useState(0);
  const images = [img1, img2, img3, img4 ,img5,img6,img7,img8];
   
  setTimeout(()=>{
   next()
  },5000)

  const next = () => {
    setAllimg(allimg + 1);
    if (allimg === images.length - 1) {
      setAllimg(0);
    }
  };
 
  return (
    <>
      <div className="Imageslider">
        <img
          className="Slider-img"
          src={images[allimg]}
          alt="ImageSlider.jpg"
        />
      </div>
    </>
  );
};

export default HomeImageSlider;
