import React from "react";
import NavBar from "../components/NavBar/NavBar";
import styled from "styled-components";
import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";

const MainPage = () => {
  return (
    <>
      <TempPhoneContainer>
        <LayoutContainer>
          <Header />
          <ViewContainer>
            <NavBar />
            <Outlet />
          </ViewContainer>
        </LayoutContainer>
      </TempPhoneContainer>
    </>
  );
};

export default MainPage;

const TempPhoneContainer = styled.div`
  max-width: 480px;

  margin: 0 auto;
`;

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
`;

const ViewContainer = styled.div`
  padding: 0 24px;
  box-sizing: border-box;
`;
