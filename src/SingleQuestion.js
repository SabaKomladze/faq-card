import { useState } from "react";
import downArrow from "./assets/icon-arrow-down.svg";
export default function SingleQuestion({ question, answer }) {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div className="article" onClick={() => setIsVisible(!isVisible)}>
      <article className="head">
        <h2 className={isVisible ? "headeractive" : "header"}>{question}</h2>
        {isVisible ? (
          <img src={downArrow} className="rotate" alt="arrowdown" />
        ) : (
          <img src={downArrow} alt="arrowup" />
        )}
      </article>
      {isVisible ? <p className="answer transitionelement">{answer}</p> : null}
      <hr></hr>
    </div>
  );
}
