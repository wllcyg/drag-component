import DrawerWrapper from "@/component/drawer/style.tsx";
import {RightCircleOutlined} from "@ant-design/icons";
import {slideWidth} from "@/config.ts";

import classNames from "classnames";
import React, {useEffect, useState} from "react";
type DrawerProps = {
  position:'left' | 'right'
  width?:number
  animationDuration?:number,
  children?: React.ReactNode;
}
const Drawer = ({ position,width=slideWidth,animationDuration=1,children }:DrawerProps) => {
  const iconClass = classNames('options-btn',position)
  const [isOpen, setIsOpen] = useState(true)
  const [rotate, setRotate] = useState(0)
  const changeVisible = () => setIsOpen(prev => !prev);
  // 计算旋转角度并更新
  useEffect(() => {
    const newRotate = (position === 'left' && isOpen) || (position === 'right' && !isOpen) ? 180 : 0;
    setRotate(newRotate);
  }, [isOpen, position]);
  return (
    <DrawerWrapper width={width} animationDuration={animationDuration} isOpen={isOpen}>
      {children}
      <i className={iconClass}>
        <RightCircleOutlined style={{color:'#606266',fontSize: '24px',transform:`rotate(${rotate}deg)`}} onClick={changeVisible}/>
      </i>
    </DrawerWrapper>
  )
}

export default Drawer
