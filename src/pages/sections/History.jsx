import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import historyImage from "../../assets/history.png";
import Header from "../../components/Header";

const History = () => {
  return (
    <Wrapper className="section">
      <Header color="#fff" />
      <Content>
        <TextContainer>
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Over the years,
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            I am a Computer Science student at Alexandria University, where I
            have cultivated a strong aptitude for programming and coding.
            Seeking to enhance my skills, I pursued additional training at APP
            Soft and ITI, specializing in web development. Throughout my
            educational journey, I have successfully completed numerous projects
            that showcase my proficiency in applying theoretical knowledge to
            real-world scenarios. Feel free to explore my portfolio to see the
            diverse range of projects I've undertaken, demonstrating my
            dedication to continuous learning and practical application.
          </motion.p>
        </TextContainer>
        <ImageContainer>
          <motion.img
            src={historyImage}
            alt="History"
            animate={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.5 }}
          />
        </ImageContainer>
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background: #1c1c1c;
  min-height: 100vh;
  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    padding: 1rem;
    height: auto;
  }
`;

const Content = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const TextContainer = styled.div`
  flex: 1;
  max-width: 800px;
  text-align: left;

  h1 {
    font-family: "Montserrat", sans-serif;
    font-size: 4.5rem;
    font-weight: 600;
    color: #d62e1f;
    margin-bottom: 1rem;
  }

  p {
    font-family: "Roboto", sans-serif;
    font-size: 1.25rem;
    line-height: 1.5;
    color: #fff;
  }

  @media (max-width: 768px) {
    margin-top: 50px;

    h1 {
      font-size: 2.5rem;
    }

    p {
      font-size: 1rem;
    }
  }
`;

const ImageContainer = styled.div`
  flex: 1;
  margin-left: 2rem;

  img {
    width: 100%;
    max-width: 600px;
    border-radius: 8px;
  }

  @media (max-width: 768px) {
    width: 50%;
    margin-left: 0;
    margin-top: 2rem;
  }
`;

export default History;
