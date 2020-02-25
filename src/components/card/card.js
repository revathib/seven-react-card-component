import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  flex: 1;
  align-items: center;
  padding: 1%;
`;
const ViewBottom = styled.div`
  position: absolute;
  width: 230px;
  height: 200px;
`;
const BackgroundImage = styled.img`
  flex: 1;
  flex-direction: column;
  width: 230px;
  height: 200px;
  margin: 20px 60px;
  @media (min-width: 768px) {
    width: 230px;
    margin: 162px 61px;
  }
  @media (min-width: 600px) {
    width: 230px;
    margin: 180px 61px;
  }
  @media (min-width: 320px) {
    width: 350px;
    height: 200px;
    margin: 17px 30px;
  }
  @media (min-width: 480px) {
    width: 350px;
    height: 200px;
    margin: 17px 30px;
  }
`;

const ViewTop = styled.div`
  opacity: 0.5;
  background-color: black;
  width: 231px;
  margin: 146px 61px;
  @media (min-width: 768px) {
    width: 230px;
    margin: 162px 61px;
  }
  @media (min-width: 600px) {
    width: 230px;
    margin: 180px 61px;
  }
  @media (min-width: 480px) {
    width: 351px;
    height: 45px;
    margin: 172px 30px;
  }
  @media (min-width: 320px) {
    width: 351px;
    height: 45px;
    margin: 172px 30px;
  }
`;

const Image = styled.img`
  background-color: rgba(0, 0, 0, 0);
  width: 40px;
  float: left;
  ::before,
  ::after {
    content: '';
    display: table;
  }
  ::after {
    clear: both;
  }
`;

const Text = styled.p`
  font-size: 14px;
  background-color: black;
  color: white;
  font-weight: bold;
  line-height: 2.5em;
  ::after {
    content: '';
    display: table;
  }
  ::after {
    clear: both;
  }
`;

const Card = ({ backgroundImage, onTopImage, text }) => (
  <Wrapper>
    <ViewBottom>
      <BackgroundImage src={backgroundImage} />
    </ViewBottom>
    <ViewTop>
      <Image src={onTopImage}></Image>
      <Text>{text}</Text>
    </ViewTop>
  </Wrapper>
);

export default Card;
