import React from "react";
import styled from "styled-components";
import { projects } from "../projects";
import Button from "./Button";

const ProjectsList = () => {
  const sortedProjects = projects.slice().sort((a, b) => {
    return b.id - a.id;
  });
  return (
    <ProjectsContainer>
      {sortedProjects.map((project) => {
        const { imageUrl, title, description, link } = project;

        return (
          <ProjectContainer key={title}>
            <ProjectImageContainer>
              <ProjectImage src={imageUrl} alt={title} />
            </ProjectImageContainer>
            <ProjectDetails>
              <h3>{title}</h3>
              <p>{description}</p>
              <Button>
                <a href={link}>View Project</a>
              </Button>
            </ProjectDetails>
          </ProjectContainer>
        );
      })}
    </ProjectsContainer>
  );
};

const ProjectsContainer = styled.div`
  display: grid;
  gap: 9rem;
`;

const ProjectContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 1rem;
  align-items: center;
  transition: transform 0.3s ease;

  &:hover > ProjectImage {
    transform: translateY(-5px);
  }

  &:hover h3 {
    text-decoration: underline;
  }

  &:hover Button {
    color: #fff;
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(6, 1fr);
  }
`;

const ProjectImageContainer = styled.div`
  grid-column: span 7;
  overflow: hidden;
  border-radius: 8px;
`;

const ProjectImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
  transition: transform 0.3s ease;

  ${ProjectContainer}:hover & {
    transform: translateY(-10px);
  }
`;

const ProjectDetails = styled.div`
  grid-column: span 5;
  text-align: left;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 1.5rem;

  h3 {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
    position: relative;
  }

  p {
    font-size: 1rem;
    color: #ccc;
  }
`;

export default ProjectsList;
