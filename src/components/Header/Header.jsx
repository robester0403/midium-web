import React from "react";
import { useNavigate } from "react-router-dom";
import midium from "../../assets/images/Midium.jpg";
import { HeaderContainer, Logo } from "./HeaderStyle";

const Header = () => {
  const navigate = useNavigate();
  return (
    <HeaderContainer>
      <Logo
        onClick={() => {
          navigate("/");
        }}
      >
        <img src={midium} alt="midium logo" />
      </Logo>
      <div>Open in app</div>
    </HeaderContainer>
  );
};

export default Header;
