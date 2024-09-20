import styled from "styled-components";

const AppWrapper = styled.div`
  background-color: #f5f5f5;
  .header{
    height: 64px;
    background-color: #fff;
    box-sizing: border-box;
    border-bottom: 1px solid rgb(228, 231, 237);
  }
  .content{
  height: calc(100vh - 64px);
  display: flex;
   .main{
     flex: 1;
   }
}
`

export default AppWrapper
