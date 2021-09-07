import React from "react";

function QuestionItem(
  { id, prompt, answers, correctIndex, onQuestionDelete, onAnswerChange }
) {
  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));

  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select defaultValue={correctIndex} onChange={(e) => onAnswerChange(id, e.target.value)}>{options}</select>
      </label>
      <button onClick={() => onQuestionDelete(id)}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
