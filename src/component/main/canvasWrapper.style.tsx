import styled from "styled-components";
const margin = 60
const CanvasWrapperStyle = styled.div`
  margin: ${margin}px;
  overflow: auto;
  height: calc(100vh - 184px);
  position: relative;
  border: 1px solid rgba(5, 5, 5, 0.1);
  .canvas {
    position: absolute;
  }
`
export default CanvasWrapperStyle
