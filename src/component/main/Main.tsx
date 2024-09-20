import CanvasWrapperStyle from "@/component/main/canvasWrapper.style.tsx";
const Main = ({className}:{className?:string}) => {
  return (
    <div className={className}>
      <CanvasWrapperStyle>
        <canvas className='canvas' >

        </canvas>
      </CanvasWrapperStyle>
    </div>
  );
};

export default Main;
