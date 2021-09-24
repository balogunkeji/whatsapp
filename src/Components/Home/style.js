import styled from "styled-components";
 
export const HomeWrapper = styled.section`
 width: 100%;
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
   @media (max-width: 480px){
    width: 100%;
   }
  }

  .main{
   flex-grow: 1;
   border-left: 2px solid #30383d;
   background-color: #262d31;
   height: 100vh;
   z-index: 10;
   @media (max-width: 480px){
    display: none;
   }
  }
 }
 
`;