import React from "react";
import styled from "styled-components";
import Header from "../../components/Header";
import { motion } from "framer-motion";

const Jobs = () => {
  return (
    <Wrapper className="section">
      <Header color="#000" />
      <div className="container">
        <Content>
          <div className="Engineering">
            <motion.div
              animate={{ x: 100 }}
              transition={{ ease: "easeOut", duration: 2 }}
            >
              <JobContainer>
                <h1>Engineering</h1>
                <p>
                  In React development, I use the right tools, but I'm not tied
                  to them. I create fast, resilient solutions that scale
                  well—performance and scalability are always top priorities for
                  me.
                </p>
              </JobContainer>
            </motion.div>
          </div>
          <div className="design">
            <motion.div
              animate={{ x: -100 }}
              transition={{ ease: "easeOut", duration: 2 }}
            >
              <JobContainer>
                <h1>Design</h1>
                <p>
                  I'm not your typical designer with an Illustrator canvas.
                  Instead of pixel perfection, I'm into coding—playing with
                  stylesheets, toying with fonts, and crafting layouts. My real
                  passion? It's coding sprinkled with a bit of design magic. I
                  create websites that not only work seamlessly but also look
                  pretty darn cool.
                </p>
              </JobContainer>
            </motion.div>
          </div>
        </Content>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .container {
    margin: 0 auto;
    width: 100%;
    height: calc(100vh - 5rem);
    padding: 0 1rem;
  }

  @media (max-width: 768px) {
    height: auto;

    .container {
      padding: 0;
    }
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4.5rem;
  gap: 2rem;

  h1 {
    font-size: 2.5rem;
    font-weight: 600;
    color: #1c1c1c;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.25rem;
    line-height: 1.5;
    color: #470000;
  }

  .design {
    width: 100%;
    display: flex;
    justify-content: flex-end;
  }

  .Engineering {
    width: 100%;
    display: flex;
    justify-content: flex-start;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 2rem;

    .design {
      justify-content: center;
    }

    .Engineering {
      justify-content: center;
    }

    p {
      font-size: 1rem;
      text-align: center;
    }

    h1 {
      font-size: 2rem;
      text-align: center;
    }
  }
`;

const JobContainer = styled.div`
  max-width: 600px;
  margin-bottom: 1rem;
  padding: 1.7rem;
  background-color: #fff;
`;

export default Jobs;
