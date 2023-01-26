import React from 'react';
import './App.css';
import QuizFlow from './components/QuizFlow'; 
import { Provider } from 'react-redux'; 
import { store } from './redux/store';

function App() {
  return ( 
    <Provider store={store}> 
      <QuizFlow />
    </Provider>
  );
}

export default App;
