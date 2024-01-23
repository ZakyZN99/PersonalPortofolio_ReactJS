import scrollUp from "../img/ArrowUp.svg";
import React from 'react';

export const ScrollUp = () => {
    window.addEventListener("scrollup", function(){
        const sUp = document.querySelector(".scrollup-icon");
        if( this.scrollY >=200) sUp.className.add("show-scroll");
        else sUp.className.remove("show-scroll");
    })
  return (
    <div className="scrollup-icon">
      <a href="#" >
        <img src={scrollUp} width={50} ></img>
      </a>
    </div>
  );
};
