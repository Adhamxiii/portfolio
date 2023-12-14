import React from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import photo from "../assets/profilePhoto.png";
import styled from "styled-components";
import { useGlobalContext } from "../sidebarContext";

const Header = ({ color = "#000" }) => {
  const { openSidebar } = useGlobalContext();

  return (
    <HeaderContainer>
      <ProfileImage src={photo} alt="Profile"  />
      <SidebarButton onClick={openSidebar}>
        <HiOutlineMenuAlt3 color={color} />
      </SidebarButton>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 2rem;
  background-color: transparent;
  color: #fff;
  font-size: 1.5rem;
  font-weight: 600;
  border-radius: 0 0 1rem 1rem;
  z-index: 1;
  transition: background-color 0.3s ease;

  img {
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
  }

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

const ProfileImage = styled.img`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
`;

const SidebarButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 10px;
  font-size: 1.5rem;
  color: #333;
  z-index: 1;
`;

export default Header;
