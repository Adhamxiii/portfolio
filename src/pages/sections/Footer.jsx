import React from "react";
import styled from "styled-components";
import Header from "../../components/Header";
import { Link } from "react-router-dom";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { links } from "../../links";

const Footer = () => {
  return (
    <Wrapper className="section">
      <Header color="#fff" />
      <FooterContainer>
        <FooterContent>
          <div className="container">
            <ContactInfo>
              <div>
                <h3>Say Hello</h3>
                <a href="mailto:adhamxiii22@gmail.com">adhamxiii22@gmail.com</a>
              </div>
            </ContactInfo>
            <Navigation>
              {links.map((link) => (
                <li key={link.id}>
                  <Link to={link.url}>{link.text}</Link>
                </li>
              ))}
            </Navigation>
          </div>
          <Separator />
          <FooterInfo>
            <p>&copy; 2023 My Portfolio. All rights reserved.</p>
            <SocialMediaLinks>
              <li>
                <a href="https://www.linkedin.com/in/adhamnasser/">
                  <FaLinkedin />
                </a>
              </li>
              <li>
                <a href="https://github.com/Adhamxiii">
                  <FaGithub />
                </a>
              </li>
            </SocialMediaLinks>
          </FooterInfo>
        </FooterContent>
      </FooterContainer>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  position: relative;
  height: 100vh;
`;

const FooterContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #1c1c1c;
  padding: 2rem;
`;

const FooterContent = styled.div`
  width: 70%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  .container {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  @media (max-width: 768px) {
    .container {
      flex-direction: column;
      gap: 1rem;
    }
  }
`;

const ContactInfo = styled.div`
  div {
    h3 {
      font-family: "Montserrat", sans-serif;
      font-weight: bold;
      text-transform: uppercase;
      letter-spacing: 5px;
      color: #ccc;
      font-size: 1.5rem;
      margin-bottom: 1.5rem;
    }
    a {
      color: #930000;
      text-decoration: none;
      font-weight: bold;
      font-size: 1.2rem;
    }
  }
`;

const Navigation = styled.div`
  display: flex;
  flex-direction: column;
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  gap: 1rem;

  li {
    font-size: 1.2rem;
    color: #930000;
    transition: color 0.3s ease;

    &:hover {
      color: #00bcd4;
    }
  }
`;

const Separator = styled.hr`
  border: 0;
  border-top: 1px solid #ddd;
`;

const FooterInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    font-size: 1rem;
    color: #666;
  }
`;

const SocialMediaLinks = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  gap: 1rem;

  li {
    font-size: 1.2rem;
    color: #333;
    cursor: pointer;
    transition: color 0.3s ease;

    &:hover {
      color: #00bcd4;
    }
  }
`;

export default Footer;
