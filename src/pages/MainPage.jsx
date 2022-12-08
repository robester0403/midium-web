import React from "react";
import NavBar from "../components/NavBar/NavBar";
import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import {
  LayoutContainer,
  TempPhoneContainer,
  ViewContainer,
} from "./MainPageStyle";

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
