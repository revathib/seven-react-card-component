import React, { PropTypes } from 'react';
import styled from 'styled-components';

const Image = styled.img`
  border-radius: 0.35rem;
  display: block;
  width: 40%;
`;

const DisplayOver = styled.div({
  height: '10%',
  left: '0',
  position: 'absolute',
  top: '0',
  width: '10%',
  zIndex: 2,
  transition: 'background-color 350ms ease',
  backgroundColor: 'transparent',
  padding: '20px 20px 0 20px',
  boxSizing: 'border-box'
});

const LogoOnHover = styled.h4({
  transform: 'translate3d(0,50px,0)',
  transition: 'transform 350ms ease'
});
const Paragraph = styled.p({
  transform: 'translate3d(0,50px,0)',
  transition: 'transform 350ms ease'
});

const Hover = styled.div({
  opacity: 0,
  transition: 'opacity 350ms ease'
});

const Background = styled.div({
  // Other background code
  [`:hover ${DisplayOver}`]: {
    backgroundColor: 'rgba(0,0,0,.5)'
  },
  [`:hover ${LogoOnHover}, :hover ${Paragraph}`]: {
    transform: 'translate3d(0,0,0)'
  },
  [`:hover ${Hover}`]: {
    opacity: 1
  }
});

const Card = ({ image, onHoverImage, text }) => (
  <Background>
    <DisplayOver>
      <Hover>
        <LogoOnHover>
          <Image src={onHoverImage} alt="Seven" />
        </LogoOnHover>
        <Paragraph>{text}</Paragraph>
      </Hover>
    </DisplayOver>
  </Background>
);

// Card.propTypes = {
//   image: PropTypes.string,
//   onHoverImage: PropTypes.string,
//   text: PropTypes.string
// };

export default Card;
