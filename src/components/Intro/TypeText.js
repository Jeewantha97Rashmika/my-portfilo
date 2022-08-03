import React from "react";
import styled from "styled-components";
import Typewriter from "typewriter-effect";


const Title = styled.h2`
 
  text-transform: capitalize;
  width: 100%;
  color:  #C9C9C9;
  align-items: flex-start;

  span {
    text-transform: capitalize;
    /* font-family: "Akaya Telivigala", cursive; */
    font-size:3rem ;
    font-weight: bold;
   
  }

  .text-1 {
    color: #C9C9C9;
  }
  .text-2 {
    color: #C9C9C9;
  }

  .text-3 {
    color: #C9C9C9;
  }
  .text-4 {
    color: #C9C9C9;
  }

  .text-5 {
    color: #C9C9C9;
  }
  @media screen and (max-width: 480px) {
    span {
   
    font-size:1.6rem ;
   
   
  }
  }
`;

// const SubTitle = styled.h3`
//   font-size: 25px;
//   color: ${props => `rgba(${props.theme.textRgba},0.6)`};
//   text-transform: capitalize;
//   font-weight: 600;
//   margin-bottom: 1rem;
//   width: 80%;
//   align-self: flex-start;
//   margin-top: 20px;
// `;



function TyprText() {
  return (
    <Title>
     
      <Typewriter
        options={{
          autoStart: true,
          loop: true,
        }}
        onInit={(typewriter) => {
          typewriter
            .typeString(`<span class ="text-1">Jeewantha Rashmika</span>`)
            .pauseFor(2000)
            .deleteAll()
            .typeString(`<span class ="text-2">React JS Developer</span>`)
            .pauseFor(2000)
            .deleteAll()
            .typeString(`<span class ="text-3">Flutter Developer</span>`)
            .pauseFor(2000)
            .deleteAll()
            .typeString(`<span class ="text-4">UI/UX Designer</span>`)
            .pauseFor(2000)
            .deleteAll()
            .typeString(`<span class ="text-5">Graphic Designer</span>`)
            .pauseFor(2000)
            .deleteAll()

            .start();
        }}
      />
      {/* <SubTitle>Border of apes? Try somthing new.</SubTitle> */}
     
    </Title>
  );
}

export default TyprText;
