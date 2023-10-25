import React from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const FaqQuestion = ({ question, answer }) => {
  const [showAnswer, setShowAnswer] = React.useState(false);

  return (
    <>
      <div className="questions">
        <h4 className="accordion">{question}</h4>

        <button className="pannel" onClick={() => setShowAnswer(!showAnswer)}>
          {showAnswer ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </div>
      {showAnswer && <p className="answer">{answer}</p>}
    </>
  );
};

export default FaqQuestion;
