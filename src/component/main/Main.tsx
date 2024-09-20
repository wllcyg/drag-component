import CanvasWrapperStyle from "@/component/main/canvasWrapper.style.tsx";
const Main = ({className}:{className?:string}) => {
  return (
    <div className={className}>
      <CanvasWrapperStyle>
        <div className='canvas'></div>
      </CanvasWrapperStyle>
    </div>
  );
};

export default Main;
