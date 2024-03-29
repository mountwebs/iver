import React from 'react';
import Button from '../Button/Button';
import styled from 'styled-components';
import device from '../../constants/breakpoints';
import Rectangle3 from './Rectangle3';
import Rectangle3Mobile from './Rectangle3Mobile';
import HemsedalLogo from './HemsedalLogo';

import Rectangle7 from './Rectangle7';
import Star from './Star';
import Union from './Union';
import Union2 from './Union2';
import StarMobile from './StarMobile';

const StyledWelcome = styled.div`
  background: ${({ theme }) => theme.colors.body.background};
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  z-index: 10;
  @media only screen and ${device.sm} {
  }
`;

const StyledHemsedalLogo = styled(HemsedalLogo)`
  position: absolute;
  top: 0;
  left: 30px;
  z-index: -100;
  height: 100px;
  color: #d6cea6;

  @media only screen and ${device.sm} {
    left: 60px;
    height: 160px;
  }
`;

const StyledContainer = styled.div`
  overflow: hidden;
`;

const StyledHeader = styled.h1`
  text-align: center;
  margin: 0;
  font-weight: 500;
  font-size: 2rem;

  @media only screen and ${device.sm} {
    font-size: 3.2rem;
  }
`;

const StyledDescription = styled.p`
  padding: 0 30px;
  padding-bottom: 0.5rem;
  padding-top: 1rem;
  max-width: 800px;
  font-weight: 400;
  text-align: center;
  margin: 0 auto;
  font-size: 1.1rem;
  @media only screen and ${device.sm} {
    font-size: 1.8rem;
  }
`;

const StyledButton = styled(Button)`
  background: ${({ theme }) => theme.colors.buttons.header.background};
  color: ${({ theme }) => theme.colors.buttons.header.text};
  font-size: 18px;
  bottom: 1em;

  @media only screen and ${device.sm} {
    display: none;
  }
`;

const StyledStar = styled(Star)`
  position: absolute;
  z-index: -100;
  width: 150px;
  color: #ebe6cc;
  left: -63px;
  top: -161px;

  @media only screen and ${device.sm} {
    display: block;
    top: -111px;
    width: 150px;
  }
`;

const StyledStar2 = styled(Star)`
  position: absolute;
  z-index: -100;
  color: #ebe6cc;
  left: -63px;
  top: -161px;
  display: none;

  @media only screen and ${device.sm} {
    height: 110px;
    display: block;
    top: 551px;
    width: 150px;
  }
`;

const StyledRectangle3 = styled(Rectangle3)`
  position: absolute;
  z-index: -100;
  width: 120px;
  height: 136px;
  right: -50px;
  top: -90px;
  color: #ebe6cc;
  display: none;

  @media only screen and ${device.sm} {
    display: block;
    width: 300px;
    height: 150px;
    right: 0;
    top: 0;
  }
`;

const StyledRectangle3Mobile = styled(Rectangle3Mobile)`
  position: absolute;
  z-index: -100;
  right: 0;
  top: -50px;
  color: #ebe6cc;

  @media only screen and ${device.sm} {
    display: none;
  }
`;

const StyledUnion = styled(Union)`
  position: absolute;
  z-index: -100;
  width: 225px;
  right: 0;
  top: 0;
  display: none;

  @media only screen and ${device.sm} {
    display: block;
    right: 0;
    top: 0;
    color: #ebe6cc;
  }
`;

const StyledUnion2 = styled(Union2)`
  position: absolute;
  z-index: -100;
  width: 161px;
  left: -111px;
  top: -45px;
  display: none;

  @media only screen and ${device.sm} {
    width: 200px;
    left: 30px;
    top: 25px;
  }
`;

const StyledStarMobile = styled(StarMobile)`
  display: none;

  @media only screen and ${device.sm} {
  }
`;

const StyledRectangle7 = styled(Rectangle7)`
  position: absolute;
  z-index: -100;
  width: 75px;
  right: 10px;
  top: -39px;
  display: none;

  @media only screen and ${device.sm} {
    width: 125px;
    right: 75px;
    top: 0;
  }
`;

const Welcome = () => {
  return (
    <StyledWelcome>
      <StyledContainer>
        <StyledRectangle3Mobile />
        <StyledStar2 />
        <StyledUnion />

        <StyledStar />
        <StyledHemsedalLogo />
      </StyledContainer>
    </StyledWelcome>
  );
};

export default Welcome;
