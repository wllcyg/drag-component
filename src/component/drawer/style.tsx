import styled from "styled-components";
type DrawerWrapperProps = {
  width?: number;
  animationDuration?: number;
  isOpen:boolean
};
const DrawerWrapper = styled.div<DrawerWrapperProps>`
  width: ${({width, isOpen}) => {
    return isOpen ? width : 2
  }}px;
  background-color: #fff;
  position: relative;
  transition: all 0.6s;
  .options-btn {
    position: absolute;
    background-color: #fff;
    top: 46%;
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }

  .left {
    right: -50px;
    border-top-right-radius: 16px;
    border-bottom-right-radius: 16px;
  }

  .right {
    left: -50px;
    border-top-left-radius: 16px;
    border-bottom-left-radius: 16px;
  }
`

export default DrawerWrapper
