import React from "react";
import styled from "styled-components";
import midium from "../assets/images/Midium.jpg";

const Header = () => {
  return (
    <HeaderContainer>
      <div>
        <img src={midium} alt="midium logo" />
      </div>
      <div>Open in app</div>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 8px 16px;
  box-sizing: border-box;
  box-shadow: 0 4px 2px -2px lightgray;
  width: 100%;
`;
