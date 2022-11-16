import React from "react";
import Questions from "./Questions";
import data from "./data";

function App() {
  return (
    <main>
      <div className="container">
        <h3>questions and answers about login</h3>
        <section className="info">
          {data.map((question) => {
            return <Questions key={question.id} {...question} />;
          })}
        </section>
      </div>
    </main>
  );
}

export default App;
