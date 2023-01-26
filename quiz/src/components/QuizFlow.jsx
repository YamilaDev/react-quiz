import { Button, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";  
import { useSelector, useDispatch } from 'react-redux';
import { styled } from "@mui/system";
import DataQuizForm from "./DataQuizForm";
import QuizDemo from "./QuizDemo";
import QuizTable from "./QuizTable";  

const pagesFlow = { tableList: "tableList", dataQuizForm: "dataQuizForm" , quizDemo:"quizDemo"};


const QuizFlow = ({data , quizTamplate}) => {
     
  const [currentPage, setCurrentPage] = useState(pagesFlow.tableList);
  const [quizSelected, setQuizSelected] = useState(null);
  const [isNewQuiz, setIsNewQuiz] = useState(true);
  const [quizList, setQuizList] = useState(data);

  const createNewQuiz = () => {
    setCurrentPage(pagesFlow.dataQuizForm);
    setQuizSelected(quizTamplate);
    setIsNewQuiz(true);
  };
  const onBack = () => {
    setCurrentPage(pagesFlow.tableList);
  };

  const onSaveQuiz = (data) => { 
    if (isNewQuiz) {
      let newList = [...quizList, data];
      setQuizList(newList);
    }
    setCurrentPage(pagesFlow.tableList);
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

  return (
    <Container>
      {pagesFlow.tableList === currentPage ? (
        <>
          <QuizTable data={quizList}
            onViewData={onViewData}
            onViewDemo={onViewDemo}
            createNewQuiz={createNewQuiz} />
        </>
      ) : pagesFlow.quizDemo === currentPage ? (
        <QuizDemo data={quizSelected} onBack={onBack} />
      ) :

        (
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
 
const mapStateToProps = (state) => {
  return {
     data: state.quizReducer.quizList ,
     quizTamplate :state.quizReducer.quizTamplate};
  };

export default connect(mapStateToProps)(QuizFlow);
