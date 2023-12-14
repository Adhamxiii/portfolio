import React from "react";
import styled from "styled-components";
import Header from "../../components/Header";

const Quote = () => {
  return (
    <Wrapper className="section">
      <Header />
      <QuoteSection>
        <QuoteBody>
          <QuoteText>A goal without a plan is just a wish.</QuoteText>
        </QuoteBody>
      </QuoteSection>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const QuoteSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const QuoteBody = styled.div`
  position: relative;
  background-color: #f8f8f8;
  border: 2px dotted #d62e1f;
  border-radius: 8px;
  text-align: center;

  &::before,
  &::after {
    content: "";
    fill: #d62e1f;
    width: 80px;
    height: 80px;
    position: absolute;
    background-repeat: no-repeat;
  }

  &::before {
    top: -10%;
    left: 10%;
    transform: translate(-50%, -50%);
    background-image: url("data:image/svg+xml,%3Csvg fill='%23d62e1f' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 50 50'%3E%3Cpath d='M 16 5 C 8.28125 5 2 11.28125 2 19 L 2 41 L 22 41 L 22 21 L 11 21 L 11 19 C 11 16.992188 11.617188 15.195313 12.558594 13.941406 C 13.496094 12.691406 14.703125 12 16 12 L 17 12 L 17 5 Z M 42 5 C 34.28125 5 28 11.28125 28 19 L 28 41 L 48 41 L 48 21 L 37 21 L 37 19 C 37 16.992188 37.617188 15.195313 38.558594 13.941406 C 39.496094 12.691406 40.703125 12 42 12 L 43 12 L 43 5 Z M 15 7.203125 L 15 10.265625 C 13.414063 10.574219 11.96875 11.394531 10.957031 12.746094 C 9.726563 14.386719 9 16.589844 9 19 L 9 23 L 20 23 L 20 39 L 4 39 L 4 19 C 4 12.714844 8.855469 7.734375 15 7.203125 Z M 41 7.203125 L 41 10.265625 C 39.414063 10.574219 37.96875 11.394531 36.957031 12.746094 C 35.726563 14.386719 35 16.589844 35 19 L 35 23 L 46 23 L 46 39 L 30 39 L 30 19 C 30 12.714844 34.855469 7.734375 41 7.203125 Z'/%3E%3C/svg%3E");
  }

  &::after {
    top: 100%;
    right: 3%;
    transform: translate(-50%, -50%);
    background-image: url("data:image/svg+xml,%3Csvg fill='%23d62e1f' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 50 50'%3E%3Cpath d='M 2 9 L 2 29 L 13 29 L 13 31 C 13 33.007813 12.382813 34.804688 11.441406 36.058594 C 10.503906 37.308594 9.296875 38 8 38 L 7 38 L 7 45 L 8 45 C 15.71875 45 22 38.71875 22 31 L 22 9 Z M 28 9 L 28 29 L 39 29 L 39 31 C 39 33.007813 38.382813 34.804688 37.441406 36.058594 C 36.503906 37.308594 35.296875 38 34 38 L 33 38 L 33 45 L 34 45 C 41.71875 45 48 38.71875 48 31 L 48 9 Z M 4 11 L 20 11 L 20 31 C 20 37.285156 15.144531 42.265625 9 42.796875 L 9 39.734375 C 10.585938 39.425781 12.03125 38.605469 13.042969 37.253906 C 14.273438 35.613281 15 33.410156 15 31 L 15 27 L 4 27 Z M 30 11 L 46 11 L 46 31 C 46 37.285156 41.144531 42.265625 35 42.796875 L 35 39.734375 C 36.585938 39.425781 38.03125 38.605469 39.042969 37.253906 C 40.273438 35.613281 41 33.410156 41 31 L 41 27 L 30 27 Z'/%3E%3C/svg%3E");
  }

  @media (max-width: 768px) {
    font-size: 0.8rem;

    &::before {
      left: 50%;
      transform: translate(-50%, -50%);
    }

    &::after {
      right: 50%;
      transform: translate(50%, -50%);
    }
  }
`;

const QuoteText = styled.p`
  font-size: 4.5rem;
  line-height: 1.5;
  color: #1c1c1c;

  span {
    font-weight: bold;
  }
`;

export default Quote;
