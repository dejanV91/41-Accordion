import React from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

function Questions(title) {
  return (
    <article key={20} id={20} className="question">
      <header>
        <h4>{"title"}</h4>
        <button className="btn">
          <AiOutlinePlus />
        </button>
      </header>
      <p>{"nesto"}</p>
    </article>
  );
}

export default Questions;
