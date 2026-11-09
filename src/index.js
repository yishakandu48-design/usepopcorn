import React, { useState } from "react";
import ReactDOM from "react-dom/client";
// import "./index.css";
// import App from "./App";
import StarRating from "./StarRating";
const root = ReactDOM.createRoot(document.getElementById("root"));
function Test() {
  const [movieRating, setMovieRating] = useState(0);
  return (
    <div>
      <StarRating
        maxRating={10}
        color={"orange"}
        onSetMovieRating={setMovieRating}
      />
      <p>This movie was rated {movieRating} stars</p>
    </div>
  );
}
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <StarRating
      maxRating={5}
      color={"red"}
      size={48 / 1.5}
      messages={["Terrible", "Bad", "Okay", "Good", "Excellent"]}
    />
    <Test />
  </React.StrictMode>,
);
