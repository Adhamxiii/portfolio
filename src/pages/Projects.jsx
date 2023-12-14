import React, { useEffect } from "react";
import styled from "styled-components";
import ProjectsList from "../components/ProjectsList";
import Header from "../components/Header";

const Projects = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Wrapper>
      
      <Title>Projects</Title>
      <ProjectsList />
    </Wrapper>
  );
};

const Wrapper = styled.main`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  background: #23252f;

  @media (min-width: 768px) {
    padding: 4rem;
  }
`;

const Title = styled.h1`
  font-size: 4.5rem;
  font-weight: 600;
  margin-bottom: 2rem;
  color: #fff;
`;

export default Projects;
