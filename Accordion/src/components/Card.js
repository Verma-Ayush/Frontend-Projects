import React from "react";
import Question from "./Ques";
import questions from "./Data";

//Note We don't have to make 5 states , it's a repitative work.
export default function Card() {
  return (
    <div className="Card">
      <div className="subtitle">Questions And Answers About Login</div>
      <div className="Ques">
        {questions.map((e) => {
          return <Question title={e.title} info={e.info} key={e.id} />;
        })}
      </div>
    </div>
  );
}
