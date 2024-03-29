import React from 'react';
import styled from 'styled-components';
import Button from '../Button/Button';
import device from '../../constants/breakpoints';

const StyledExtra = styled.div`
  background: ${({ theme }) => theme.colors.extra.background};
  position: relative;
  width: 100%;
  border-radius: 25px;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 25px;
  font-size: 1rem;
  flex-direction: column;
  color: black;
  margin-bottom: 3rem;
  margin-right: auto;
  margin-left: auto;

  @media only screen and ${device.sm} {
    flex-direction: row;
    padding: 1.5rem 40px;
    font-size: 1.3rem;
    width: 80%;
  }
`;

const StyledButton = styled(Button)`
  background: ${({ theme }) => theme.colors.buttons.extra.background};
  color: white;
  font-size: 1.1rem;
  margin: 1rem 0;

  @media only screen and ${device.sm} {
    padding: 0.8rem 35px;
    margin-left: 60px;
  }

  &:hover {
    opacity: 0.9;
  }
`;

const Extra = () => {
  return (
    <StyledExtra>
      <p>
        <strong>Har du 5 min ekstra?</strong> Svar på spørreundersøkelse og vær
        med i trekningen av gavekort!
      </p>
      <StyledButton
        onClick={() => window.open('https://nettskjema.no/a/314143')}
      >
        Svar på undersøkelse
      </StyledButton>
    </StyledExtra>
  );
};

export default Extra;
