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

// var styles = StyleSheet.create({
//   backgroundContainer: {
//     position: 'absolute',
//     top: 0,
//     bottom: 0,
//     left: 0,
//     right: 0
//   },
//   container: {
//     flex: 1,
//     alignItems: 'center'
//   },
//   overlay: {
//     opacity: 0.5,
//     backgroundColor: '#000000'
//   },
//   logo: {
//     backgroundColor: 'rgba(0,0,0,0)',
//     width: 160,
//     height: 52
//   },
//   backdrop: {
//     flex: 1,
//     flexDirection: 'column'
//   },
//   headline: {
//     fontSize: 18,
//     textAlign: 'center',
//     backgroundColor: 'black',
//     color: 'white'
//   }
// });

// const Wrapper = styled.div`
//   flex: 1,
//     alignItems: 'center',
// `;
// const BackgroundImage = styled.div`
//   background-image: url(${props => `${props.backgroundImage}`});
//   background-repeat: no-repeat;
//   background-position: center;
//   border-radius: 0.35rem;
//   display: block;
//   width: 50%;
//   heigth: 50%;
// `;
// const Row = styled.div`
//   display: flex;
//   flex-direction: row;
// `;

// const Image = styled.img`
//   border-radius: 0.35rem;
//   display: block;
//   width: 10%;
// `;

// const Text = styled.p`
//   font-size: 1.25rem;
//   font-weight: 300;
//   line-height: 1.5em;
// `;

// const Card = ({ backgroundImage, onTopImage, text }) => (
//   <Wrapper>
//     <BackgroundImage backgroundImage={backgroundImage}>
//       <Row>
//         <Image src={onTopImage}></Image>
//         <Text>{text}</Text>
//       </Row>
//     </BackgroundImage>
//   </Wrapper>
// );

// const Image = styled.img`
//   border-radius: 0.35rem;
//   display: block;
//   margin: 4%;
//   width: 50%;
// `;

// const DisplayOver = styled.div({
//   height: '50%',
//   left: '0',
//   position: 'absolute',
//   top: '0',
//   width: '50%',
//   zIndex: 2,
//   transition: 'background-color 350ms ease',
//   backgroundColor: 'transparent',
//   padding: '20px 20px 0 20px',
//   boxSizing: 'border-box'
// });

// const LogoImage = styled(Image)`
//   width: 5%;
//   transform: 'translate3d(0,50px,0)';
//   transition: 'transform 350ms ease';
// `;

// const Text = styled.div`
//   transform: 'translate3d(0,20px,0)';
//   transition: 'transform 350ms ease';
// `;

// const Hover = styled.div`
//   opacity: 0;
//   transition: 'opacity 350ms ease';
// `;

// const Background = styled.div({
//   backgroundSize: 'cover',
//   backgroundRepeat: 'no-repeat',
//   color: '#FFF',
//   position: 'relative',
//   width: '50%',
//   height: '50%',
//   cursor: 'pointer',
//   [`:hover ${DisplayOver}`]: {
//     backgroundColor: 'rgba(0,0,0,.5)'
//   },
//   [`:hover ${LogoImage}, :hover ${Text}`]: {
//     transform: 'translate3d(0,0,0)'
//   },
//   [`:hover ${Hover}`]: {
//     opacity: 1
//   }
// });

// const Card = ({ image, onHoverImage, text }) => (
//   <Background>
//     <Image src={image} alt="Seven West" />
//     <DisplayOver>
//       <Hover>
//         <LogoImage src={onHoverImage} alt="Seven West" />
//         <Text>{text}</Text>
//       </Hover>
//     </DisplayOver>
//   </Background>
// );

// Card.propTypes = {
//   image: PropTypes.string,
//   onHoverImage: PropTypes.string,
//   text: PropTypes.string
// };
