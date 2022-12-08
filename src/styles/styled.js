// For styled components please ctrl click on the original component to quick find the styling. Styled as according to the creator of styled components' example

import { TextField } from "@mui/material";
import styled from "styled-components";
import Loading from "../components/Loading";

export const CenteredLoading = styled(Loading)`
  && {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 48px auto;
  }
`;

//----------------------------------------------------------------------------//
// Article Card
//----------------------------------------------------------------------------//
export const CardContainer = styled.div`
  margin-top: 16px;
  border-bottom: 1px solid lightgray;
  height: 112px;
  cursor: pointer;
`;

export const TextHighlight = styled.span`
  color: grey;
  font-weight: 400;
`;

//----------------------------------------------------------------------------//
// Create Post
//----------------------------------------------------------------------------//
export const MarginedTextField = styled(TextField)`
  margin-bottom: 32px;
`;

export const FormContainer = styled.div`
  margin-top: 32px;
  height: 100%;
`;
