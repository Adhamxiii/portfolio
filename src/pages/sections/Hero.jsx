import React from "react";
import styled from "styled-components";
import Header from "../../components/Header";
import photo from "../../assets/profilePhoto.png";
import shape1 from "../../assets/shapes (1).png";
import shape2 from "../../assets/shapes (2).png";
import shape3 from "../../assets/shapes (3).png";
import shape4 from "../../assets/shapes (4).png";
import shape5 from "../../assets/shapes (5).png";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <Wrapper className="section">
      <Header color="#fff" />
      <MainContent>
        <LeftSide>
          <TextContainer>
            <motion.h1
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Frontend Developer.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Passionate about Crafting Scalable Frontend Wonders for
              Exceptional User Journeys.
            </motion.p>
            <motion.div
              className="hero-text"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <p className="hero-text-p">
                Adept at Balancing Aesthetics and Functionality through
                Progressive Enhancement and UI Engineering.
              </p>
              <p className="hero-text-p">
                Proven experience building successful products for clients
                across several countries.
              </p>
            </motion.div>
          </TextContainer>
        </LeftSide>
        <RightSide>
          <img className="shape1" src={shape1} alt="Hero" />
          <img className="shape2" src={shape2} alt="Hero" />
          <img className="shape3" src={shape3} alt="Hero" />
          <img className="shape4" src={shape4} alt="Hero" />
          <img className="shape5" src={shape5} alt="Hero" />
          <div className="rounded-frame"></div>

          <motion.img
            src={photo}
            alt="Hero"
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          />
        </RightSide>
      </MainContent>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    height: auto;
    flex-direction: column;
    align-items: center;
    scroll-snap-type: none;
    scroll-snap-align: none;
  }
`;

const MainContent = styled.main`
  height: 100vh;
  display: flex;
  align-self: center;
  width: 100%;
  position: relative;

  @media (max-width: 768px) {
    height: auto;
    flex-direction: column;
  }
`;

const LeftSide = styled.div`
  flex: 7;
  padding: 1.5rem;
  background-color: #1c1c1c;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(1, 1fr);

  @media (max-width: 768px) {
    height: auto;
    display: flex;
    flex: 1;
    gap: 0.5rem;
    padding: 1rem;
    padding-top: 5rem;
  }
`;

const TextContainer = styled.div`
  grid-column: 1 / span 3;
  grid-row: 1 / span 4;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    grid-column: 1 / span 3;
    grid-row: 2 / span 5;
    padding: 1rem;
  }

  h1 {
    font-family: "Montserrat", sans-serif;
    color: #d62e1f;
    font-size: 6rem;
    font-weight: 600;
    margin-bottom: 1rem;

    @media (max-width: 768px) {
      font-size: 2.5rem;
    }
  }

  p {
    font-family: "Roboto", sans-serif;
    color: #fff;
    font-size: 2rem;
    font-weight: 400;
    line-height: 1.5;
    margin-bottom: 3rem;

    @media (max-width: 768px) {
      font-size: 1rem;
      margin-bottom: 3rem;
    }
  }

  .hero-text {
    display: flex;
    gap: 1rem;
  }

  .hero-text-p {
    font-size: 1rem;
    width: 50%;
    margin-bottom: 0;

    @media (max-width: 768px) {
      width: 100%;
      font-size: 0.8rem;
    }
  }
`;

const RightSide = styled.div`
  flex: 5;
  background-color: #d62e1f;
  position: relative;
  z-index: 0;

  .rounded-frame {
    position: absolute;
    top: 55%;
    left: 5%;
    transform: translate(-50%, -50%);
    width: 25rem;
    height: 25rem;
    background-color: transparent;
    border: 1px solid #fff;
    border-radius: 50px;
    box-sizing: border-box;
    box-shadow: 0;
  }

  img {
    width: 25rem;
    height: auto;
    position: absolute;
    top: 50%;
    left: 1%;
    transform: translate(-50%, -50%);

    @media (max-width: 1300px) {
      flex: 1;
      left: 50%;
      width: 20rem;
    }

    @media (max-width: 768px) {
      display: none;
      flex: 1;
      width: 60%;
      min-width: 100px;
      height: auto;
      left: 50%;
      top: 40%;
    }
  }

  .shape1,
  .shape2,
  .shape3,
  .shape4,
  .shape5 {
    z-index: -1;
    position: absolute;
  }

  .shape1 {
    top: 30%;
    left: -15%;
    width: 300px;
    height: 300px;
    object-fit: cover;
  }

  .shape2 {
    top: 65%;
    left: -50%;
    width: 200px;
    height: 45px;
    transform: rotate(20deg);
  }

  .shape3 {
    top: 70%;
    left: 20%;
    width: 300px;
    height: 300px;
    object-fit: cover;
  }

  .shape4 {
    top: 30%;
    left: 50%;
    width: 130px;
    height: 15px;
  }

  .shape5 {
    top: 90%;
    left: 90%;
    width: 100px;
    height: 290px;
  }

  @media (max-width: 1300px) {
    .shape1,
    .shape2,
    .shape3,
    .shape4,
    .shape5 {
      display: none;
    }

    .rounded-frame {
      flex: 1;
      top: 60%;
      left: 60%;
      width: 20rem;
      height: 20rem;
    }
  }

  @media (max-width: 940px) {
    display: none;

    .shape1,
    .shape2,
    .shape3,
    .shape4,
    .shape5 {
      display: none;
    }

    .rounded-frame {
      display: none;
    }
  }
`;

export default Hero;
