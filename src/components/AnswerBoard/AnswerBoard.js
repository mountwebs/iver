import React, { useState } from 'react';
import styled from 'styled-components';
import device from '../../constants/breakpoints';
import Input from '../Input/Input';
import Answer from './Answer';

const placeholderText = 'Fortell oss hva du vil si her';
const buttonText = 'Legg ut';

const StyledContainer = styled.div`
  padding: 0.5rem;
  background-color: ${({ theme }) => theme.colors.body.secondary};
  margin-bottom: 5rem;
  border-radius: 10px;
  max-width: 1020px;

  @media only screen and ${device.sm} {
    padding-top: 66px;
    padding-left: 66px;
    padding-right: 66px;
  }
`;

const originalAnswerList = [
  {
    text:
      'Jeg ønsker at sentrum skal bli til det naturlige stedet å både bo og oppholde seg!',
    tema: 'Møteplasser',
    user: 'Navn',
  },
  {
    text: 'Gode møteplasser for folk i alle aldre.',
    tema: 'Møteplasser',
    user: 'Navn',
  },
  {
    text: 'Tilgang på god mat og drikke. Helst fra lokale produsenter.',
    tema: 'Mat og drikke',
    user: 'Navn',
  },
  {
    text: 'Uten bil, hvertfall!',
    tema: 'Bilfri',
    user: 'Navn',
  },
  {
    text:
      'En park uten biler der venner møtes for å ligge i gresset og ha det fint sammen. ',
    tema: 'Park',
    user: 'Navn',
  },
  {
    text:
      'Minst like viktig å ruste opp og se nye muligheter i det som allerede finnes, som å nødvendigvis måtte bygge alt fra scratch. ',
    tema: 'Gjenbruk',
    user: 'Navn',
  },
];

const StyledAnswersWrapper = styled.div`
  @media only screen and ${device.sm} {
    // // -- alternative to make columns more 'masonry' --
    // columns: 2;
    // column-gap: 2rem;

    display: grid;
    grid-template-columns: repeat(2, minmax(250px, 1fr));
    gap: 1rem 1.8rem;
  }
`;

const AnswerBoard = () => {
  const [answerList, setAnswerList] = useState(originalAnswerList);

  const addAnswer = (answer) => {
    setAnswerList([answer, ...answerList]);
  };

  return (
    <StyledContainer className="answer-board">
      <Input
        placeholderText={placeholderText}
        buttonText={buttonText}
        addAnswer={addAnswer}
      />
      <StyledAnswersWrapper>
        {answerList.map((answer, index) => {
          const { text, tema, user } = answer;
          return (
            <Answer
              cardText={text}
              temaText={tema}
              userName={user}
              key={index}
            />
          );
        })}
      </StyledAnswersWrapper>
    </StyledContainer>
  );
};

export default AnswerBoard;
