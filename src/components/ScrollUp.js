import scrollUp from "../img/ArrowUp.svg";
import React from 'react';

export const ScrollUp = () => {
    window.addEventListener("scrollup-icon", function(){
        const sUp = document.querySelector("scroll");
        if( this.scrollY >=500) sUp.className.add("scrollup-icon");
        else sUp.className.remove("scrollup-icon");
    })
  return (
    <div className="scrollup-icon">
      <a href="#home" >
        <img src={scrollUp} width={50} ></img>
      </a>
    </div>
  );
};
