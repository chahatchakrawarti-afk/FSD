import { useState } from "react";

import "./App.css";



function App() {

  const topics = [

    { id: 1, name: "Introduction to React", detail: "React is a JavaScript library for building user interfaces." },

    { id: 2, name: "Components and Props", detail: "Components let you split the UI into reusable pieces. Props are used to pass data." },

    { id: 3, name: "State and Lifecycle", detail: "State holds dynamic data, and lifecycle methods help manage component updates." },

    { id: 4, name: "Handling Events", detail: "React handles events similarly to DOM elements, but with camelCase naming." },

    { id: 5, name: "Conditional Rendering", detail: "Render elements based on conditions using if statements or ternary operators." },

    { id: 6, name: "Lists and Keys", detail: "Use map() to render lists, and keys help React identify changed items." },

    { id: 7, name: "Forms", detail: "Controlled components keep input values in sync with component state." },

    { id: 8, name: "Lifting State Up", detail: "Move shared state up to the closest common ancestor to synchronize data." },

    { id: 9, name: "Composition vs Inheritance", detail: "React prefers composition over inheritance for component reuse." },

    { id: 10, name: "React Hooks (useState, useEffect)", detail: "Hooks let you use state and other features without writing a class." },

  ];



  const [selectedTopic, setSelectedTopic] = useState(null);



  return (

    <div className="container">

      <h1>React Tutorial</h1>

      <h2>Topics</h2>



      {/* Table of topics */}

      <table border="1" cellPadding="10" cellSpacing="0" style={{ margin: "auto" }}>

        <thead>

          <tr>

            <th>Sr. No.</th>

            <th>Topic Name</th>

          </tr>

        </thead>

        <tbody>

          {topics.map((topic) => (

            <tr

              key={topic.id}

              onClick={() => setSelectedTopic(topic)}

              style={{

                cursor: "pointer",

                backgroundColor: "white",

                color: "black",

              }}

            >

              <td>{topic.id}</td>

              <td>{topic.name}</td>

            </tr>

          ))}

        </tbody>

      </table>



      {/* Modal Section */}

      {selectedTopic && (

        <div className="modal-overlay" onClick={() => setSelectedTopic(null)}>

          <div

            className="modal-content"

            onClick={(e) => e.stopPropagation()} // prevent close when clicking inside

          >

            <h2>{selectedTopic.name}</h2>

            <p>{selectedTopic.detail}</p>

            <button onClick={() => setSelectedTopic(null)}>Close</button>

          </div>

        </div>

      )}



      <p className="read-the-docs">Click on a topic to see its details</p>

    </div>

  );

}



export default App;