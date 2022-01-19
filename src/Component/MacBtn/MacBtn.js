import React, { useState } from 'react';
import './MacBtn.css'
function MacBtn() {
    const [ram,stateRam] = useState("8");

    function ramChange() {
      stateRam('16')
      stateSum(16354000)
    }
    function ramChangeOne() {stateRam('8')}

    const [memory,stateMemory] = useState("256")

    function changeMemory() {
      stateMemory('512')
      stateSum(14254500)
    }
    function changeMemoryOne() {stateMemory('256')}

    const [sum,stateSum] = useState(11550000);
    const [count,stateCount] = useState(1)
    function icrament() {
      stateCount(count + 1)
      stateSum(sum + sum)
    }
    function decramnet() {
      stateCount(count - 1)
      stateSum(sum - 11550000)
    }
  return (
    <div className="macbtn col-md-6">
      <div className="macbtn__des">
        <h2 className="macbtn__title">MacBook Air 13-inch</h2>
        <p className="macbtn__text">M1/<span className="macbtn__ram">{ram}</span>/<span className="macbtn__hard">{memory}</span> Gold</p>
      </div>
      <div className="macram">
      <p className="macram__text">Ram</p>
      <div className="macram__btns">
        <button className="btnss" onClick={ramChangeOne}>8GB</button>
        <button className="btnss" onClick={ramChange}>16GB</button>
      </div>
    </div>
    <div className="macmemory">
      <p className="macram__text">Xotira Hajmi</p>
      <div className="macram__btns">
        <button className="btnss" onClick={changeMemoryOne}>256GB</button>
        <button className="btnss" onClick={changeMemory}>512GB</button>
      </div>
    </div>
    <div className="macpirce">
        <div>
          <button className="btn btn-primary" onClick={decramnet}>-</button>
          <span className="macprice__text">{count}</span>
          <button className="btn btn-primary" onClick={icrament}>+</button>
        </div>
        <p className="macprice__sum"><span>{sum}</span> so'm</p>
    </div>
    </div>
  )
}
export default MacBtn;