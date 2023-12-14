import React from "react";
import { FaTimes } from "react-icons/fa";
import styled from "styled-components";
import { links } from "../links";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../sidebarContext";

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();

  return (
    <SidebarContainer className={isSidebarOpen ? "show-sidebar" : ""}>
      <SidebarHeader>
        <CloseButton onClick={closeSidebar}>
          <FaTimes />
        </CloseButton>
      </SidebarHeader>
      <Links>
        {links.map((link) => (
          <li key={link.id}>
            <Link to={link.url}>{link.text}</Link>
          </li>
        ))}
      </Links>
    </SidebarContainer>
  );
};

const SidebarContainer = styled.aside`
  position: fixed;
  top: 10px;
  right: 10px;
  width: 300px;
  height: 300px;
  background-color: #111;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease, visibility 0.3s ease;
  z-index: 2;

  &.show-sidebar {
    opacity: 1;
    visibility: visible;
  }
`;

const SidebarHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 70%;
  margin-bottom: 2rem;
`;

const CloseButton = styled.button`
  background: transparent;
  border: none;
  color: #fff;
  font-size: 1.5rem;
  cursor: pointer;
`;

const Links = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  text-align: center;
  width: 70%;

  li {
    margin-bottom: 1rem;
    text-decoration: none;
    color: #fff;
    font-size: 1.2rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;

    &:hover {
      color: #d62e1f;
    }
  }
`;

export default Sidebar;
