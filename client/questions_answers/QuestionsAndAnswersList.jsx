import React, { useState } from 'react';
import QuestionsAndAnswersListView from './QuestionsAndAnswersListView';
import AddQuestionModal from './AddQuestionModal';
import { Grid, Box, Button } from '@material-ui/core';

const QuestionsAndAnswersList = ({ questions, axiosQuestionRequest, productId, productName, searchTerm }) => {
  const [questionLimit, setQuestionLimit] = useState(2);
    
  const handleMoreQuestionsClick = () => {
    setQuestionLimit(questionLimit + 2);
  };

  const renderQuestions = (question, i) => {
    if (i <= (questionLimit - 1)) {
      return (
    <QuestionsAndAnswersListView 
    productId={productId} 
    axiosQuestionRequest={axiosQuestionRequest} 
    question={question} 
    key={i}
    productName={productName}
    searchTerm={searchTerm} />)
    }
  };

  const moreQuestionsButton = () => {
        if (questions.length > questionLimit) return <Button title="QandA" variant='contained' onClick={handleMoreQuestionsClick}>
        MORE ANSWERED QUESTIONS
      </Button>
  };

  const searchFilter = () => {
      let filteredQuestions = [];
      if (searchTerm.length > 2) {
          for (const question of questions) {
            const lowerCaseSearchTerm = searchTerm.toLowerCase().split(' ').join('');
            const lowerCaseQuestion = question.question_body.toLowerCase().split(' ').join('');
            lowerCaseQuestion.includes(lowerCaseSearchTerm) ? filteredQuestions.push(question) : null;
          }
          return filteredQuestions
      } else {
          return questions
      }
  };

  return (
    <Box title="QandA">
      
        {searchFilter().sort((a, b) => (b.question_helpfulness - a.question_helpfulness))
          .map((question, i) => renderQuestions(question, i))}
      <Grid container>
        <Grid item>
          {moreQuestionsButton()}
        </Grid>
        <Grid item>
          <AddQuestionModal 
          productName={productName} 
          productId={productId} 
          axiosQuestionRequest={axiosQuestionRequest} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default QuestionsAndAnswersList;
