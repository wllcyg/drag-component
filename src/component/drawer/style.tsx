import styled from "styled-components";
type DrawerWrapperProps = {
  width?: number;
  animationDuration?: number;
  isOpen:boolean
};
const btnShaw = `0 2px 5px rgba(0, 0, 0, 0.3)`
const DrawerWrapper = styled.div<DrawerWrapperProps>`
  width: ${({width, isOpen}) => {
    return isOpen ? width : 2
  }}px;
  background-color: #fff;
  position: relative;
  transition: all 0.6s;
  box-shadow: ${btnShaw};

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
    box-shadow:${btnShaw};
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
