import React from "react";
import styled from "styled-components";

const Project = ({ imageUrl, title, description, link }) => {
  return (
    <ProjectContainer>
      <ProjectImage src={imageUrl} alt={title} />
      <ProjectDetails>
        <h3>{title}</h3>
        <ProjectLink href={link} target="_blank" rel="noopener noreferrer">
          View Project
        </ProjectLink>
      </ProjectDetails>
    </ProjectContainer>
  );
};

const ProjectContainer = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
`;

const ProjectDetails = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 2rem 1rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.7);
  opacity: 0;
  transition: opacity 0.3s ease;

  ${ProjectContainer}:hover & {
    opacity: 1;
  }

  h3 {
    font-size: 1.25rem;
    margin-bottom: 0.5rem;
    color: #fff;
  }
`;

const ProjectLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #d62e1f;
  color: #fff;
  padding: 0.5rem 1rem;
  width: 60%;
  font-size: 1rem;
  text-decoration: none;
  font-weight: 600;
  border-radius: 4px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #470000;
  }
`;

export default Project;
