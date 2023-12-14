import React from "react";
import styled from "styled-components";
import Header from "../../components/Header";
import { IoIosArrowRoundForward } from "react-icons/io";
import Button from "../../components/Button";

const Connect = () => {
  return (
    <Wrapper className="section">
      <Content>
        <TextContainer>
          <h1>Send me a message!</h1>
          <p>
            Got a question or proposal, or just want to say hello? I'd love to
            hear from you!
          </p>
        </TextContainer>
        <FormContainer>
          <Form>
            <InputGroup>
              <InputContainer>
                <InputLabel htmlFor="name">Your Name</InputLabel>
                <InputField
                  type="text"
                  id="name"
                  placeholder="Enter your name"
                />
              </InputContainer>

              <InputContainer>
                <InputLabel htmlFor="email">Email Address</InputLabel>
                <InputField
                  type="email"
                  id="email"
                  placeholder="Enter your email address"
                />
              </InputContainer>
            </InputGroup>

            <InputLabel htmlFor="message">Your Message</InputLabel>
            <TextareaField
              id="message"
              placeholder="Enter your message"
            ></TextareaField>

            <ButtonWrapper>
              <Button className="btn">
                SHOOT{" "}
                <ArrowIcon>
                  <IoIosArrowRoundForward />
                </ArrowIcon>
              </Button>
            </ButtonWrapper>
          </Form>
        </FormContainer>
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    margin-top: 40px;
    height: auto;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2.5rem;
  width: 100%;
  height: 100vh;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const TextContainer = styled.div`
  max-width: 650px;
  text-align: center;

  h1 {
    font-size: 2.5rem;
    font-weight: 700;
    color: #333;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.25rem;
    line-height: 1.5;
    color: #666;
  }

  @media (max-width: 768px) {
    width: 100%;

    h1 {
      font-size: 2rem;
    }

    p {
      font-size: 1rem;
    }
  }
`;

const FormContainer = styled.div`
  margin-top: 2rem;
  width: 100%;

  @media (min-width: 768px) {
    width: 50%;
  }
`;

const Form = styled.form`
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 100%;

  @media (min-width: 768px) {
    padding: 2rem;
  }

  input,
  textarea {
    margin-bottom: 1.5rem;
    padding: 1rem;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 1rem;
    width: 100%;
    outline: none;
    transition: border-color 0.3s ease;
  }

  input:focus,
  textarea:focus {
    border-color: #d62e1f;
  }

  textarea {
    resize: vertical;
  }
`;

const InputGroup = styled.div`
  display: flex;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.5rem;

    label {
      margin-bottom: 0.5rem;
    }

    input,
    textarea {
      width: 100%;
    }
  }
`;

const InputContainer = styled.div`
  flex: 1;
`;

const InputLabel = styled.label`
  font-size: 1rem;
  margin-bottom: 0.5rem;
  color: #333;
  display: block;
`;

const InputField = styled.input`
  border-bottom: 1px solid #ddd;
`;

const TextareaField = styled.textarea`
  height: 150px;
  width: 100%;
  border-radius: 4px;
  padding: 1rem;
  outline: none;
  resize: vertical;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #d62e1f;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const ArrowIcon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 0.5rem;
`;

export default Connect;
