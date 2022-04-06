import "./resizable.css";
import { ResizableBox } from "react-resizable";
interface ResizableProps {
  direction: "horizontal" | "vertical";
}

const Resizable: React.FC<ResizableProps> = ({ direction, children }) => {
  return (
    <ResizableBox
    minConstraints={[Infinity, 24]}
      maxConstraints={[Infinity, window.innerHeight * 0.9]}
      resizeHandles={["s"]}
      height={300}
      width={Infinity}
    >
      {children}
    </ResizableBox>
  );
};

export default Resizable;
