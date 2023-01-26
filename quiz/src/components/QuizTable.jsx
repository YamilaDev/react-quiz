import { Button, Typography } from "@mui/material"; 
import React, { useEffect, useState } from "react"; 
import TableList from "./TableList";

import { styled } from "@mui/system"; 
import { StyledButton } from "./common/StyledButton";



const QuizTable = ({ data ,  createNewQuiz , onViewData  , onViewDemo}) => {
  
  const columns = [
    { key: 1, value: "Question" },
    { key: 2, value: "Description" },
    { key: 3, value: "Creation Date" },
    { key: 4, value: "Edited Date" },
    { key: 5, value: "Score" },
  ]; 

  const onClickCreateNewQuiz = () => {
       createNewQuiz()
  };  
  const onClickViewData = (data) => {
      onViewData(data)
  };

  const onClickViewDemo = (data) => {
      onViewDemo(data)
  }; 

  return (
    <>
    <Typography
      align="center"
      variant="h3"
      component="h2"
      marginTop="3rem"
    >
      {"Quiz List"}
    </Typography>
    <StyledButton variant="contained" onClick={onClickCreateNewQuiz}>
      Create new Quiz
    </StyledButton>
    <TableList rows={data} columns={columns} onClick={onClickViewData} onViewDemo={onClickViewDemo} />
  </>
  );
};
 
export default QuizTable;
