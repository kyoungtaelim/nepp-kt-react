// import logo from './logo.svg';
// import './App.css';
// import MyComponent from "./components/MyComponents";
// import Counter from "./components/Counter.jsx";

import Info from "./components/info";
import { useState } from "react";
// import Counter2 from "./components/Counter2.jsx";

// import Say from "./components/Say";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// function App() {
//   return (
//     <>
//       <MyComponent name="react">
//         <h3>안녕</h3>
//         <h4>안녕2</h4>
//       <MyComponent />
//       <MyComponent />
//     </>
//   );
// }

function App() {
  const [showinfo, setShowinfo] = useState(false);
  return (
    <div>
      <button
        onClick={() => {
          setShowinfo(true);
        }}
      >
        Info 나오기
      </button>
      <button
        onClick={() => {
          setShowinfo(false);
        }}
      >
        Info 제거하기
      </button>
      {showinfo === true && <Info></Info>}
    </div>
  );
}

// function App() {
//   return (
//     <>
//       <Say></Say>
//     </>
//   );
// }

export default App;
