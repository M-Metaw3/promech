"use client"
import {Box,Button,Typography} from '@mui/material';
import React, { useState } from 'react';
import Rating from '@mui/material/Rating';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import Alert from '@mui/material/Alert';
import StarIcon from '@mui/icons-material/Star';
import { getAuthTokenCookie } from '@/utils/auth';
type Question = {
  id: number;
  question: string;
  rating: number | null;
};
const labels: { [index: string]: string } = {
  0.5: 'Useless',
  1: 'Useless+',
  1.5: 'Poor',
  2: 'Poor+',
  2.5: 'Ok',
  3: 'Ok+',
  3.5: 'Good',
  4: 'Good+',
  4.5: 'Excellent',
  5: 'Excellent+',
};

function getLabelText(value: number) {
  return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
}

const initialQuestions :Question[]= [
  { id: 1, question: 'How would you rate the ease of use?', rating: null },
  { id: 2, question: 'What is your opinion on the design?', rating: null },
  { id: 3, question: 'How satisfied are you with the features?', rating: null },
  { id: 4, question: 'Rate the overall performance.', rating: null },
  { id: 5, question: 'How likely are you to recommend?', rating: null },
];

export default function Questionnaire() {

  const [questions, setQuestions] = useState<Question[]>(initialQuestions);
  

  const [success, setsuccess] = useState(0);



  const handleRatingChange = (index: number, newValue: number | null) => {
    setQuestions((prevQuestions:any[]) =>
      prevQuestions.map((question, i) =>
        i === index ? { ...question, rating: newValue } : question
      )
    );
  };
const { push } = useRouter();

const handleSubmit = async () => {
  const tokenString = getAuthTokenCookie();

  try {
    if (!tokenString) {
      push("/login");
      return;
    }

    let token;
    try {
      token = JSON.parse(tokenString);
      console.log(token);
    } catch (error) {
      push("/login");
      return;
    }

    const user = token.user.id;

    try {
  
      const surveyData = {
        users_permissions_user: user,
        question1: questions[0].question,
        question2: questions[1].question,
        question3: questions[2].question,
        question4: questions[3].question,
        question5: questions[4].question,
        rating1: String(questions[0].rating), // Convert to string
        rating2: String(questions[1].rating),
        rating3: String(questions[2].rating),
        rating4: String(questions[3].rating),
        rating5: String(questions[4].rating),
        course: "6",
        unique: `${user}5`,
      };
      

      const taskanswerResponse = await axios.post(
        'http://promech-backend.addictaco.com/api/survey-answers',
        JSON.stringify({ data: surveyData }), // Convert to JSON string
        {
          headers: {
            'Content-Type': 'application/json', // Specify content type as JSON
          },
        }
      );
        console.log('Request Payload:', taskanswerResponse);  

      // Assuming you have a response status check
      console.log(taskanswerResponse);
      if (taskanswerResponse.status === 200) {
        setsuccess(1)
        setTimeout(()=>{
          push('/account/courses');
      },1000)    
      
      } else {
        throw new Error('Failed to post questionnaire responses');
      }
    } catch (error) {
   
      setsuccess(2)

      console.error('Error posting questionnaire responses: ',error);
    }
  } catch (error) {
    console.error('Error in handleSubmit:');
  }
};


  return (
    <div>
      {questions.map((question, index) => (
        <div key={question.id}>
          <p>{question.question}</p>
          <Box
            sx={{
              width: 400,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: 'auto',
            }}
          >
            <Rating
              name={`rating-${question.id}`}
              value={question.rating}
              precision={1.0}
              getLabelText={getLabelText}
              onChange={(event, newValue) =>
                handleRatingChange(index, newValue)
              }
              emptyIcon={<StarIcon style={{ opacity: 0.80 }} fontSize="inherit" />}
            />
            {question.rating !== null && (
              <Box sx={{ ml: 2 }}>
                {labels[question.rating !== null ? question.rating : 0]}
              </Box>
            )}
          </Box>
        </div>
      ))}
      
      <Button variant="contained" onClick={handleSubmit}>
        Submit
      </Button>
     {success==1?(
      <Alert variant="filled" severity="success">
      Thank you 
    </Alert>
     ):success==2?(
      <Alert variant="filled" severity="error">
  This is a filled error
</Alert>
     ):''}
   
    </div>
  );
}
