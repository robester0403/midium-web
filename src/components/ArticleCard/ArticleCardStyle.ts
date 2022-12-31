import styled from "styled-components";

export const CardContainer = styled.div`
  padding: 8px 4px 0 4px;
  max-width: 480px;
  border-bottom: 1px solid lightgray;
  height: 100%;
  cursor: pointer;
  &:hover {
    background-color: #f5f5f5;
    transition: background-color 0.4s ease-in-out;
  }
`;

export const TextHighlight = styled.div`
  color: grey;
  font-weight: 400;
  font-size: 14px;
`;

export const CardTopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
