import React, { useEffect, useState } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/questions")
      .then(res => res.json())
      .then(data => setQuestions(data));
  }, []);

  function handleQuestionAdd(question) {
    setQuestions([...questions, question]);
  }
  function handleQuestionDelete(id) {
    fetch(`http://localhost:4000/questions/${id}`,
      {
        method: 'DELETE',
        headers: { "Content-Type": "application/json" },
      }
    )
      .then(() => setQuestions(questions.filter(question => question.id !== id)))
  }
  function handleAnswerChange(id, answerIndex) {
    fetch(`http://localhost:4000/questions/${id}`,
      {
        method: 'PATCH',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ correctIndex: answerIndex })
      }).then(res => res.json())
      .then(data => setQuestions(questions.map(question => {
        return (question.id === id) ? data : question;
      })))
  }

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ?
        <QuestionForm addQuestion={handleQuestionAdd} /> :
        <QuestionList
          questions={questions}
          onQuestionDelete={handleQuestionDelete}
          onAnswerChange={handleAnswerChange} />}
    </main>
  );
}

export default App;
