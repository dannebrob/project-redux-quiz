/* eslint-disable linebreak-style */
/* eslint-disable max-len */
import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

const StyledSummary = styled.div`
display:flex;
flex-direction:column; 
width:80%;
background-color: #0078bea7;
margin: 10%;
border-radius: 20px; 
border:2px solid orange;
gap:30px;
`

const StyledCongrats = styled.h1`
font-family: 'Just another hand';
font-size: 72px;
font-weight:400;
color:white;
text-align:center;
margin:0; 
`
const StyledScore = styled.h3`
font-family: 'Just another hand';
color: white;
font-size: 50px; 
font-weight:400;
text-align:center;
margin:0; 

.redScore {
  color:#FF6262;
}

.greenScore {
  color:#08F512;
}
`
const StyledQuestion = styled.h2`
font-family: 'Helvetica';
font-size: 20px; 
color:white;
`
const StyledAnswer = styled.p`
font-size: 20px;
`
const StyledCup = styled.img`
width: 40%;
align-self: center;
margin-top: 40px;
padding:10px;
`
const StyledRecap = styled.div`
background:#FDEDDE;
margin: 5%;
border-radius: 5px;
`

export const Summary = () => {
  const selectedAnswers = useSelector((store) => store.quiz.answers)
  const numberOfQuestions = useSelector((store) => store.quiz.questions)
  const numberOfCorrectAnswers = selectedAnswers.filter((answer) => answer.isCorrect)

  return (
    <StyledSummary>
      <StyledCup alt="cup" src="https://www.iconpacks.net/icons/1/free-cup-icon-788-thumb.png" />
      <StyledCongrats>Congratulations!</StyledCongrats>
      <StyledScore>Your total score: <span className="redScore">{numberOfCorrectAnswers.length}</span>/<span className="greenScore">{numberOfQuestions.length}</span></StyledScore>
      <StyledScore>Gött mos!</StyledScore>
      <StyledRecap>
        {selectedAnswers.map((singleAnswer) => {
          if (singleAnswer.isCorrect) {
            return (
              <p>
                <StyledQuestion>Question {singleAnswer.question.id}: {singleAnswer.question.questionText}</StyledQuestion>
                <StyledAnswer>👍 {singleAnswer.answer}</StyledAnswer>
              </p>
            )
          } else {
            return (
              <p>
                <StyledQuestion>Question {singleAnswer.question.id}: {singleAnswer.question.questionText}</StyledQuestion>
                <StyledAnswer>👎 {singleAnswer.answer}</StyledAnswer>
                <h2>The correct answer: {singleAnswer.question.options[singleAnswer.question.correctAnswerIndex]}</h2>
              </p>
            )
          }
        })}
      </StyledRecap>
    </StyledSummary>
  )
}