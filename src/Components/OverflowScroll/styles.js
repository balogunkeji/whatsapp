import styled from "styled-components";

export const OverFlowScrollBar = styled("div")`
  width: 100%;
  height: 100%;

  div {
    scrollbar-color:  blue;
    scrollbar-width: thin;

    &::-webkit-scrollbar {
      width: 5px;
      height: 2px;
    }
    &::-webkit-scrollbar-button {
      width: 0;
      height: 5px;
    }
    &::-webkit-scrollbar-thumb {
      border-radius: 50px;
      background: #323739;
      /* height: 10px; */
    }
    &::-webkit-scrollbar-thumb:active {
      background: #323739;
    }
    &::-webkit-scrollbar-track {
      background: transparent;
      border-radius: 53px;
    }
    &::-webkit-scrollbar-track:hover {
      background: transparent;
    }
    &::-webkit-scrollbar-track:active {
      background: #e3e3e3;
    }
    &::-webkit-scrollbar-corner {
      background: #e3e3e3;
    }
  }
`;
