import { useState } from "react";
import "./index.css";
const messages = [
    'Learn React ⚛️',
    'Apply for jobs 💼',
    'Invest your new income 🤑',
  ];

export default function Step(){
    const [step,setStep]=useState(1);
    const [open,setOpen]=useState(true);
    function close(){
    setOpen(!open);
    }

    function Prev(){
       if(step>1) setStep( step- 1);
    }
    function Next(){
        if (step<3)setStep(step+1);
    }
    return(
       <>
       <div>
    <button className="close" onClick={close} >&times;</button>
       </div>
      {open && <div className='steps'>
            <div className="numbers">
                <div className={step >=1 ? 'active':""}>1</div>
                <div className={step >=2 ? 'active':""}>2</div>
                <div className={step >=3 ? 'active':""}>3</div>
                </div>
            <p className="message">Step{step}:{messages[step-1]}</p>
        <div className="buttons" >
            <button style={{backgroundColor:'greenyellow'}} onClick={Prev}>previous</button>
            <button style={{backgroundColor:'greenyellow'}} onClick={Next}>Next</button>
            </div>
        </div>}</> 

    )
}