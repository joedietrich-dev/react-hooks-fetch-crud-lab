import React from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({ questions, onQuestionDelete, onAnswerChange }) {
  const questionList = questions.map(question => (
    <QuestionItem
      onQuestionDelete={onQuestionDelete}
      onAnswerChange={onAnswerChange}
      key={question.id}
      {...question} />))
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{questionList}</ul>
    </section>
  );
}

export default QuestionList;
