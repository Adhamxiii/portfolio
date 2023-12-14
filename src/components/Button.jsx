import React from "react";
import styled from "styled-components";

const Button = ({ children }) => {
  return <PrimaryButton>{children}</PrimaryButton>;
};

const PrimaryButton = styled.button`
  position: relative;
  background-color: transparent;
  border: 2px solid #d62e1f;
  color: #d62e1f;
  padding: 10px 20px;
  font-size: 1rem;
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  text-transform: uppercase;
  cursor: pointer;
  overflow: hidden;
  transition: color 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  &:hover {
    color: #fff;
  }

  &:hover::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #d62e1f;
    z-index: -1;
    animation: fillAnimation 0.3s ease-in-out forwards;
  }

  @keyframes fillAnimation {
    from {
      width: 0;
    }
    to {
      width: 100%;
    }
  }
`;

export default Button;
