import { Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import { StyledButton } from "./common/StyledButton";

const DataQuizForm = ({ onClick, data, isNewQuiz, onBack }) => {
  const [disabled, setSetDisabled] = useState(false);

  const [values, setValues] = useState({
    title: data.title,
    description: data.description,
    url: data.url,  
    score: data.score,
  });

  useEffect(() => {
    data && !isNewQuiz && setSetDisabled(true);
  }, []);

  const onSaveQuiz = () => {
    let newData = { ...data, ...values };
    disabled ? setSetDisabled(false) : onClick(newData);
  };

  const onClickBack = () => {
    onBack();
  };

  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };

  return (
    <>
      <Typography align="center" variant="h5" component="h2" marginTop="1rem">
        {disabled ? "Edit Quiz" : "Create new Quiz"}
      </Typography>
      <StyledButton onClick={onSaveQuiz}>
        {disabled ? "Edit" : "Save"}
      </StyledButton>
      <StyledButton onClick={onClickBack}>
        {disabled ? "Back" : "Cancel"}
      </StyledButton>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Typography
            align="left"
            variant="subtitle2"
            margin="1rem"
            textTransform="uppercase"
          >
            {"Quiz name and drescription"}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <FormControl
            fullWidth
            sx={{ m: 1, width: "50ch" }}
            variant="standard"
            disabled={disabled}
          >
            <TextField
              disabled={disabled}
              id="title"
              label="Quiz Name"
              defaultValue={data ? data.title : "Quiz Name"}
              onChange={handleChange("title")}
            />
          </FormControl>

          <FormControl
            fullWidth
            variant="standard"
            sx={{ m: 1, width: "80ch" }}
            disabled={disabled}
          >
            <TextField
              disabled={disabled}
              id="description"
              label="Quiz Description"
              defaultValue={data ? data.description : "Quiz Description"}
              onChange={handleChange("description")}
            />
          </FormControl>
          <FormControl
            fullWidth
            variant="standard"
            sx={{ m: 1, width: "15ch" }}
            disabled={disabled}
          >
            <TextField
              disabled={disabled}
              id="score"
              label="Score"
              defaultValue={data ? data.score : "0"}
              onChange={handleChange("score")}
            />
          </FormControl>

          <FormControl
            fullWidth
            sx={{ m: 1, width: "100ch" }}
            variant="standard"
          >
            <TextField
              disabled={disabled}
              id={data.url}
              label={data.url}
              defaultValue={data.url}
              onChange={handleChange("url")}
            />
          </FormControl>
        </Grid>

        <Grid item xs={4}></Grid>

        <Grid item xs={12}>
          {data
            ? data.questions_answers.map((question) => (
                <>
                  <Typography
                    align="left"
                    variant="subtitle2"
                    margin="1rem"
                    textTransform="uppercase"
                  >
                    {question.text}
                  </Typography>

                  <FormControl
                    fullWidth
                    sx={{ m: 1, width: "102ch" }}
                    variant="standard"
                  >
                    <TextField
                      disabled={disabled}
                      id={question.text}
                      label={question.text}
                      defaultValue={question.text}
                      onChange={handleChange(`${"question"}${question.id}`)}
                    />
                  </FormControl>
                  {question.answers &&
                    question.answers.map((answer) => (
                      <>
                        <FormControl
                          fullWidth
                          sx={{ m: 1, width: "50ch" }}
                          variant="standard"
                        >
                          <TextField
                            disabled={disabled}
                            id={answer.text}
                            label={answer.text}
                            defaultValue={answer.text}
                            onChange={handleChange(
                              `${"question"}${question.id}${"answer"}${
                                answer.id
                              }`
                            )}
                          />
                        </FormControl>
                      </>
                    ))}
                  <Typography
                    align="left"
                    variant="subtitle2"
                    margin="1rem"
                    textTransform="uppercase"
                  >
                    {"Question Feedback"}
                  </Typography>
                  <FormControl
                    fullWidth
                    sx={{ m: 1, width: "50ch" }}
                    variant="standard"
                  >
                    <TextField
                      disabled={disabled}
                      id={question.feedback_false}
                      label={question.feedback_false}
                      defaultValue={question.feedback_false}
                      onChange={handleChange(question.feedback_false)}
                    />
                  </FormControl>
                  <FormControl
                    fullWidth
                    sx={{ m: 1, width: "50ch" }}
                    variant="standard"
                  >
                    <TextField
                      disabled={disabled}
                      id={question.feedback_true}
                      label={question.feedback_true}
                      defaultValue={question.feedback_true}
                      onChange={handleChange(question.feedback_true)}
                    />
                  </FormControl>
                </>
              ))
            : null}
        </Grid>
      </Grid>
    </>
  );
};

export default DataQuizForm;
