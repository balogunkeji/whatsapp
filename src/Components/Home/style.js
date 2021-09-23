import styled from "styled-components";
 
export const HomeWrapper = styled.section`
 width: 100%;
 max-width: 100%;
 height: fit-content;
 position: relative;
 overflow: hidden;

 .flex{
  display: grid;
  grid-template-columns: 2fr 4fr;

  .sideBar{
   background-color: #131c21;
   max-width: 100%;
   height: 100vh;
  }

  .main{
   border-left: 2px solid #30383d;
   background-color: #262d31;
   max-width: 100%;
   height: 100vh;
   z-index: 10;
  }
 }
 
`;