import { Container } from "@mui/system";
import React, { useState } from "react";
import { dataQuizList, quizTemplate } from "./DataQuiz";
import DataQuizForm from "./DataQuizForm";
import QuizDemo from "./QuizDemo";
import QuizTable from "./QuizTable";

const pagesFlow = {
  tableList: "tableList",
  dataQuizForm: "dataQuizForm",
  quizDemo: "quizDemo",
};

const QuizFlow = () => {
  const [currentPage, setCurrentPage] = useState(pagesFlow.tableList);
  const [quizSelected, setQuizSelected] = useState(quizTemplate);
  const [isNewQuiz, setIsNewQuiz] = useState(true);
  const [quizList, setQuizList] = useState(dataQuizList);

  const createNewQuiz = () => {
    setQuizSelected(quizTemplate);
    setIsNewQuiz(true);
    setCurrentPage(pagesFlow.dataQuizForm);
  };
  const onBack = () => {
    setCurrentPage(pagesFlow.tableList);
    setQuizSelected(null);
  };

  const onSaveQuiz = (data) => {
    if (isNewQuiz) {
      data.id = Math.max(...quizList.map((x) => x.id)) + 1;
      let newList = [...quizList, data];
      setQuizList(newList);
    } else {
      let index = quizList.findIndex((item) => item.id == data.id);
      quizList[index] = data;
      setQuizList(quizList);
    }

    setCurrentPage(pagesFlow.tableList);
    setQuizSelected(null);
  };

  const onViewData = (data) => {
    setCurrentPage(pagesFlow.dataQuizForm);
    setQuizSelected(data);
    setIsNewQuiz(false);
  };

  const onViewDemo = (data) => {
    setQuizSelected(data);
    setCurrentPage(pagesFlow.quizDemo);
  };

  const onDelete = (data) => {
    if (data && data.id) {
      let newList = quizList.filter((item) => item.id !== data.id);
      setQuizList(newList);
      setCurrentPage(pagesFlow.tableList);
      setQuizSelected(null);
    }
  };

  return (
    <Container>
      {pagesFlow.tableList === currentPage ? (
        <>
          <QuizTable
            data={quizList}
            onViewData={onViewData}
            onViewDemo={onViewDemo}
            createNewQuiz={createNewQuiz}
            onDelete={onDelete}
          />
        </>
      ) : pagesFlow.quizDemo === currentPage ? (
        <QuizDemo data={quizSelected} onBack={onBack} />
      ) : (
        <DataQuizForm
          onClick={onSaveQuiz}
          data={quizSelected}
          isNewQuiz={isNewQuiz}
          onBack={onBack}
        />
      )}
    </Container>
  );
};

export default QuizFlow;
