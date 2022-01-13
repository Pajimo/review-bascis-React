import React from "react";
import Review from "./Review";
function App() {
  return (
    <main>
      <section className="container">
        <h3 className="title">Our Reviews</h3>
        <div className="underline"></div>
        <Review />{" "}
      </section>
    </main>
  );
}

export default App;
