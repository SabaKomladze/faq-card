import "./App.css";
import { useState } from "react";
import { question } from "./Questions";
import mobile from "./assets/illustration-woman-online-mobile.svg";
import desktop from "./assets/illustration-woman-online-desktop.svg";
import SingleQuestion from "./SingleQuestion";
import box from "./assets/illustration-box-desktop.svg";
import mobpattern from "./assets/bg-pattern-mobile.svg";
import deskpattern from "./assets/bg-pattern-desktop.svg";
function App() {
  const [quests] = useState(question);
  return (
    <div className="app">
      <div className="layer">
        <img src={deskpattern} alt="" className="desk-pattern" />
        <img src={mobpattern} alt="" className="mob-pattern" />
      </div>

      <img src={mobile} alt="" className="mobile" />
      <img src={desktop} alt="" className="desktop" />
      <img src={box} alt="" className="box" />

      <article className="faq">
        <h1 className="text">FAQ</h1>
        {quests.map((quest, index) => (
          <SingleQuestion
            key={index}
            question={quest.question}
            answer={quest.answer}
          />
        ))}
      </article>
    </div>
  );
}

export default App;
