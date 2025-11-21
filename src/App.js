import logo from './logo.svg';
import './App.css';

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

// export default App;

import { useState } from "react";

// Counter component
function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ marginBottom: "20px" }}>
      <h3>Counter: {count}</h3>
      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={() => setCount(count + 1)} style={{ marginLeft: "10px" }}>
        +
      </button>
    </div>
  );
}

// Toggle details component
function CourseInfo() {
  const [show, setShow] = useState(false);

  return (
    <div style={{ marginBottom: "20px" }}>
      <h3>Course: React Basics</h3>
      <button onClick={() => setShow(!show)}>
        {show ? "Hide details" : "Show details"}
      </button>

      {show && (
        <p style={{ marginTop: "10px" }}>
          This course teaches JSX, components, props, and state management using hooks.
        </p>
      )}
    </div>
  );
}

// Controlled input with live preview
function LivePreview() {
  const [text, setText] = useState("");

  return (
    <div style={{ marginBottom: "20px" }}>
      <h3>Live Preview</h3>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type something..."
      />
      <p>You typed: {text}</p>
    </div>
  );
}

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <Counter />
      <CourseInfo />
      <LivePreview />
    </div>
  );
}

export default App;
