import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import Button from "../../components/Button";
import Project from "../../components/Project";
import { projects } from "../../projects";
import { motion } from "framer-motion";

const Works = () => {
  return (
    <Wrapper className="section">
      <Header />
      <Container>
        <Content>
          <TextContainer>
            <motion.h1
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              I build stuff
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              I love to build cool stuff. I'm a big fan of the web, and I love
              to build things that make the web a better place.
            </motion.p>
          </TextContainer>
          <ProjectsContainer>
            {projects.slice(-3).map((project) => (
              <Project key={project.id} {...project} />
            ))}
          </ProjectsContainer>
          <ButtonContainer>
            <Link to="/projects">
              <Button>View All Projects</Button>
            </Link>
          </ButtonContainer>
        </Content>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  @media (max-width: 768px) {
    height: auto;
    padding: 1rem;

    Header {
      display: none;
    }
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 2rem;

  @media (max-width: 768px) {
    height: auto;
    padding: 1rem;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  gap: 20px;
  text-align: center;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const TextContainer = styled.div`
  flex: 1;
  max-width: 600px;

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
`;

const ProjectsContainer = styled.div`
  flex: 3;
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const ButtonContainer = styled.div`
  flex: 1;
  margin-top: 2rem;
`;

export default Works;
