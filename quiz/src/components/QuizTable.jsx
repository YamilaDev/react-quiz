import { Typography } from "@mui/material";
import React from "react";
import TableList from "./TableList";
import { StyledButton } from "./common/StyledButton";

const QuizTable = ({
  data,
  createNewQuiz,
  onViewData,
  onViewDemo,
  onDelete,
}) => {
  const columns = [
    { key: 1, value: "Question" },
    { key: 2, value: "Description" },
    { key: 3, value: "Creation Date" },
    { key: 4, value: "url" },
    { key: 5, value: "Score" },
  ];

  const onClickCreateNewQuiz = () => {
    createNewQuiz();
  };
  const onClickViewData = (data) => {
    onViewData(data);
  };

  const onClickViewDemo = (data) => {
    onViewDemo(data);
  };

  return (
    <>
      <Typography align="center" variant="h3" component="h2" marginTop="3rem">
        {"Quiz List"}
      </Typography>
      <StyledButton variant="contained" onClick={onClickCreateNewQuiz}>
        Create new Quiz
      </StyledButton>
      <TableList
        rows={data}
        columns={columns}
        onClick={onClickViewData}
        onViewDemo={onClickViewDemo}
        onDelete={onDelete}
      />
    </>
  );
};

export default QuizTable;
