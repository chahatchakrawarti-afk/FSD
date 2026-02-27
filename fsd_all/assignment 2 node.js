//app.js
import { useState } from "react";

function App() {
  const [result, setResult] = useState("");

  const getData = async (endpoint, label) => {
    const res = await fetch(`http://localhost:5000/${endpoint}`);
    const data = await res.json();
    const value = Object.values(data)[0];
    setResult(`${label}: ${value}`);
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.heading}>Work with OS</h2>

        <div style={styles.buttonGrid}>
          <button
            style={styles.button}
            onClick={() => getData("free-memory", "Free Memory")}
          >
            Free Memory
          </button>

          <button
            style={styles.button}
            onClick={() => getData("total-memory", "Total Memory")}
          >
            Total Memory
          </button>

          <button
            style={styles.button}
            onClick={() => getData("cpu-arch", "CPU Architecture")}
          >
            CPU Architecture
          </button>

          <button
            style={styles.button}
            onClick={() => getData("user-info", "User Info")}
          >
            User Info
          </button>
        </div>

        <p style={styles.result}>
          {result || ""}
        </p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#4f46e5"
  },
  card: {
    background: "white",
    padding: "40px",
    width: "400px",
    borderRadius: "15px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
    textAlign: "center"
  },
  heading: {
    marginBottom: "25px"
  },
  buttonGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "15px"
  },
  button: {
    padding: "10px",
    borderRadius: "8px",
    border: "none",
    background: "#6366f1",
    color: "white",
    fontWeight: "bold",
    cursor: "pointer"
  },
  result: {
    marginTop: "20px",
    fontWeight: "bold"
  }
};

export default App;

//server.js

const express = require("express");
const cors = require("cors");
const os = require("os");

const app = express();
app.use(cors());

const PORT = 5000;

app.get("/", (req, res) => {
  res.send("Backend is running...");
});

app.get("/free-memory", (req, res) => {
  res.json({ freeMemory: os.freemem() });
});

app.get("/total-memory", (req, res) => {
  res.json({ totalMemory: os.totalmem() });
});

app.get("/cpu-arch", (req, res) => {
  res.json({ cpuArch: os.arch() });
});

app.get("/user-info", (req, res) => {
  res.json(os.userInfo());
});

app.listen(PORT, () => {
  console.log("Server running on http://localhost:5000");
});

//index.css

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: Arial, sans-serif;
}
