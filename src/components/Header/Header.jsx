import React from "react";
import midium from "../../assets/images/Midium.jpg";
import { HeaderContainer } from "./HeaderStyle";

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
