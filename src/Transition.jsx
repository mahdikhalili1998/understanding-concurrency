import { useState } from "react";

function arryCreator(num = 10) {
  const arry = [];
  for (let index = num; index > 0; index--) {
    arry.push(index);
  }
  return arry;
}
function Transition() {
  const [number, setNumber] = useState(arryCreator());
  const [text, setText] = useState("");
  const changeHandler = (e) => {
    setText(e.target.value);
    setNumber(arryCreator(e.target.value));
  };
  console.log(text);
  return (
    <div>
      <input
        type="text"
        value={text}
        placeholder="type number"
        onChange={changeHandler}
      />
      {number.map((item) => (
        <p key={item}>{item}</p>
      ))}
    </div>
  );
}

export default Transition;
