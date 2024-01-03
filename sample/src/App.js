// import logo from './logo.svg';
// import './App.css';
import {useState} from "react";

function App() {
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
  // const[adv,setadv]=useState("");
  const[count,setcount]=useState(1);
  async function getadv(){
    // const res=await fetch("https://api.adviceslip.com/advice");
    // const data=await res.json();
    // setadv(data.slip.adv);
    setcount((c)=>c+1)
  }
return(
  <div>
  {/* <h1>{adv}</h1> */}
  <button onClick={getadv}>set  adv</button>
  <p>count {count} </p>
  </div>
);
}

export default App;
