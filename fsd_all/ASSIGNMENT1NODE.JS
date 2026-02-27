import React, { useState } from "react";
import "./styles.css";

function App() {

  const [page, setPage] = useState("home");

  return (
    <div>

      {/* Navbar */}
      <div className="navbar">

        {/* Logo */}
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSZVBdSn-1xDcTSccAw3D6ISpSIP07nzFcQA&s"
          alt="Logo"
          className="logo-img"
          onClick={() => setPage("home")}
        />

        {/* Home Button */}
        <button onClick={() => setPage("home")}>Home</button>

        {/* Work Button */}
        <button>Work</button>

      </div>

      {/* Home Page */}
      {page === "home" && (
        <div className="home-container">

          {/* ABES College Image */}
          <div className="image-box">
            <img
              src="https://static.pw.live/5eb393ee95fab7468a79d189/GLOBAL_CMS/c9871dcb-2d7f-49c5-87c5-35378854556f.png"
              alt="ABES"
              className="college-img"
            />
          </div>

          {/* Text */}
          <div>
            <h1>ABES College</h1>
          </div>

        </div>
      )}

    </div>
  );
}

//style.css

/* Navbar */
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 30px;
  border-bottom: 2px solid black;
}

/* Logo Image */
.logo-img {
  height: 40px;
  cursor: pointer;
}

/* Buttons */
button {
  padding: 6px 18px;
  cursor: pointer;
  font-size: 16px;
}

/* Home Page Layout */
.home-container {
  display: flex;
  gap: 50px;
  padding: 40px;
  align-items: center;
}

/* College Image Box */
.image-box {
  width: 200px;
  height: 200px;
}

.college-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}


export default App;
