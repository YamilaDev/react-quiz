import { Button, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getQuizList } from "../redux/actions/QuizActions";
import TableList from "./TableList";

import { styled } from "@mui/system";
import DataQuizForm from "./DataQuizForm";
import QuizDemo from "./QuizDemo";

const StyledButton = styled(Button)(() => ({
  marginTop: "2rem",
}));

const pagesFlow = { tableList: "tableList", dataQuizForm: "dataQuizForm" , quizDemo:"quizDemo"};

const QuizFlow = ({ getList }) => {
  const data = [
    {
      created: "2020-09-09 09:26:39",
      description: "Description",
      id: 29,
      modified: "2020-09-09 09:26:39",
      questions_answers: [
        {
          answer_id: null,
          answers: [
            { id: 122, is_true: false, text: "question 1 answer 1 false" },
            { id: 123, is_true: false, text: "question 1 answer 2 false" },
            { id: 124, is_true: true, text: "question 1 answer 3 true" },
            { id: 125, is_true: false, text: "question 1 answer 4 false" },
          ],
          feedback_false: "question 1 false feedback",
          feedback_true: "question 1 true feedback",
          id: 53,
          text: "question 1 text",
        },
        {
          answer_id: null,
          answers: [
            { id: 126, is_true: true, text: "question 2 answer 1 true" },
            { id: 127, is_true: false, text: "question 2 answer 2 false" },
          ],
          feedback_false: "question 2 false feedback",
          feedback_true: "question 2 true feedback",
          id: 54,
          text: "question 2 text",
        },
        {
          answer_id: null,
          answers: [
            { id: 128, is_true: false, text: "question 3 answer 1 false" },
            { id: 129, is_true: true, text: "question 3 answer 2 true" },
            { id: 130, is_true: false, text: "question 3 answer 3 false" },
          ],
          feedback_false: "question 3 false feedback",
          feedback_true: "question 3 true feedback",
          id: 55,
          text: "question 3 text",
        },
      ],
      score: null,
      title: "quiz title",
      url: "https://www.youtube.com/watch?v=e6EGQFJLl04",
    },
  ];
  const quizTamplate = {
    created: "2020-09-09 09:26:39",
    description: "Description",
    id: 29,
    modified: "2020-09-09 09:26:39",
    questions_answers: [
      {
        answer_id: null,
        answers: [
          { id: 122, is_true: false, text: "question 1 answer 1 false" },
          { id: 123, is_true: false, text: "question 1 answer 2 false" },
          { id: 124, is_true: true, text: "question 1 answer 3 true" },
          { id: 125, is_true: false, text: "question 1 answer 4 false" },
        ],
        feedback_false: "question 1 false feedback",
        feedback_true: "question 1 true feedback",
        id: 53,
        text: "question 1 text",
      },
      {
        answer_id: null,
        answers: [
          { id: 126, is_true: true, text: "question 2 answer 1 true" },
          { id: 127, is_true: false, text: "question 2 answer 2 false" },
        ],
        feedback_false: "question 2 false feedback",
        feedback_true: "question 2 true feedback",
        id: 54,
        text: "question 2 text",
      },
      {
        answer_id: null,
        answers: [
          { id: 128, is_true: false, text: "question 3 answer 1 false" },
          { id: 129, is_true: true, text: "question 3 answer 2 true" },
          { id: 130, is_true: false, text: "question 3 answer 3 false" },
        ],
        feedback_false: "question 3 false feedback",
        feedback_true: "question 3 true feedback",
        id: 55,
        text: "question 3 text",
      },
    ],
    score: null,
    title: "quiz title",
    url: "https://www.youtube.com/watch?v=e6EGQFJLl04",
  };
  const columns = [
    { key: 1, value: "Question" },
    { key: 2, value: "Description" },
    { key: 3, value: "Creation Date" },
    { key: 4, value: "Edited Date" },
    { key: 5, value: "Score" },
  ];

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
    console.log(data);
    console.log(quizList);
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
          <Typography
            align="center"
            variant="h3"
            component="h2"
            marginTop="3rem"
          >
            {"Quiz List"}
          </Typography>
          <StyledButton variant="contained" onClick={createNewQuiz}>
            Create new Quiz
          </StyledButton>
          <TableList rows={quizList} columns={columns} onClick={onViewData} onViewDemo={onViewDemo} />
        </>
      ) : pagesFlow.quizDemo === currentPage ? (
          <QuizDemo data={quizSelected} />
      ):
      
      (
        <DataQuizForm
          onClick={onSaveQuiz}
          data={quizSelected}
          isNewQuiz={isNewQuiz}
        />
      )}
    </Container>
  );
};

const mapStateToProps = (state) => {
  return { quizList: state.quizList };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getList: () => dispatch(getQuizList()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(QuizFlow);
