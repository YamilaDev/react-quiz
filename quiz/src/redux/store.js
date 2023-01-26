import { configureStore } from '@reduxjs/toolkit'; 
import QuizReducer from '../redux/reducers/QuizReducer';

export const store = configureStore({
  reducer: {
    quizReducer: QuizReducer,
  },
});
