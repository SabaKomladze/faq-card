import "./App.css";
import { useState } from "react";
import { question } from "./Questions";
import mobile from "./assets/illustration-woman-online-mobile.svg";
import desktop from "./assets/illustration-woman-online-desktop.svg";
import SingleQuestion from "./SingleQuestion";
import box from "./assets/illustration-box-desktop.svg";
function App() {
  const [quests] = useState(question);
  return (
    <div className="app">
      <div className="images">
        <img src={mobile} alt="" className="mobile" />
        <img src={desktop} alt="" className="desktop" />
        <img src={box} alt="" className="box" />
      </div>
      <article>
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
