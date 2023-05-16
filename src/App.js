import "./App.css";
import { useState } from "react";
import { question } from "./Questions";
import mobile from "./assets/illustration-woman-online-mobile.svg";
import desktop from "./assets/illustration-woman-online-desktop.svg";
import SingleQuestion from "./SingleQuestion";
function App() {
  const [quests] = useState(question);
  return (
    <div className="app">
      <article>
        <img src={mobile} alt="" className="mobile"/>
      </article>
      <article>
        <h1>FAQ</h1>
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
