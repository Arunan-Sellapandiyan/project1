import { useState, useEffect } from "react";

export default function SamDate() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);
  const [date, setDate] = useState(new Date(" 20  Nov 2020"));

  useEffect(() => {
    const newDate = new Date("20 Nov 2020");
    newDate.setDate(newDate.getDate() + count);
    setDate(newDate);
  }, [count]);
  function handleStepChange(e) {
    setStep(Number(e.target.value));
  }
  function handleCountChange(e) {
    setCount(Number(e.target.value));
  }
  function Reset(){
    setCount(0);
    setStep(1);
  }
  function decre() {
    setCount((c) => c - step);
  }

  function incre() {
    setCount((c) => c + step);
  }
  // function decr() {
  //   setStep((s) => s - 1);
  // }

  // function incr() {
  //   setStep((s) => s + 1);
  // }

  return (
    <>
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={handleStepChange}
        />

        <span>Step:{step}</span>
      </div>
      {/* <div>
        <button  onClick={decr} >-</button>
        <div>step: {step}</div>
        <button onClick={incr}>+</button>
      </div> */}

      <div>
        <button onClick={decre}>-</button>
        <div>
          <input
            type="number"
            value={count}
            onChange={handleCountChange}
          />
          {/* <div>count:{count}</div> */}
        </div>
        <button onClick={incre}>+</button>
      </div>

      <p>
        <span>
          {count === 0
            ? "Today is "
            : count > 0
            ? `${count} days from  is `
            : `${Math.abs(count)} days ago was`}
        </span>
        <span>{date.toDateString()}</span>
      </p>
      {count !==0 || step !==1?
      (<button onClick={Reset}>Reset</button>):null}
    </>
  );
}
