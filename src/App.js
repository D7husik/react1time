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

// Small UI components
function Title({ text }) {
  return <h1>{text}</h1>;
}

function Subtitle({ text }) {
  return <h2>{text}</h2>;
}

function Paragraph({ text }) {
  return <p>{text}</p>;
}

function HighlightBox({ children }) {
  return (
    <div style={{ padding: "12px", border: "2px solid black", marginTop: "10px" }}>
      {children}
    </div>
  );
}

// Student card component
function StudentCard({ name, group, favoriteSubject }) {
  return (
    <div style={{ border: "1px solid gray", padding: "10px", marginBottom: "10px" }}>
      <h3>{name}</h3>
      <p>Group: {group}</p>
      <p>Favorite Subject: {favoriteSubject}</p>
    </div>
  );
}

function App() {
  const students = [
    { id: 1, name: "Aigul", group: "G-12", favoriteSubject: "Math" },
    { id: 2, name: "Rustam", group: "G-10", favoriteSubject: "Physics" },
    { id: 3, name: "Adilet", group: "G-11", favoriteSubject: "Computer Science" }
  ];

  return (
    <div style={{ padding: "20px" }}>
      <Title text="About This Course" />
      <Subtitle text="React Basics" />

      <Paragraph text="JSX" />
      <Paragraph text="para check." />

      <HighlightBox>
        <strong>Key idea:</strong> check key tyepa.
      </HighlightBox>

      <hr style={{ margin: "20px 0" }} />

      <Subtitle text="Student List" />

      
      {students.map((s) => (
        <StudentCard
          key={s.id}
          name={s.name}
          group={s.group}
          favoriteSubject={s.favoriteSubject}
        />
      ))}
    </div>
  );
}

export default App;
