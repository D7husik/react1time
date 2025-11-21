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


function Welcome(props) {
  return <h2>Welcome, {props.name}!</h2>;
}

function App() {
  return (
    <div>
      <h1>Engineering College React Demo</h1>
      <Welcome name="Aida" />
      <Welcome name="Nurlan" />
      <Welcome name="Dastan" />
    </div>
  );
}

export default App;