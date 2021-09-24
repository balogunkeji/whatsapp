import styled from "styled-components";
export const SideBarWrapper = styled.div`
position: relative;


img{
 border-radius: 50%;
 width: 60px;
 height: 60px;
}

.side-bar-content{
 height: 100vh;

 .header{
 position: fixed;
 background-color: #131c21;
 width: 500px;
 height: 150px;
 max-width: 100%;
 border-bottom: 1px solid #323739;
.head{
 padding: 10px 20px;
 background-color:#323739;
 top:0;
 .icons{
  display: flex;
  svg{
   margin-left: 30px;
   width: 30px;
   height: 30px;
   justify-self: baseline;
   color: #c5c6c8;
  }
 }
 .icon{
  width: 23px;
  height: 23px;
 }
}

}
}


`;


/* 
.search{
 .input{
  margin: 15px auto 10px auto;
  background-color: #323739;
  height: 40px;
  border-radius: 20px;
  width: 470px;
  max-width: 100%;
  padding: 0 20px;
  div{
   display: flex;
  input{
   border: none;
   outline: none;
   background-color: transparent;
   margin-left: 20px;
   color: white;
  }
 }
  }
 }
}




 .bottom-with-scroll{
  height: 100%;
  overflow-y: auto;
 padding-top: 150px;
 background-color: #131c21;
  .body{
 
 padding-top: 150px;
 
 max-height: calc(100%-200px);
 img{
  margin: 10px 0;
 }
}
  
 }
} */