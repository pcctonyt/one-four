import logo from "./logo.svg";
import "./App.css";

const App = () => {
  const name = "React";

  const facts = {
    releaseDate: "May 2013",
    language: "JavaScript",
    license: "MIT",
  };

  const AboutReact = () => {

    return `Release date: ${facts.releaseDate}. Language: ${facts.releaseDate}. License: ${facts.license}.`;
  }
  return(
    <div className="container">
      <img src="./logo.svg" alt="React logo" />
      <h1>{name}</h1>
      <div className="img-wrapper">
          <img src="./logo192.png" alt="React logo .png" />
      </div>
      <ol>React Information for L2
        <li>React favors the use of declarative,rather than imperative, programming.</li>
        <li>React is a JavaScript library for building User Interfaces.</li>
        <li>React uses a virtual DOM and compares that with the browser DOM to update the UI when needed.</li>
        <li>React uses reusable components in its applications.</li>
      </ol>
      <AboutReact />
    </div>
  )
};

export default App;
