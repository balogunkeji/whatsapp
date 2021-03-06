import styled from "styled-components";
 
export const HomeWrapper = styled.section`

 max-width: 100%;
 height: fit-content;
 position: relative;
 overflow: hidden;

 .flex{
  display: flex;

  .sideBar{
   background-color: #131c21;
   width: 500px;
   max-width: 100%;
   height: 100vh;
   border-right: 1px solid #323739;
   @media (max-width: 1200px){
    width: 400px;
   }
   @media (max-width: 744px){
    width: 100%;
   }
  }

  .main{
   flex-grow: 1;
   background-color: #0d1418;
   width: 100%;
   height: 100%;
   max-width: 100%;
   overflow: hidden;
   border-left: 1px solid #323739;
   @media (max-width: 744px){
    display: none;
   }
  }
 }
 
`;