import { Button, Link, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React, { useEffect, useState } from "react"; 
import { styled } from "@mui/material/styles";
import { StyledButtonLarge } from "./common/StyledButton";

const StyledTypographyOption = styled("div")(({ disabledOption }) => ({
  backgroundColor: "beige",
  borderRadius: "4px",
  textAlign: "center",
  marginTop: "1rem",
  fontSize: "2rem",
  "&:hover": {
    transform: `${disabledOption ? "none" : "scale(1.02) perspective(0px)"}`,
    boxShadow: `${disabledOption ? "none" : "2px 2px 2px 2px #c0c099"}`,
    cursor: `${disabledOption ? "default" : `pointer`}`,
  },
}));


const StyledMessage = styled("div")(({ isSuccessOption }) => ({
  backgroundColor: isSuccessOption ? "green" : "red",
  borderRadius: "20px",
  textAlign: "center",
  marginTop: "1rem",
  fontSize: "2rem",
  color: "white",
  textTransform: "uppercase",
}));

const QuizDemo = (data) => {
    console.log(data)
  //const [change, setChange] = useState(true);
  const [currentQuestion, setQuestion] = useState(0);
  // const [currentAnswer, setCurrentAnswer] = useState(1);
  const [message, setMessage] = useState(null);
  const [isSuccessOption, setIsSuccessOption] = useState(false);
  const [score, setScore] = useState(0);
   
  const { title, description, url, id, questions_answers } = data.data;
  const [disabledOption, setDisabledOption] = useState(false); 

  useEffect(() => {}, []);

  const onClickAnswer = (itemAnswer, itemQuestion) => {
    setQuestion(itemQuestion.answer_id);
    if (itemAnswer.is_true) {
      setDisabledOption(true);
      setScore(score + 50);
      setMessage(itemQuestion.feedback_true);
      setIsSuccessOption(true);
    } else {
      setDisabledOption(true);
      setMessage(itemQuestion.feedback_false);
      setIsSuccessOption(false);
    }
  };

  const onNextQuestion = () => {
    setQuestion(currentQuestion + 1);
    setMessage(null);
  };
  return (
    <Container maxWidth="sm">
         <Typography align="center" variant="h3" component="h2" marginTop="3rem">
        {'Demo'}
      </Typography>
      <Typography align="center" variant="h3" component="h2" marginTop="3rem">
        {title}
      </Typography>
      <Typography align="center" variant="h5" component="h2" marginTop="1rem">
        {description}
      </Typography>

      {questions_answers &&
        questions_answers.map(
          (itemQuestion , index) =>
            currentQuestion == index && (
              <>
                <Typography
                  key={itemQuestion.answer_id}
                  align="center"
                  variant="h5"
                  component="h2"
                  marginTop="1rem"
                >
                  {itemQuestion.text}
                </Typography>

                {itemQuestion &&
                  itemQuestion.answers &&
                  itemQuestion.answers.map((itemAnswer) => (
                    <div
                      key={itemAnswer.id}
                      onClick={() => {
                        onClickAnswer(itemAnswer, itemQuestion);
                      }}
                    >
                      <StyledTypographyOption disabledOption={disabledOption}>
                        {itemAnswer.text}
                      </StyledTypographyOption>
                    </div>
                  ))}
              </>
            )
        )}
      <StyledMessage isSuccessOption={isSuccessOption}>{message}</StyledMessage>

      <div onClick={() => onNextQuestion()}>
        <StyledButtonLarge disabledOption={disabledOption}>{"Next"}</StyledButtonLarge>
      </div>
      <Typography align="center" variant="h5" component="h2" marginTop="2rem">
        {`${"Total Score :  "}${score}`}
      </Typography>

      <Link href="#" align="center" component="h2" marginTop="3rem">
        {url}
      </Link>
    </Container>
  );
};

export default QuizDemo;
