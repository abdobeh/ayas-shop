import styled from "styled-components";

export const SiderBar = styled.div`
  background: transparent;
  background-image:
  linear-gradient(
    to right, 
    var(--primary-color),
    var(--primary-color) 15%,
    var(--primary-color) 10%,
    var(--primary-color) 80%,
    var(--shade-drop) 70%
    );
  position: fixed;
  height: 100%;
  width: 100%;
  /* top: 0; */
  left: 0;
  z-index: 999;
  transition: 0.3s ease-in-out;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  left: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
`;