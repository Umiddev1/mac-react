import React, { useState } from 'react';
import img1 from './img/mac-gold.webp';
import img2 from './img/mac-gold-top.webp';
import img3 from './img/mac-gold-key.webp';
import img4 from './img/mac-gold-right.webp';
import img5 from './img/mac-gold-left.webp';
import './MacImg.css';
function MacImg() {
  const [imgmc,stateImg] = useState(img1)

  function oneFunc() {
    stateImg(img1)
  }
  function twoFunc() {
    stateImg(img2)
  }
  function threeFunc() {
    stateImg(img3)
  }
  function fourFunc() {
    stateImg(img4)
  }
  function fifeFunc() {
    stateImg(img5);
  }
  return (
    <div className="macimgs col-md-6">
      <img className="imgs" src={imgmc} alt="img"/>
      <div className="miniimgs">
        <img className="mini__img" onClick={oneFunc} src={img1} alt="img" />
        <img className="mini__img" onClick={twoFunc} src={img2} alt="img" />
        <img className="mini__img" onClick={threeFunc}  src={img3} alt="img" />
        <img className="mini__img" onClick={fourFunc} src={img4} alt="img" />
        <img className="mini__img" onClick={fifeFunc} src={img5} alt="img" />
      </div>
    </div>
  )
}

export default MacImg;