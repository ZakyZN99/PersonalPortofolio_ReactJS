import scrollUp from "../img/ArrowUp.svg";
import React from 'react';

export const ScrollUp = () => {
  
    window.onscroll = function(){
        if( document.body.scrollTop >100 || document.documentElement.scrollTop > 100 ) {
          document.getElementById("scrollup-icon").style.display = "block";
        }else{
          document.getElementById("scrollup-icon").style.display = "none";
        }
    }

    function  topPage(){
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }
  return (
    <div className="scrollup-icon" id="scrollup-icon">
      <a onClick={topPage} >
        <img src={scrollUp} width={50} ></img>
      </a>
    </div>
  );
};
